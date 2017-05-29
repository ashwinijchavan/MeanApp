import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { CnkService } from './cnk.service';
import { CnkComponent } from './cnk/cnk.component';
import { CnkDetailsComponent } from './cnk-details/cnk-details.component';
import { CnkCreateComponent } from './cnk-create/cnk-create.component';
import { CnkEditComponent } from './cnk-edit/cnk-edit.component';

// const ROUTES = [
//   { path: '', redirectTo: 'cnks', pathMatch: 'full' },
//   { path: 'cnks', component: CnkComponent }
// ];

const appRoutes: Routes = [
  { path: '', redirectTo: 'cnks', pathMatch: 'full' },
  { path: 'cnks', component: CnkComponent },
  { path: 'cnk-details/:id', component: CnkDetailsComponent },
  { path: 'cnk-create', component: CnkCreateComponent },
  { path: 'cnk-edit/:id', component: CnkEditComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    CnkComponent,
    CnkDetailsComponent,
    CnkCreateComponent,
    CnkEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  
  providers: [
  CnkService,
  {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
