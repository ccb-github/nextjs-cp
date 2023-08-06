//---------------------------------------------------------------------
// class QRBitBuffer
//---------------------------------------------------------------------
export default class QRBitBuffer {
  buffer: Uint8Array;
  length: number;
  constructor() {
    this.buffer = new Uint8Array(200);
    this.length = 0;
  }
  /**
   * get the bit value at index
   */
  get(index: number) {
    var bufIndex = Math.floor(index / 8);
    return ((this.buffer[bufIndex] >>> (7 - (index % 8))) & 1) == 1;
  }

  put(num: number, length: number) {
    for (let i = 0; i < length; i++) {
      this.putBit(((num >>> (length - i - 1)) & 1) == 1);
    }
  }

  getLengthInBits() {
    return this.length;
  }

  putBit(bit: boolean) {
    var bufIndex = Math.floor(this.length / 8);
    if (this.buffer.length <= bufIndex) {
      
      //this.buffer.set;
      //Fill placeholder
    }
    if (bit) {
      this.buffer[bufIndex] |= 0x80 >>> this.length % 8;
    }

    this.length++;
  }
}
