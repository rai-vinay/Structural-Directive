import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appHideAfter]'
})
export class HideAfterDirective  implements OnInit{
  private hasView = false;
  // @Input()
  // delay = 0;

  constructor(private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { }
ngOnInit(): void {
this.viewContainer.createEmbeddedView(this.templateRef);
// console.log('viewEngine_ComponentFactory');
// setTimeout(() =>{
//   this.viewContainer.clear();
// },this.delay)
// }
}
@Input() set appHideAfter(condition: boolean) {
  if (!condition && !this.hasView) {
    this.viewContainer.createEmbeddedView(this.templateRef);
    this.hasView = true;
  } else if (condition && this.hasView) {
    this.viewContainer.clear();
    this.hasView = false;
  }
}

}