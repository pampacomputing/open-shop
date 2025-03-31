import Button from "@/components/Button";
import Header from "@/components/Header";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const { isAuthenticated, getRoles, getUser } = getKindeServerSession();

  const isRegistered = (await isAuthenticated()) || false;
  const roles = await getRoles();
  const isSubscriber = roles?.some((r) => r.key === "financial-approver") || false;
  console.log("isRegistered", isRegistered);
  console.log("isSubscriber", isSubscriber);
  // Se logado e não for assinante, manda para pagamento
  if (isRegistered && !isSubscriber) {
    const user = await getUser();
    redirect(`/payment?userId=${user?.id}`);
  }

  return (
    <div className="w-screen h-screen flex flex-col gap-2">
      <Header Auth={isRegistered} />
      <div className="w-full h-full flex flex-col items-center p-10 gap-2">
        <div className="w-full h-full border border-solid flex justify-center items-center text-2xl">
          Conteúdo aberto
        </div>
        {isSubscriber ? (
          <Button href="/products">Página de Produtos</Button>
        ) : (
          <Button isPayment={true} />
        )}
      </div>
    </div>
  );
}
