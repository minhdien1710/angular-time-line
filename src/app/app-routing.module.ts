import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {TimelineComponent} from './timeline/timeline.component';
import {NgModule} from '@angular/core';

const routes: Routes = [{
  path: 'timeline',
  component: TimelineComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
