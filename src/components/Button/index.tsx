"use client";
import Link from "next/link";
import PaymentButton from "./paymentButton";

interface ButtonProps {
  children?: React.ReactNode;
  Style?: string;
  href?: string;
  isPayment?: boolean;
}

export default function Button({
  children,
  Style = "w-80 h-20 rounded bg-inherit shadow-md text-white flex justify-center items-center border-2 border-solid hover:bg-gray-400 hover:text-white/40",
  href = "/",
  isPayment = false,
}: ButtonProps) {
  return isPayment ? (
    <PaymentButton />
  ) : (
    <Link href={href} className={Style}>
      {children}
    </Link>
  );
}
