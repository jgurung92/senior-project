import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import * as employeeData from '../assets/dummy.json';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SplashblockComponent } from './components/splashblock/splashblock.component';
import { PageSplashComponent } from './components/page-splash/page-splash.component';
import { TopnavComponent } from './components/topnav/topnav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogPopupComponent } from './components/dialog-popup/dialog-popup.component';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';
import { DialogEvalsComponent } from './components/dialog-evals/dialog-evals.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AddblockComponent } from './components/addblock/addblock.component';
import { AddpopupComponent } from './components/addpopup/addpopup.component';
import { DeleteblockComponent } from './components/deleteblock/deleteblock.component';
import { DeletepopupComponent } from './components/deletepopup/deletepopup.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    SplashblockComponent,
    PageSplashComponent,
    TopnavComponent,
    DialogPopupComponent,
    DialogEvalsComponent,
    AddblockComponent,
    AddpopupComponent,
    DeleteblockComponent,
    DeletepopupComponent, 
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSnackBarModule,
    MatIconModule,
    HttpClientModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
