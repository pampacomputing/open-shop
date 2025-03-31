import { NextRequest, NextResponse } from "next/server";
import { Preference } from "mercadopago";
import mpClient from "@/app/lib/mercado-pago";

export async function POST(req: NextRequest) {
  try {
    const { userId } = await req.json();

    const preference = new Preference(mpClient);
    const createdPreference = await preference.create({
      body: {
        external_reference: userId,
        items: [
          {
            id: "produto-123",
            description: "Assinatura Premium",
            title: "Assinatura",
            quantity: 1,
            unit_price: 0.01,
            currency_id: "BRL",
          },
        ],
        payment_methods: {
          // excluded_payment_methods: [
          //   {
          //     id: "bolbradesco",
          //   },
          //   {
          //     id: "pec",
          //   },
          // ],
          // excluded_payment_types: [
          //   {
          //     id: "debit_card",
          //   },
          //   {
          //     id: "credit_card",
          //   },
          // ],
          installments: 12, 
        },
        metadata: {
          user_Id: userId,
        },
        auto_return: "approved",
        back_urls: {
          success: `${req.headers.get("origin")}/payment/success?userId=${userId}`,
          failure: `${req.headers.get("origin")}/?status=falha`,
          pending: `${req.headers.get("origin")}/api/mercado-pago/pending`,
        },
      },
    });

    if (!createdPreference?.id) {
      throw new Error("Não foi gerado preference ID.");
    }

    return NextResponse.json({
      preferenceId: createdPreference.id,
      initPoint: createdPreference.init_point,
    });
  } catch (err) {
    console.error("Erro ao criar checkout:", err);
    return NextResponse.json({ error: true }, { status: 500 });
  }
}
