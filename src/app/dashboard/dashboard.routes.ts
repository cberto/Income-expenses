import { Routes } from "@angular/router";
import { DetailsComponent } from "../entry-agress/details/details.component";
import { EntryAgressComponent } from "../entry-agress/entry-agress.component";
import { StatisticsComponent } from "../entry-agress/statistics/statistics.component";

export const dashboardRoutes: Routes = [
  { path: '', component: StatisticsComponent },
  { path: 'entry-agress', component: EntryAgressComponent },
  { path: 'detail', component: DetailsComponent },
]
