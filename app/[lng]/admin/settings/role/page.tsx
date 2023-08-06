import { useTranslation } from "#/lib/i18n";
import { BasePageProps } from "#/types/pageProp";



export default async function Page({params}: BasePageProps) {
  const { t } = await useTranslation(params.lng, 'message')
	
  return (
    <div className="space-y-8 h-full w-full overflow-x-scroll overflow-y-scroll">
      
    
    </div>
  )
  }
