"use client";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs";

export default function PaymentButton({ className: Style = "" }) {
  
  return (
    <RegisterLink
      className={Style}
    >
      Buy
    </RegisterLink>
  );
}
