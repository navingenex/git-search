import { UsersComponent } from './components/users/users.component';
import { SearchComponent } from './components/search/search.component';
import { Routes, RouterModule } from '@angular/router';
import { SearchResolver } from './search-resolver.service';

const routes: Routes = [
  { path: '', component: SearchComponent },
  { path: 'search', component: SearchComponent },
  {
    path: 'search/users',
    component: UsersComponent,
    resolve: { search: SearchResolver },
    runGuardsAndResolvers: 'always',
  },
];

export const AppRoutes = RouterModule.forRoot(routes, {
  onSameUrlNavigation: 'reload',
});
