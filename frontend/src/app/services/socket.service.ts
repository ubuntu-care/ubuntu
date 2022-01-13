import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { ToasterConfig } from 'angular2-toaster';

import {
  NbComponentStatus,
  NbGlobalPhysicalPosition,
  NbGlobalPosition,
  NbToastrService,
} from '@nebular/theme';
import { map } from 'rxjs';
import { TheadTitlesRowComponent } from 'ng2-smart-table/lib/components/thead/rows/thead-titles-row.component';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  constructor(private socket: Socket, private toastrService: NbToastrService) { }

  messages: any;
  config: ToasterConfig;

  index = 1;
  destroyByClick = true;
  duration = 20000;
  hasIcon = true;
  position: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_RIGHT;
  preventDuplicates = false;
  status: NbComponentStatus = 'primary';

  title = 'Message Alert!';


  // emit event
  fetchMessage() {
    this.socket.emit('fetch message', { from: 'ngx-admin' });
  }

  // listen event
  OnFetchMessage() {
    this.socket.on('new message', () => {
      console.log('some messages')
      this.makeToast();
    })
  };


  makeToast() {
    this.showToast(this.status, this.title, 'You have a new message coming in!');
  }

  private showToast(type: NbComponentStatus, title: string, body: string) {
    const hasIcon = this.hasIcon ? {} : { icon: '' };
    const config = {
      status: type,
      destroyByClick: this.destroyByClick,
      duration: this.duration,
      position: this.position,
      preventDuplicates: this.preventDuplicates,
      ...hasIcon,
    };
    const titleContent = title ? `. ${title}` : '';

    this.index += 1;
    this.toastrService.show(
      body,
      `Toast ${this.index}${titleContent}`,
      config);
  }
}
