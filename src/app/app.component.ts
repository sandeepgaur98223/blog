import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UserListComponent } from "./user-list/user-list.component";
import { UserList2Component } from "./user-list2/user-list2.component";
import { StudentListComponent } from './student-list/student-list.component';
import { CountryListComponent } from './country-list/country-list.component';
import { HeaderComponent } from "./header/header.component";
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button'
import {MatBadgeModule} from '@angular/material/badge'
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ChildComponent } from './child/child.component';
import { Child2Component } from "./child2/child2.component";
import { Childc2pComponent } from './childc2p/childc2p.component';



@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [CommonModule, RouterOutlet, UserListComponent, UserList2Component, StudentListComponent,
        CountryListComponent, HeaderComponent, NgbAlert, MatSlideToggleModule, MatButtonModule, MatBadgeModule,
        ToDoListComponent, ChildComponent, Child2Component,Childc2pComponent]
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
  hideElementVar=false;
  hideElementButton='Hide';

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

  sendToChild=1000;
  // sendToChild2=['firstLoop','secondLoop','thirdLoop']
  sendToChild2=[{name:'Peter',phone:123}
  ,{name:'Zac',phone:456}
  ,{name:'Ronnie',phone:789}]


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

  hideElement(){
    this.hideElementButton==='Hide'?this.hideElementButton='Show':this.hideElementButton='Hide';
    this.hideElementVar=!this.hideElementVar;
  }

  updateChild(){
    this.sendToChild=Math.floor(Math.random()*10)
  }

  sendc2p ="Sending data from Child to Parent: ";

  updateData(item:string){
    console.warn(item);
    this.sendc2p="Sending data from Child to Parent: "+item;
  }



}
