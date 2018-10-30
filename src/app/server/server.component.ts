import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  // styleUrls: ['./server.component.css']
  styles: [`
    .online {
      color: cornsilk;  
    }
  `]
})
export class ServerComponent implements OnInit {
  private _serverId: number = 10;
  private _serverStatus: string = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline'
  }

  get serverId(): number {
    return this._serverId;
  }

  set serverId(value: number) {
    this._serverId = value;
  }

  get serverStatus(): string {
    return this._serverStatus;
  }

  set serverStatus(value: string) {
    this._serverStatus = value;
  }

  constructor() { }

  ngOnInit() {
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

}
