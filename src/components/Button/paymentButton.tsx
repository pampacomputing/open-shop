"use client";

import useMercadoPago from "@/app/hooks/useMercadoPago";

export default function PaymentButton({ className: Style = "" }) {
  const { createMercadoPagoCheckout } = useMercadoPago();
  return (
    <button
      onClick={() =>
        createMercadoPagoCheckout({
          testeId: "123",
          userEmail: "danielftomm@hotmail.com",
        })
      }
      className={Style}
    >
      Buy
    </button>
  );
}
