import { Component,Output,EventEmitter,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-childc2p',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './childc2p.component.html',
  styleUrl: './childc2p.component.css'
})
export class Childc2pComponent {
  @Output() updateDataEvent=new EventEmitter<string>();
  ngOnInit():void{

  }


}
