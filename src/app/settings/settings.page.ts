import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  public notificaciones:boolean = true;
  constructor() { }

  ngOnInit() {
  }
  change(){
  	console.log(this.notificaciones);
  }
}
