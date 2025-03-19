"use client";

import React from "react";
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

// Default Logo
const DefaultSVG = () => (
  <svg
    width="70px"
    height="70px"
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>default_file</title>
    <path
      d="M20.414,2H5V30H27V8.586ZM7,28V4H19v6h6V28Z"
      className="fill-[#c5c5c5]"
    />
  </svg>
);

// Login Icon
const LoginSVG = () => (
  <svg
    width="30px"
    height="30px"
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="16"
      cy="16"
      fill="none"
      r="15"
      stroke="gray"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="2"
    />
    <path
      d="M26,27L26,27 c0-5.523-4.477-10-10-10h0c-5.523,0-10,4.477-10,10v0"
      fill="none"
      stroke="gray"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="2"
    />
    <circle
      cx="16"
      cy="11"
      fill="none"
      r="6"
      stroke="gray"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="2"
    />
  </svg>
);

// Default title
const defaultMessage = "Title";

// Header component
export default function Header({
  svg: Logo = DefaultSVG,
  title = defaultMessage,
  Auth = false,
}) {
  return (
    <header className="flex items-center justify-between mx-8 mt-10">
      <div className="flex justify-center items-center gap-4">
        <Logo />
        <h1 className="text-4xl font-bold">{title}</h1>
      </div>

      {Auth ? (
        <LogoutLink postLogoutRedirectURL="/">
          <img
            src="/icons8-logout-ios7-16.png"
            alt="Logout Icon"
            className="w-6 h-6"
          />
        </LogoutLink>
      ) : (
        <LoginLink>
          <LoginSVG />
        </LoginLink>
      )}
    </header>
  );
}
