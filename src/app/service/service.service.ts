import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pessoa } from '../Model/Pessoa';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:8080/spring-angular/pessoas';

  getPessoas() {
    return this.http.get<Pessoa[]>(this.url);
  }
  criarPessoa(pessoa: Pessoa) {
    return this.http.post<Pessoa>(this.url, pessoa);
  }
  getPessoaId(id: number) {
    return this.http.get<Pessoa>(this.url + '/' + id);
  }
  editarPessoa(pessoa: Pessoa) {
    return this.http.put<Pessoa>(this.url + '/' + pessoa.id, pessoa);
  }
  deletarPessoa(pessoa: Pessoa) {
    return this.http.delete<Pessoa>(this.url + '/' + pessoa.id);
  }
  pesquisarNome(nome: string) {
    return this.http.post<Pessoa[]>(this.url + '/pesquisarpessoa', nome);
  }
}
