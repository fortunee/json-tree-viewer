import { Component } from '@angular/core';
import source from '../assets/source-object-example.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'json-tree-like-viewer';
  source = source;

  constructor() {}
}
