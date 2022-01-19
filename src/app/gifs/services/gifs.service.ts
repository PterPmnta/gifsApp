import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private apiUrl: string = 'https://api.giphy.com/v1/gifs/search?api_key=';
  private apiKey: string = 'ZnYjKoCl6O6MO933iZ3jlALJXWHc6I9N';
  private qS: string = '&q=';
  private limitQuery: string = '&limit=10';
  private _historial: string[] = [];
  public resultados: Gif[] = [];

  get historial() {
    return [...this._historial];
  }

  constructor(private http: HttpClient) {}

  buscarGifs(query: string) {
    query = query.trim().toLowerCase();

    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);
    }
    this.http
      .get<SearchGifsResponse>(
        `${this.apiUrl}${this.apiKey}${this.qS}${query}${this.limitQuery}`
      )
      .subscribe((resp) => {
        this.resultados = resp.data;
      });
  }
}
