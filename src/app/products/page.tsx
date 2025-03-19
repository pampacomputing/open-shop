import Button from "@/components/Button";
import Header from "@/components/Header";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";


export default async function Products() {
  const { isAuthenticated } = getKindeServerSession();
    const isLoggedIn= await isAuthenticated();
    if(!isLoggedIn) return redirect('/api/auth/login');
  return (
    <div className="w-screen h-screen flex flex-col justify-items-center gap-2 font-[family-name:var(--font-geist-sans)]">
      <div><Header Auth={isLoggedIn}/></div>
      <div className="w-full h-full flex-col justify-items-center">
        <div className="w-scrren flex flex-col h-full justify-around gap-10 justify-items-center p-10">
          <div className="w-full h-1/2 border border-solid flex justify-center items-center text-2xl">Content</div>
          <div className="w-full h-1/2 border border-solid flex justify-center items-center text-2xl">Content</div>
          <Button href="/pagamento">Payment</Button>
        </div>
      </div>
    </div>
  );
}