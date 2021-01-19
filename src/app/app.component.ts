import { Component, Input, HostListener, Inject } from '@angular/core';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  preserveWhitespaces:false
})
export class AppComponent {
  title = 'firstapp on git';
  name = 'Hemant';
  // constructor(@Inject(MyserviceService)myserviceService){
  //   console.log(myserviceService);
  //   console.log("hi this is component ");
  // }
  // @HostListener('click',['$eve'])
  // onhostclick(event:Event){
  //   alert("on click" );
  // }
}
