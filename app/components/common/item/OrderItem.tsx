import { useTranslation } from "#/lib/i18n/client"
import Link from "next/link"
import BlurImage from "#/components/common/BlurImage"
import { UUID } from "crypto"
import { usePathname } from "next/navigation"

export default function OrderItem({lng, order}: {lng: string, order: {
  _id: UUID,
  name: string,
  catgory: string,
  orderTime: Date
}}){
    const {t} = useTranslation(lng)
    const path = usePathname()
    return (
      <div data-v-3bcbdc80="" className="order_content">
        <table data-v-3bcbdc80="">
          <tbody>
            <tr data-v-3bcbdc80="">
              <td data-v-3bcbdc80="" colSpan={2} style={{ textAlign: "left" }}>
                <span
                  data-v-3bcbdc80=""
                  style={{ fontSize: "2rem", fontWeight: "bold", marginLeft: 5 }}
                >
                  {order._id.toString()}
                </span>
              </td>
            </tr>
            <tr data-v-3bcbdc80="">
              <td data-v-3bcbdc80="">
                <span data-v-3bcbdc80="" className="text-attr">
                  {t("Id")}
                </span>
              </td>
              <td data-v-3bcbdc80="">
                <span data-v-3bcbdc80="">{order._id.toString()}</span>
              </td>
            </tr>
          
          
            
          
            <tr data-v-3bcbdc80="">
              <td data-v-3bcbdc80="">
                <span data-v-3bcbdc80="" className="text-attr">
                  {t("Created time")}
                </span>
              </td>
              <td data-v-3bcbdc80="">
                <span data-v-3bcbdc80="">{}</span>
              </td>
            </tr>
           
         
            <tr data-v-3bcbdc80="">
              <td data-v-3bcbdc80="">
                <span data-v-3bcbdc80="" className="text-attr">
                  {t("Products")}
                </span>
              </td>
              <td >
              {
                order.products.map( 
                  (product, index: number) => 
                  <span key={index}>
                    <Link prefetch={false} href={`./${path.split('/').slice(-1)}/product/${product.toString()}`} data-id={product}>
                      {product.toString()}
                    </Link>
                  </span>      
                )
              }
              </td>
            </tr>
            <tr data-v-3bcbdc80="">
              <td data-v-3bcbdc80="">
                <span data-v-3bcbdc80="" className="text-attr">
                  {t("Preview")}
                </span>
              </td>
              <td data-v-3bcbdc80="">
                {/* We should adjust the height later */}
                <BlurImage
                  width={128}
                  height={128}
                  alt={t("Item iamge")}
                  src={"https://chinatrace.org/barcode/gensvg?type=ean13&msg=697560240206&fmt=png&hrsize=5pt&hrfont=OCR-B&qz=0.2cm&wf=1&mw=0.17mm&height=1cm"}
                /> 
              </td>
            </tr>
          </tbody>
        </table>
       
      </div>
    )
}