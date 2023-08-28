import { Component } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-github-search',
  templateUrl: './github-search.component.html',
  styleUrls: ['./github-search.component.css'],
  providers: [SearchService]
})
export class GithubSearchComponent {
  constructor(private searchService: SearchService){}

  getRepos(query: string){
    this.searchService.searchRepos(query).subscribe(
      (data) => console.log('success', data),
      (err)=> console.log('error', err)
    )
  }
}
