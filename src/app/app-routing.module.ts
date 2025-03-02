import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatrixLabComponent } from './matrix-lab/matrix-lab.component';
import { KolakoskiDanceComponent } from './kolakoski-dance/kolakoski-dance.component';
import { ExploreSymmetriesComponent } from './explore-symmetries/explore-symmetries.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/matrix-lab',
    pathMatch: 'full',
  },
  {
    path: 'matrix-lab',
    component: MatrixLabComponent,
  },
  {
    path: 'kolakoski-dance',
    component: KolakoskiDanceComponent,
  },
  {
    path: 'exploring-symmetries',
    component: ExploreSymmetriesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
