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
    width="50px"
    height="50px"
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

const LogoutSVG = () => (
  <svg
    width="50px"
    height="50px"
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 3V12M18.3611 5.64001C19.6195 6.8988 20.4764 8.50246 20.8234 10.2482C21.1704 11.994 20.992 13.8034 20.3107 15.4478C19.6295 17.0921 18.4759 18.4976 16.9959 19.4864C15.5159 20.4752 13.776 21.0029 11.9961 21.0029C10.2162 21.0029 8.47625 20.4752 6.99627 19.4864C5.51629 18.4976 4.36274 17.0921 3.68146 15.4478C3.00019 13.8034 2.82179 11.994 3.16882 10.2482C3.51584 8.50246 4.37272 6.8988 5.6311 5.64001"
      stroke="gray"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
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
        <LogoutLink>
          <LogoutSVG />
        </LogoutLink>
      ) : (
        <LoginLink>
          <LoginSVG />
        </LoginLink>
      )}
    </header>
  );
}
