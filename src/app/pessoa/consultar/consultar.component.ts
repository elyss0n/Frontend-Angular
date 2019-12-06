import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../service/service.service';
import { Pessoa } from 'src/app/Model/Pessoa';

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css']
})
export class ConsultarComponent implements OnInit {

  pessoas: Pessoa[];

  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit() {
    this.service.getPessoas()
    .subscribe(data => {
      this.pessoas = data;
    });
  }
  editar(pessoa: Pessoa) {
    localStorage.setItem('id', pessoa.id.toString());
    this.router.navigate(['editar']);
  }
  deletar(pessoa: Pessoa) {
    this.service.deletarPessoa(pessoa).subscribe(data => {
      this.pessoas = this.pessoas.filter(p => p !== pessoa);
      alert('Registro deletado!');
    });
  }

}
