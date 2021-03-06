import { enableProdMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { L_SEMANTIC_UI_MODULE } from 'angular2-semantic-ui';

import { LSUDemo } from './app';
import { PAGES } from './pages';
import { COMPONENTS } from './components';
import { AppRouts } from './app.routes';

@NgModule({
  declarations: [
    LSUDemo,
    ...COMPONENTS,
    ...PAGES,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    L_SEMANTIC_UI_MODULE,
    RouterModule.forRoot(AppRouts, { useHash: true })
  ],
  providers: [
  ],
  bootstrap: [LSUDemo]
})
export class AppModule { }