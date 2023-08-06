
import AccountPermissionManage from '#/components/admin/account/AccountPermissionManage';
import { BasePageParams, BasePageProps } from '#/types/pageProp';




 
export default async function Page({ params, searchParams}: BasePageProps) {
  const { lng } = params
  const { id } = searchParams
 
  if(id === undefined) 
    return null
  
  return (
    <AccountPermissionManage lng={lng} id={id as string}/>    
  );
}