import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchString: string;
  constructor(private router: Router) {}

  ngOnInit(): void {}
  search() {
    this.router.navigate(['/search/users'], {
      queryParams: { q: this.searchString },
    });
  }
}
