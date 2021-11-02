import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderwoman', 'Hulk', 'caperucita', 'sirenita'];
  heroeBorrado: string = ''


  borrarHeroe(){
    // this.heroes.pop()
    this.heroeBorrado = this.heroes.shift() || '';
    console.log(this.heroeBorrado)
  }
}


