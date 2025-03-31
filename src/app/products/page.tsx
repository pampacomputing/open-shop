import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import Header from "@/components/Header";
import ClientVideoSlider from "./ClientVideoSlider"; // importa o client component

export default async function Products() {
  const { getRoles } = getKindeServerSession();
  const role = await getRoles();
  const isLoggedIn = role?.some((role) => role.key === "financial-approver");

  if (!isLoggedIn) return redirect("/api/auth/login");

  return (
    <div className="w-screen min-h-screen flex flex-col gap-2 bg-black text-white">
      <Header Auth={isLoggedIn} />
      <ClientVideoSlider />
    </div>
  );
}
