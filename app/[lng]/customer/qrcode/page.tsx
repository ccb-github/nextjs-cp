import { BasePageProps } from '#/types/pageProp';

const QRCODE_TYPE_SELECT: {type: string, label: string}[] = [
  {type: "URL", label: "Url type"}
]

export default function Page({ params: { lng } }: BasePageProps) {
  return (
    <div className="space-y-4">
      <h1>QR Code Generator</h1> <label>Select QR Code</label>
      <select id="qrType">
        <option value="text">Text</option>
        <option value="url">URL</option>
        <option value="phone Number">NUMBER</option>
        <option value="email">Email Address</option>
      </select>
    </div>
  );
}
