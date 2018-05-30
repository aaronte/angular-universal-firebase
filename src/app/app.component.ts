declare let window: any;

import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  renderer = '';

  constructor(@Inject(PLATFORM_ID) private platformId: string) {}

  ngOnInit() {
    this.renderer = isPlatformBrowser(this.platformId) ? 'Browser' : 'Server';
  }

  openAlert() {
    if (isPlatformBrowser(this.platformId)) {
      window.alert('Yes it is!');
    }
  }
}
