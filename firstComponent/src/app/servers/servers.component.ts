import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.less']
})
export class ServersComponent implements OnInit {
  sampleText = "initial";
  constructor() { }

  ngOnInit() {
  }

  onServerClick() {
    this.sampleText = "clicked";
  }

}
