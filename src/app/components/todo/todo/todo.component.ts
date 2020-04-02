import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'listadetareas-app';
  listas = [];
  crearLista(titulo){
    if (titulo!=""){
    var nuevaLista={
      titulo: titulo,
      subLista: []
    }
    this.listas.push(nuevaLista)
    console.log( nuevaLista.subLista)
  }
  else {
    alert('Introduce un título')
  }
  };
  eliminarLista(tarea){
    console.log(this.listas.indexOf(tarea));
    this.listas.splice(this.listas.indexOf(tarea),1)
  };

  title2 = 'dragdrop';

  todo = [
 
  ];

  done = [
    
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
  
}
