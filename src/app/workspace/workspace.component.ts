import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css']
})
export class WorkspaceComponent implements OnInit {

  navLinks: string[];

  constructor() { }

  ngOnInit() {
    this.navLinks = ['foo1', 'foo2', 'foo3']; // , 'bar1'];
  }

}
