"use client";
import useMercadoPago from "@/app/hooks/useMercadoPago";

export default function PaymentButton() {
  const { createMercadoPagoCheckout } = useMercadoPago();
  return (
    <button
      onClick={() =>
        createMercadoPagoCheckout({
          testeId: "123",
          userEmail: "loveyuuqr@gmail.com",
        })
      }
      className="bg-blue-500 text-white px-4 py-2 rounded-md"
    >
      Comprar
    </button>
  );
}
