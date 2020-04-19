import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
//Third Party Imports
import { NgxLoadingModule } from 'ngx-loading'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

//App Imports
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { EntryEditorComponent } from './components/entry-editor/entry-editor.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { WorkoutsComponent } from './components/workouts/workouts.component';
import { WorkoutsService } from './services/workouts.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EntryEditorComponent,
    NavMenuComponent,
    WorkoutsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    NgxLoadingModule.forRoot({})
  ],
  providers: [WorkoutsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
