import { Routes } from '@angular/router';
import { CalcComponent } from './calc/calc.component';
import { HomeComponent } from './home/home.component';
export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'calc', loadChildren: './calc/calc.module#CalcModule' }];
