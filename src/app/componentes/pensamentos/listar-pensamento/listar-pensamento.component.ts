import { Component } from '@angular/core';
import { Pensamento } from '../pensamentos';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent {

  listapensamentos: Pensamento[] = [];

  constructor(private service : PensamentoService){}

  ngOnInit(): void {
    this.service.listar().subscribe((listapensamentos) => {
        this.listapensamentos = listapensamentos
    });
}

}
