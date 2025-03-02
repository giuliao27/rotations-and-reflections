import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChooseMatrixComponent } from './choose-matrix/choose-matrix.component';
import { ApplyMatrixComponent } from './apply-matrix/apply-matrix.component';
import { KolakoskiDanceComponent } from './kolakoski-dance/kolakoski-dance.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatrixLabComponent } from './matrix-lab/matrix-lab.component';
import { ChooseImageComponent } from './choose-image/choose-image.component';
import { ExploreSymmetriesComponent } from './explore-symmetries/explore-symmetries.component';
import { SymmetricImagesComponent } from './explore-symmetries/symmetric-images/symmetric-images.component';
import { ChosenMatrixComponent } from './explore-symmetries/chosen-matrix/chosen-matrix.component';


@NgModule({
  declarations: [
    AppComponent,
    ChooseMatrixComponent,
    ApplyMatrixComponent,
    KolakoskiDanceComponent,
    ToolbarComponent,
    MatrixLabComponent,
    ChooseImageComponent,
    ExploreSymmetriesComponent,
    SymmetricImagesComponent,
    ChosenMatrixComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
