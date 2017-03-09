import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  Input,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'fa-lifecycle',
  template: `
    <ng-content></ng-content>
    <hr>
    <p #boundParagraph>{{bindable}}</p>
  `,
  styles: []
})
export class LifecycleComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{
  @Input() bindable = 1000
  constructor() { }
  
  @ContentChild('boundContent')
  boundContent: HTMLElement

  ngOnInit() {
      this.log('ngOnInit')
  }
  ngOnChanges(){
      this.log('ngOnChanges')
  }
  ngDoCheck(){
      this.log('ngDoCheck')
  }
  ngAfterContentInit(){
      this.log('ngAfterContentInit')
      console.log(this.boundContent)
  }
  ngAfterContentChecked(){
      this.log('ngAfterContentChecked')
  }
  ngAfterViewInit(){
      this.log('ngAfterViewInit')
  }
  ngAfterViewChecked(){
      this.log('ngAfterViewChecked')
  }
  ngOnDestroy(){
      this.log('ngOnDestroy')
  }

  private log(hook: string){
    console.log(hook)
  }
}
