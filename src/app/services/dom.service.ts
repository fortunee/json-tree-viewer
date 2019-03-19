import {
  Injectable,
  Injector,
  ComponentFactoryResolver,
  EmbeddedViewRef,
  ApplicationRef,
  ComponentRef
} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DomService {

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector) { }

  appendComponentToRootElement(component: any, data: any, key: any, step: number, parentComponent) {
    // 1. Create a component reference from the component
    const componentRef = this.componentFactoryResolver
      .resolveComponentFactory(component)
      .create(this.injector);


    const componentInstance = (componentRef.instance as any);
    componentInstance.key = key;
    componentInstance.margin = `${step * 20}px`;
    if (typeof data !== 'object') {
      componentInstance.value = data;
    }

    if (typeof data === 'string') {
      componentInstance.inputType = 'text';
    }

    if (typeof data === 'number') {
      componentInstance.inputType = 'number';
    }

    // 2. Attach component to the appRef so that it's inside the ng component tree
    this.appRef.attachView(componentRef.hostView);

    // 3. Get DOM element from component
    const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;

    // 4. Append DOM element to the body
    parentComponent.appendChild(domElem);

    return this.getDomElementFromComponentRef(componentRef).querySelector('p');
  }

  getDomElementFromComponentRef(componentRef: ComponentRef<any>): HTMLElement {
    return (componentRef.hostView as EmbeddedViewRef<any>)
        .rootNodes[0] as HTMLElement;
  }

}
