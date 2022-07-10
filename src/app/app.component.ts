import { Component } from '@angular/core';
import { BlockService } from './block.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  datas: string[] = [];
  data: string;

  constructor(private blockService: BlockService) {}

  addData(data: string) {
    this.datas.push(data);
    this.data = undefined;
  }

  async addBlock() {
    await this.blockService.addBlock(this.datas);
    this.datas = [];
  }

  getBlockHashes(): string[] {
    return this.blockService.blocks.map((f) => f.hash);
  }
}
