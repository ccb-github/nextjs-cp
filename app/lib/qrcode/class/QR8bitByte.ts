//---------------------------------------------------------------------
// QRMode 二维码的模式
//---------------------------------------------------------------------

import QRBitBuffer from "./QRBuffer";

const QRMode = {
	MODE_NUMBER :		1 << 0,
	MODE_ALPHA_NUM : 	1 << 1,
	MODE_8BIT_BYTE : 	1 << 2,
	MODE_KANJI :		1 << 3
};
export {QRMode}

//QR8BITMODE INTERFACE
export default class QR8bitByte {
	mode: number;
	data: string;
	constructor(data: string){		
    this.mode = QRMode.MODE_8BIT_BYTE;
	  this.data = data;
  }

	getLength(): number {
		return this.data.length;
	}
	
	writeToBuffer(buffer: QRBitBuffer): void {
		for (let i = 0; i < this.data.length; i++) {
			// not JIS ...
			buffer.put(this.data.charCodeAt(i), 8);
		}
	}
}