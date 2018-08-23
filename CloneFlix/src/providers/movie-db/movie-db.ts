import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moviedb from 'moviedb';

declare var require: any;
const mdb = require('moviedb')('83198b09d28f453df1cc054d56e18cf2');


@Injectable()
export class MovieDbProvider {

  constructor() {
    console.log('Hello MovieDbProvider Provider');
  }

  procurarListaFilmes(titulo: string): any  {
    mdb.searchMovie({ query: titulo }, (err, res) => {
        
        let midias: Array<{ id: number, url: string }> = [];
        
        res.results.forEach(midia => {
          midias.push({id: midia.id, url: midia.poster_path});
        });
        
        return midias;
      });
  }


}
