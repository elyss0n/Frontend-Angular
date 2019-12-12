import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../service/service.service';
import { Pessoa } from 'src/app/Model/Pessoa';
import Swal from 'sweetalert2';

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
    Swal.fire({
      title: 'Deletar registro?',
      text: 'A ação não poderá ser desfeita!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não'
    }).then((result) => {
      if (result.value) {
        this.service.deletarPessoa(pessoa).subscribe(data => {
          this.pessoas = this.pessoas.filter(p => p !== pessoa);
        });
        Swal.fire(
          'Deletado!',
          'Regsitro deletado.',
          'success'
        );
      }
    });
  }

  pesquisarNome(nomePesquisa: string) {
    if (!nomePesquisa) {
      this.service.getPessoas().subscribe(data => {
        this.pessoas = data;
      });
    } else {
      this.service.pesquisarNome(nomePesquisa).subscribe(data => {
        this.pessoas = data;
      });
    }
  }

}
