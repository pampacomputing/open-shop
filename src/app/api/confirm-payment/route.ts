// app/api/confirm-payment/route.ts
import { NextResponse } from "next/server";
import { Payment } from "mercadopago";
import mpClient from "@/app/lib/mercado-pago";
import { assignRoleToKindeUser } from "@/app/server/assignRoleToKindeUser";

export async function POST(req: Request) {
  try {
    const { paymentId, userId } = await req.json();
    
    // 1) Verifica status no Mercado Pago
    const payment = new Payment(mpClient);
    const mpResult = await payment.get({ id: paymentId });

    if (mpResult.status === "approved") {
      // 2) Se aprovado, chama a função que atribui role no Kinde
      await assignRoleToKindeUser(userId);
      return NextResponse.json({ ok: true, message: "Role atribuída!" });
    }

    return NextResponse.json({
      ok: false,
      message: `Pagamento com status: ${mpResult.status}`,
    });
  } catch (error) {
    console.error("Erro ao confirmar pagamento:", error);
    return NextResponse.json({ ok: false, error: true }, { status: 500 });
  }
}
