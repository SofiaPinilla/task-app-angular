import { Component, OnInit, Input } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';


/**
 * @title Drag&Drop connected sorting
 */

@Component({
  selector: 'app-sub-todo',
  templateUrl: './sub-todo.component.html',
  styleUrls: ['./sub-todo.component.css']
})
export class SubTodoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() subLista;
  crearTarea(titulo2) {
    if (titulo2 != '') {
      let tarea = {
        titulo2: titulo2
      }
      this.subLista.push(tarea)
      
    }
    else {
      alert('Introduce el título de la tarea')
    }
  }
  eliminarTarea(item) {
    this.subLista.splice(this.subLista.indexOf(item), 1)
  };

  title = 'dragdrop';

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


