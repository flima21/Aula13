import { Component } from '@angular/core';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css']
})
export class TarefaComponent {
  
  descricaoTarefa : string; 
  statusTarefa : boolean;

  tarefas  = [
    { nomeTarefa:'Estudar'    , statusTarefa: true  , txtBotao:'Feito'},
    { nomeTarefa:'Almoçar'    , statusTarefa: true  , txtBotao:'Feito'},
    { nomeTarefa:'Trabalhar'  , statusTarefa: true  , txtBotao:'Feito'},
    { nomeTarefa:'Ir academia', statusTarefa: true  , txtBotao:'Feito'},
    { nomeTarefa:'Dormir'     , statusTarefa: true  , txtBotao:'Feito'}
  ]

  constructor() {
    this.descricaoTarefa = '';
    this.statusTarefa = false;
  }

  onChange(value:any) {

    if(value.statusTarefa == true) {
      value.statusTarefa = false;
      value.txtBotao = 'A fazer';
    } 
    
    else {
      value.statusTarefa = true;
      value.txtBotao = 'Feito';
    }
  }
}
