import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { CropperComponent } from 'angular-cropperjs';

@Component({
  selector: 'app-antd',
  templateUrl: './antd.component.html',
  styleUrls: ['./antd.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AntdComponent implements OnInit {
  @ViewChild('angularCropper') angularCropper: CropperComponent;
  title = 'start';
  selectedValue = null;
  listOfOption: string[] = [];
  listOfSelectedValue = ['a10', 'c12'];

  listOfOption2: Array<{ value: string; text: string }> = [];
  listOfItem = ['jack', 'lucy'];
  index = 0;
  nzFilterOption = () => true;
  imageUrl: string = 'assets/images/cat.jpg';
  config: any = {
    viewMode: 2,
    zoomable: true
  };
  resultCrop: string = '';

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    const children: string[] = [];
    for (let i = 10; i < 36; i++) {
      children.push(`${i.toString(36)}${i}`);
    }
    this.listOfOption = children;
  }

  search(value: string): void {
    this.httpClient
      .jsonp<{ result: Array<[string, string]> }>(
        `https://suggest.taobao.com/sug?code=utf-8&q=${value}`,
        'callback'
      )
      .subscribe(data => {
        const listOfOption: Array<{ value: string; text: string }> = [];
        data.result.forEach(item => {
          listOfOption.push({
            value: item[0],
            text: item[0]
          });
        });
        this.listOfOption2 = listOfOption;
      });
  }

  addItem(input: HTMLInputElement): void {
    const value = input.value;
    if (this.listOfItem.indexOf(value) === -1) {
      this.listOfItem = [...this.listOfItem, input.value || `New item ${this.index++}`];
    }
  }

  crop() {
    this.angularCropper.cropper
      .getCroppedCanvas({
        imageSmoothingEnabled: false,
        imageSmoothingQuality: 'high'
      })
      .toBlob(
        blob => {
          const reader = new FileReader();
          reader.readAsDataURL(blob);
          reader.onload = () => {
            this.resultCrop = reader.result as string;
          };
        },
        'image/jpeg',
        0.95
      );
  }

  zoom() {
    this.angularCropper.cropper.zoom(0.1);
  }

  rotate() {
    this.angularCropper.cropper.rotate(-45);
  }
}
