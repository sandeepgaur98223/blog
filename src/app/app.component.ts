import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UserListComponent } from "./user-list/user-list.component";
import { UserList2Component } from "./user-list2/user-list2.component";
import { StudentListComponent } from './student-list/student-list.component';
import { CountryListComponent } from './country-list/country-list.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [CommonModule, RouterOutlet, UserListComponent, UserList2Component,StudentListComponent,CountryListComponent]
})
export class AppComponent {
  title = 'blog';
  data="data from property";
  getValue(){
    return "data from function"
  }
// below is typescript
  getName(name:any,degree:any){
    alert("Name function is called by name: "+name+ " and degree: "+degree)
  }

  getData(val:any){
    console.warn('Input says: '+val)
  }

  getAnswer(value:any){
    alert("Event called: "+value)
  }
}
