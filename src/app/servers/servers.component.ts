import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  countServer = 0;
  serverCreationStatus = 'No server was created!';
  serverName = '';
  servers = ['sv1', 'sv2']
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Have ' + (++this.countServer) + ' server created! Name is ' + this.serverName;
  }

  onChangeServerName(event: any) {
    console.log(event.target);
    this.serverName = event.target.value;
  }

}
