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
  getPrintVar="";
  getPrintVarButton="";
  counter=0;
  disable=false;
  name='peter';
  show=true;
  color="black";
  color2="skyblue";
  bgcolor2="red";

  users=['Ana','Hana','Peter','Bob','Michael'];
  detailedUsers=[
    {name:'Ana', phone: 123,email:'a@a.com'}
    ,
    {name:'Hana',phone: 456, email:'hana@a.com'}
    ,
    {name:'Peter',phone: 789,email:'peter@a.com'}
    
  ];

  detailedUsers2=[
    {name:'Ana', phone: 123,socialAccounts:['facebook','twitter','instagram']}
    ,
    {name:'Hana',phone: 456,socialAccounts:['reddit','quora','instagram']}
    ,
    {name:'Peter',phone: 789,socialAccounts:['facebook','reddit','quora']}

  ];



  
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
    console.log("Event called: "+value)
  }

  getPrint(value:any,type:string)
  {

    type==='inputbox'?(this.getPrintVar=value):(this.getPrintVarButton=value)
  }

  setCounter(type:string)
  {
    type==='up'?this.counter++:this.counter--;
    // if (type==='up') {
    //   this.counter++;
      
    // } else if(type==='down'){
    //   this.counter--;
    // }
  }

  ifElseSwitch()
  {
    this.show=!this.show;
  }

  changeColor(){
    this.color2==='skyblue'?this.color2='red':this.color2='skyblue';
    this.bgcolor2==='red'?this.bgcolor2='skyblue':this.bgcolor2='red';
  }
}
