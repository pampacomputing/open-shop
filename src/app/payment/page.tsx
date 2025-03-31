"use client";

import { useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { initMercadoPago } from "@mercadopago/sdk-react";

export default function Payment() {
  const searchParams = useSearchParams();
  const userId = searchParams.get("userId");
  const router = useRouter();
  
  useEffect(() => {
    initMercadoPago(process.env.NEXT_PUBLIC_MERCADO_PAGO_PUBLIC_KEY!);
  }, []);  

  useEffect(() => {
    if (!userId) return;

    async function createCheckout() {
      try {
        const response = await fetch("/api/mercado-pago/create-checkout", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId }),
        });
  
        const data = await response.json();
  
        router.push(data.initPoint);
      } catch (error) {
        console.log(error);
      }
    }

    createCheckout();
  }, [userId, router]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>Redirecionando para o pagamento...</h1>
    </div>
  );
}
