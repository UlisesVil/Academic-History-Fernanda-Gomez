import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './components/main/main.component';
import { HistoryviewComponent } from './components/historyview/historyview.component';


const appRoutes: Routes = [
  {path: '', component: MainComponent},
  {path:'history-view/:id', component: HistoryviewComponent}
];


export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<RouterModule>= RouterModule.forRoot(appRoutes);
