import { NextResponse } from "next/server";
import { Payment } from "mercadopago";
import mpClient from "@/app/lib/mercado-pago";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const paymentId = searchParams.get("payment_id");

  if (!paymentId) {
    return NextResponse.redirect(new URL("/payment/pending", request.url)); // ou home
  }

  try {
    const payment = new Payment(mpClient);
    const paymentData = await payment.get({ id: paymentId });

    const userId = paymentData.external_reference;

    if (paymentData.status === "approved") {
      return NextResponse.redirect(
        new URL(`/payment/success?userId=${userId}`, request.url)
      );
    }

    // Ainda pendente
    return NextResponse.redirect(new URL("/payment/pending", request.url));
  } catch (error) {
    console.error("Erro ao verificar pagamento:", error);
    return NextResponse.redirect(new URL("/?erro=pix", request.url));
  }
}
