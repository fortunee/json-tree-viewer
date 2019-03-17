import { Component } from '@angular/core';
import { DomService } from './services/dom.service';
import { TextInputComponent } from './components/text-input/text-input.component';

import source from '../assets/source-object-example.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'json-tree-like-viewer';
  source = source;

  constructor(private domService: DomService) {
    this.displayData(this.source);
  }

  displayData(data) {
    for (const key in data) {
      if (typeof data[key] === 'object' && data[key] !== null) {
        // Display current obj as a bullet before calling displayData recursively
        this.domService.appendComponentToRootElement(this.returnComponent(key, data[key]), data);
        this.displayData(data[key]);
      } else {
        // Display data in the appropriate component
        this.domService.appendComponentToRootElement(this.returnComponent(key, data[key]), data);
      }
    }
  }

  returnComponent(key, value) {
    switch (typeof value) {
      case 'string': {
        return TextInputComponent;
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
