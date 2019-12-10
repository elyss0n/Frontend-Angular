import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';
import { Pessoa } from 'src/app/Model/Pessoa';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.css']
})
export class AdicionarComponent implements OnInit {

  pessoa: Pessoa = new Pessoa();

  constructor(private router: Router, private service: ServiceService) { }

  ngOnInit() {
  }
  adicionar() {
    this.service.criarPessoa(this.pessoa).subscribe(data => {
      Swal.fire(
        '',
        'Adicionado com sucesso!',
        'success'
      );
      this.router.navigate(['consultar']);
    });
  }

}
