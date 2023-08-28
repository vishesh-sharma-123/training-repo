import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SearchService {

  constructor(private http: HttpClient) { }

  searchRepos(query: string) {
    const url = `https://api.github.com/search/repositories?q=${query}`;
    return this.http.get(url);
  }
}
