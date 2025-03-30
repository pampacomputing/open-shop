import "server-only";
import { PaymentResponse } from "mercadopago/dist/clients/payment/commonTypes";

/**
 * Lida com o pagamento retornado pelo Mercado Pago
 * após o pagamento ser aprovado.
 *
 * @param paymentData Dados do pagamento vindos do Mercado Pago
 */
export async function handleMercadoPagoPayment(paymentData: PaymentResponse) {
  const metadata = paymentData.metadata;

  const userEmail = metadata?.user_email;
  const testeId = metadata?.teste_id;

  // Verifica se os dados essenciais existem
  if (!userEmail || !testeId) {
    console.warn("Pagamento recebido sem metadados completos:", metadata);
    return;
  }

  // Aqui você pode realizar as ações necessárias:
  // - Liberar acesso ao teste
  // - Salvar no banco de dados
  // - Enviar e-mail de confirmação
  // - Logar o pagamento

  console.log("Pagamento aprovado:");
  console.log("Email do usuário:", userEmail);
  console.log("ID do teste:", testeId);

  // Exemplo fictício: liberar acesso no banco
  await grantUserAccessToTest(userEmail, testeId);

  // Exemplo fictício: enviar email
  // await sendPaymentConfirmationEmail(userEmail, testeId);

  return;
}

/**
 * Exemplo de função que libera acesso ao teste no banco de dados.
 * Substitua por sua lógica real.
 */
async function grantUserAccessToTest(email: string, testeId: string) {
  // Exemplo: salvar em banco que o usuário tem acesso ao teste
  console.log(`Acesso ao teste ${testeId} concedido para ${email}`);
}
