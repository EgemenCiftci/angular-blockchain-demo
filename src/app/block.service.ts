import { Injectable } from '@angular/core';
import { Block } from './models/block';

@Injectable()
export class BlockService {
  blocks: Block[] = [];
  previousHash: string;

  async addBlock(datas: any[]) {
    const block = new Block(
      this.blocks.length,
      0,
      datas,
      undefined,
      this.previousHash
    );
    block.hash = await this.hash(JSON.stringify(block));
    this.blocks.push(block);
    this.previousHash = block.hash;
  }

  async hash(data: string): Promise<string> {
    const msgBuffer = new TextEncoder().encode(data);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
      .map((b) => b.toString(16).padStart(2, '0'))
      .join('');
    return hashHex;
  }
}
