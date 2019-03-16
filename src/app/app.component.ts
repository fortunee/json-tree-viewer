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

  constructor() {
    this.displayData(this.source);
  }

  displayData(data) {
    for (const key in data) {
      if (typeof data[key] === 'object' && data[key] !== null) {
        // Display current obj as a bullet before calling displayData recursively
        this.returnComponent(key, data[key]);
        this.displayData(data[key]);
      } else {
        // Display data in the appropriate component
        this.returnComponent(key, data[key]);
      }
    }
  }

  returnComponent(key, value) {
    switch (typeof value) {
      case 'string': {
        return 'TextInput Component';
      }

      case 'number': {
        return 'NumberInput Component';
      }

      case 'boolean': {
        return 'Checkbox Component';
      }
    }
  }
}
