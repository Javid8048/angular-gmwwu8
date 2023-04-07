import 'zone.js/dist/zone';
import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Hello from {{name}}!</h1>
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular 
    </a>
    <p #highlight>This is an important message</p>
    <strong #highlight>This is an important message</strong>
  `,
})
export class App implements AfterViewInit {
  name = 'Angular';
  //view child on apply for first native element
  //@ViewChild('highlight') marker: ElementRef;
  @ViewChildren('highlight') marker: QueryList<any> ;
  ngAfterViewInit() {
    console.log(this.marker);
    //this.marker.nativeElement.style.color = 'red';
    this.marker.first.nativeElement.style.color = "blue";
    this.marker.last.nativeElement.style.color = "green";
  }
}

bootstrapApplication(App);
