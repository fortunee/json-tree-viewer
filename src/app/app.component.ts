import { Component } from '@angular/core';
import { DomService } from './services/dom.service';
import { TextInputComponent } from './components/text-input/text-input.component';

import source from '../assets/source-object-example.json';
import { NumberInputComponent } from './components/number-input/number-input.component';
import { CheckBoxComponent } from './components/check-box/check-box.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'json-tree-like-viewer';
  source = source;
  step = -1;
  parents = [];

  constructor(private domService: DomService) {
    this.displayData(this.source);
  }

  displayData(data) {
    this.step++;

    // tslint:disable-next-line:forin
    for (const key in data) {
      // Stack DS approach
      const immediate = this.parents.length ? this.parents[this.parents.length - 1] : document.body;
      if (typeof data[key] === 'object' && data[key] !== null) {
        const component = this.returnComponent(key, data[key]);
        this.parents.push(this.domService.appendComponentToRootElement(component, data[key], key, this.step, immediate));
        this.displayData(data[key]);
      } else {
        const component = this.returnComponent(key, data[key]);

        this.domService.appendComponentToRootElement(component, data[key], key, this.step, immediate);
      }

      const allKeys = Object.keys(data);

      if (allKeys[allKeys.length - 1] === key) {
        this.step--;
        this.parents.pop();
      }
    }
  }

  returnComponent(key, value) {
    switch (typeof value) {
      case 'string': {
        return TextInputComponent;
      }

      case 'number': {
        return NumberInputComponent;
      }

      case 'boolean': {
        return CheckBoxComponent;
      }

      case 'object': {
        /**
         * Object component children style
         *    height: 20px;
         *    overflow: hidden;
         *    margin-left: 0px;
         */
        return CheckBoxComponent;
      }

      default:
        return TextInputComponent;
    }
  }
}
