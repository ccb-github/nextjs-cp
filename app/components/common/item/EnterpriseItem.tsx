'use client'
import { useTranslation } from "#/lib/i18n/client"
import { SchemaResultMapper } from "#/types/schema"

export default function EnterpriseItem({
  lng,
  item,
}: {
  lng: string;
  item: SchemaResultMapper["Enterprise"];
}) {
  const { t } = useTranslation(lng);

  return (
    <div data-v-3bcbdc80="" className="product_content">
      <table data-v-3bcbdc80="">
        <thead>
        <tr data-v-3bcbdc80="">
            <td data-v-3bcbdc80="" colSpan={2} style={{ textAlign: "left" }}>
              {/**/}
              <span
                data-v-3bcbdc80=""
                style={{ fontSize: "2rem", fontWeight: "bold", marginLeft: 5 }}
              >
                {t("Enterprise")}
              </span>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr data-v-3bcbdc80="">
            <td data-v-3bcbdc80="" width="20%">
              <span data-v-3bcbdc80="" className="text-attr">
                _id
              </span>
            </td>
            <td data-v-3bcbdc80="">{item._id.toString()}</td>
          </tr>
          <tr data-v-3bcbdc80="">
            <td data-v-3bcbdc80="" width={120}>
              <span data-v-3bcbdc80="" className="text-attr">
                {t("Address")}
              </span>
            </td>
            <td data-v-3bcbdc80="">
              <span data-v-3bcbdc80="">{item.address}</span>
            </td>
          </tr>
          <tr data-v-3bcbdc80="">
            <td data-v-3bcbdc80="">
              <span data-v-3bcbdc80="" className="text-attr">
                {t("Brand Name")}
              </span>
            </td>
            <td data-v-3bcbdc80="">
              <span data-v-3bcbdc80="">product.name %&gt;</span>
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
                  该商品条码已注册
                </div>
              </div>
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
                净含量：
              </span>
            </td>
            <td data-v-3bcbdc80="">1个</td>
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
        </tbody>
      </table>
      <div
        data-v-3bcbdc80=""
        className="el-row"
        style={{ marginLeft: "-20px", marginRight: "-20px", marginTop: 10 }}
      >
        <div
          data-v-3bcbdc80=""
          className="el-col el-col-6"
          style={{ paddingLeft: 20, paddingRight: 20 }}
        >
          {/**/}
          {/* <img
              data-v-3bcbdc80=""
              src="https://chinatrace.org/barcode/gensvg?type=ean13&msg=697560240206&fmt=png&hrsize=5pt&hrfont=OCR-B&qz=0.2cm&wf=1&mw=0.17mm&height=1cm"
            /> */}
        </div>
      </div>
    </div>
  );
}