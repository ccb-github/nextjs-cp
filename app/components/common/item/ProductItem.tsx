'use client'

import { useTranslation } from "#/lib/i18n/client"
import Link from "next/link"
import BlurImage from "../BlurImage"
import { FiLoader } from "react-icons/fi"

export default function ProductItem({lng, product}: {lng: string, product: {
  name: string,
  catgory: string,
}}){
    const {t} = useTranslation(lng, "product")
    
    return (
      <div data-v-3bcbdc80="" className="product_content">
        <table data-v-3bcbdc80="">
          <tbody>
            <tr data-v-3bcbdc80="">
              <td data-v-3bcbdc80="" colSpan={2} style={{ textAlign: "left" }}>
                <span
                  data-v-3bcbdc80=""
                  style={{ fontSize: "2rem", fontWeight: "bold", marginLeft: 5 }}
                >
                  {product.name}
                </span>
              </td>
            </tr>
            <tr data-v-3bcbdc80="">
              <td data-v-3bcbdc80="" width="20%">
                <span data-v-3bcbdc80="" className="text-attr">
                  商品条码：
                </span>
              </td>
              <td data-v-3bcbdc80="">06975602402061</td>
            </tr>
            <tr data-v-3bcbdc80="">
              <td data-v-3bcbdc80="" width={120}>
                <span data-v-3bcbdc80="" className="text-attr">
                  产品名称：
                </span>
              </td>
              <td data-v-3bcbdc80="">
                <span data-v-3bcbdc80="">{product.name}</span>
              </td>
            </tr>
            <tr data-v-3bcbdc80="">
              <td data-v-3bcbdc80="">
                <span data-v-3bcbdc80="" className="text-attr">
                  {t("Brand Name")}
                </span>
              </td>
              <td data-v-3bcbdc80="">
                <span data-v-3bcbdc80="">{product.catgory}</span>
              </td>
            </tr>
            <tr data-v-3bcbdc80="">
              <td data-v-3bcbdc80="">
                <span data-v-3bcbdc80="" className="text-attr">
                  {"Qrcode status"}
                </span>
              </td>
              <td data-v-3bcbdc80="">
                <div data-v-3bcbdc80="" className="attr_value">
                  <div
                    data-v-3bcbdc80=""
                    className="el-tooltip lineTwoEllipsis"
                    aria-describedby="el-tooltip-4345"
                    tabIndex={0}
                  >
                    
                  </div>
                </div>
                {/**/}
                {/**/}
              </td>
            </tr>
            <tr data-v-3bcbdc80="">
              <td data-v-3bcbdc80="">
                <span data-v-3bcbdc80="" className="text-attr">
                  产品分类：
                </span>
              </td>
              <td data-v-3bcbdc80="">
                <span data-v-3bcbdc80="">手机外壳</span>
                <span data-v-3bcbdc80="">(10001178)</span>
              </td>
            </tr>
            <tr data-v-3bcbdc80="">
              <td data-v-3bcbdc80="">
                <span data-v-3bcbdc80="" className="text-attr">
                  {t("Date")}
                </span>
              </td>
              <td data-v-3bcbdc80="">
                <span data-v-3bcbdc80="">2022-12-30</span>
              </td>
            </tr>
            <tr data-v-3bcbdc80="">
              <td data-v-3bcbdc80="">
                <span data-v-3bcbdc80="" className="text-attr">
                  规格：
                </span>
              </td>
              <td data-v-3bcbdc80="">iPhone 8</td>
            </tr>
          
            <tr data-v-3bcbdc80="">
              <td data-v-3bcbdc80="">
                <span data-v-3bcbdc80="" className="text-attr">
                  {t("Suggest price")}
                </span>
              </td>
              <td data-v-3bcbdc80="">
                39<span data-v-3bcbdc80="">元</span>
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
            <tr data-v-3bcbdc80="">
              <td data-v-3bcbdc80="">
                <span data-v-3bcbdc80="" className="text-attr">
                  {t("Related order")}
                </span>
              </td>
              <td data-v-3bcbdc80="">
                {/* We should adjust the height later */}
                <Link prefetch={false} href={"#"}>load</Link> 
                <FiLoader className="w-4"/>
              </td>
            </tr>
          </tbody>
        </table>
       
      </div>
    )
}