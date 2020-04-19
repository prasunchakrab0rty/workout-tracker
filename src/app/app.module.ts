import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
//Third Party Imports
import { NgxLoadingModule } from 'ngx-loading'
import { NgbModule, NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

//App Imports
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { EntryEditorComponent } from './components/entry-editor/entry-editor.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { WorkoutsComponent } from './components/workouts/workouts.component';
import { WorkoutsService } from './services/workouts.service';
import { DateStringAdapterService } from './services/date-string-adapter.service';
import { TargetModalComponent } from './components/target-modal/target-modal.component';
import { UserComponent } from './components/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EntryEditorComponent,
    NavMenuComponent,
    WorkoutsComponent,
    TargetModalComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    FontAwesomeModule,
    NgxLoadingModule.forRoot({})
  ],
  entryComponents: [
    TargetModalComponent
  ],
  providers: [
    WorkoutsService,
    { provide: NgbDateAdapter, useClass: DateStringAdapterService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
