import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InsuredComponent } from './insured/insured.component';
import { ShowInsuredComponent } from './insured/show-insured/show-insured.component';
import { AddEditInsuredComponent } from './insured/add-edit-insured/add-edit-insured.component';
import { InsuredApiService } from './insured-api.service';

@NgModule({
  declarations: [
    AppComponent,
    InsuredComponent,
    ShowInsuredComponent,
    AddEditInsuredComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [InsuredApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
