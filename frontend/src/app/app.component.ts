/*
 * Copyright (c) Ubuntu Care 2022. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */
import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from './@core/utils';
import { SocketService } from './services/socket.service';

@Component({
  selector: 'ngx-app',
  template: `<nb-layout>
  <nb-layout-column>
      <router-outlet></router-outlet>
   </nb-layout-column>
 </nb-layout>`,
})
export class AppComponent implements OnInit {

  constructor(private analytics: AnalyticsService, private socketService: SocketService) {
  }
  
  ngOnInit(): void {
    this.analytics.trackPageViews();
    this.socketService.fetchMessage();
    this.socketService.OnFetchMessage();
  }

}
