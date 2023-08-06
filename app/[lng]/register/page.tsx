import { BasePageProps } from '#/types/pageProp'

import RegisterForm from '#/components/login/RegisterForm';
import { useTranslation } from '#/lib/i18n';

export default async function Page({ params: { lng } }: BasePageProps) {
 
  const { t } = await useTranslation(lng, "admin")
  
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <RegisterForm lng={lng}/>
        <hr style={{ marginTop: 20, width: "100%" }} />
      </main>
    </>
  );
}
