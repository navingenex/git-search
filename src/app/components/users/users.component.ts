import { SearchService } from './../../search.service';
import { catchError } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  query: Object;
  searchData: any;
  count: number = 0;
  offset: number = 0;
  limit: number = 20;
  followers: any;
  constructor(
    private activatedROute: ActivatedRoute,
    private router: Router,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    this.activatedROute.queryParams.subscribe((q) => {
      this.query = q;
    });
    this.activatedROute.data.subscribe((data: any) => {
      this.searchData = data['search'];
      this.count = this.searchData['total_count'];
    });
  }
  onPageChange(offset) {
    this.offset = offset;
    const page = offset / this.limit + 1;
    this.router.navigate(['/search/users'], {
      queryParams: { page: page, q: this.query['q'] },
      replaceUrl: true,
    });
  }
}
