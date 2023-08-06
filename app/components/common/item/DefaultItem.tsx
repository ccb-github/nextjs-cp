import { useTranslation } from "#/lib/i18n/client";

/**
 * Render default data item with html table
 * @param {string} {lng}
 * @param {any} {item:The data we need}
 * @returns {any}
 */
export default function DefaultItem({lng, item}: {lng: string, item: any}){
  const { t } = useTranslation(lng)
  return (
    <table data-v-3bcbdc80="">
      <tbody>
        {
          Object.entries(item).map(
            (itemEntry: [string, any]) => (
              <tr data-v-3bcbdc80="" key={itemEntry[0]}>
                <td data-v-3bcbdc80="">
                  <span data-v-3bcbdc80="" className="text-attr">
                    {t(itemEntry[0])}
                  </span>
                </td>
                <td data-v-3bcbdc80="">
                  <span data-v-3bcbdc80="">
                    {JSON.stringify(itemEntry[1])}
                  </span>
                </td>
              </tr>
            )
          )
        }
      </tbody>
    </table>
  )
}    