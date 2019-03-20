import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-object-nest',
  templateUrl: './object-nest.component.html',
  styleUrls: ['./object-nest.component.scss']
})
export class ObjectNestComponent implements OnInit {
  collapsed = false;

  constructor() { }

  ngOnInit() {
  }

  collapseAndExpand(event) {
    this.collapsed = !this.collapsed;
  }
}
