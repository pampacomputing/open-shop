// app/server/assignRoleToKindeUser.ts

export async function assignRoleToKindeUser(userId: string) {
    try {

      const resp = await fetch(`https://pampacomputing.kinde.com/api/v1/organizations/org_ddad3a175ee/users/${userId}/roles`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.KINDE_MANAGEMENT_API_TOKEN}`,
        },
        body: JSON.stringify({
        role_id: "0195e929-ea31-e6b4-f105-0512a5d47fcb",
        })
      });
  
      if (!resp.ok) {
        console.error("Erro ao atribuir role:", await resp.json());
        return;
      }
  
      console.log("✅ Role atribuída com sucesso no Kinde");
    } catch (err) {
      console.error("Erro ao chamar a API do Kinde:", err);
    }
  }
  