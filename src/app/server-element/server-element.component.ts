import { 
  SimpleChanges,
  Component, 
  Input, 
  OnChanges, 
  OnInit, 
  ViewEncapsulation,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef, 
  ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation : ViewEncapsulation.Emulated
})
export class ServerElementComponent implements 
OnInit, 
OnChanges, 
DoCheck, 
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy
 {
  @Input('srvElement') element: {
    type: string,
    name: string,
    content: string
  }
  // For Demo of ngOnChanges
  @Input() name: string;
  @ViewChild('heading', {static: true}) header: ElementRef;
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;

  constructor() {
    console.log('Constructor in server-element component called!');
   }

   // For Demo of ngOnChanges
   ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges() in server-element component called!');
    console.log('changes in server-element component: ' + changes);
   }

  ngOnInit(): void {
    console.log('ngOnInit() in server-element component called!');
    console.log('Text Content: ' + this.header.nativeElement.textContent);
    console.log('Text Content of Paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log('ngDoCheck() in server-element component called!');
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit() in server-element component called!');
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked() in server-element component called!');
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit() in server-element component called!');
    console.log('Text Content: ' + this.header.nativeElement.textContent);
    console.log('Text Content of Paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked() in server-element component called!');
  }

  ngOnDestroy(){
    console.log('ngOnDestroy() in server-element component called!')
  }
}
