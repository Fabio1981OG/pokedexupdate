import { Directive, Input, ViewContainerRef, ComponentRef } from '@angular/core';
import { ToasterComponent } from './toaster/toaster.component';
@Directive({
  selector: '[appToaster]'
})
export class ToasterDirective {
  private toasterRef!: ComponentRef<ToasterComponent>;

  constructor(private viewContainerRef: ViewContainerRef) { }


  @Input() set appToaster(message: string) {
    if (!this.toasterRef) {
      this.toasterRef = this.viewContainerRef.createComponent(ToasterComponent);
      this.toasterRef.instance.message = message;

      setTimeout(() => {
        this.toasterRef.destroy();
      }, 100);
    }
  }
}