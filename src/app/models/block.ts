export class Block {
  constructor(
    public id: number,
    public nonce: number,
    public data: any,
    public hash: string,
    public previousHash: string
  ) {}
}
