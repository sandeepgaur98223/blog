import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css'
})
export class ToDoListComponent {
  todo:any[]=[];
  counter=0;
  // todovalue:any='';
  // todovalue!: string;
  todovalue='';
  insertItem(value:any): void{
    // this.todo.push(value);
    if(value!='')
    {
      this.todo.push({id:this.counter++,taskname:value});
    }
    else{
      alert('Please do not enter a blank To do task')
    }
    
    console.log(this.todo);
    this.todovalue='';
  }

  deleteItem(id:any)
  {
    console.log(id);
    this.todo=this.todo.filter((item)=>item.id!=id);
    console.log(this.todo);
  }
}
