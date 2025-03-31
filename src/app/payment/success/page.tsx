"use client";

import { useEffect, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const userId = searchParams.get("userId");
  const paymentId = searchParams.get("collection_id");
  const status = searchParams.get("collection_status");
  const router = useRouter();

  const alreadyFetched = useRef(false);

  useEffect(() => {
    if (alreadyFetched.current) return;
    if (status === "approved" && paymentId && userId) {
      alreadyFetched.current = true; 

      fetch("/api/confirm-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ paymentId, userId }),
      })
        .then(() => {
          window.location.href = "http://localhost:3000/api/auth/logout?post_logout_redirect_url=localhost:3000/api/auth/login";
        })
        .catch(console.error);
    } else {
      console.log("Pagamento não aprovado ou falta de parâmetros");
    }
  }, [status, paymentId, userId, router]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>Sucesso no pagamento!</h1>
      <p>Verificando status...</p>
    </div>
  );
}
