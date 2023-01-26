import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {ProgressBarModule} from 'primeng/progressbar';
import {InputTextModule} from 'primeng/inputtext';
import {CardModule} from 'primeng/card';
import {TooltipModule} from 'primeng/tooltip';
import { HttpClientModule } from '@angular/common/http';
import { MenuModule } from 'primeng/menu';

import { AppComponent } from './app.component';
import { DatePipe } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LeftMenuComponent } from './common/left-menu/left-menu.component';
import { BpmComponent } from './bpm/bpm.component';
import { FormComponent } from './form/form.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LeftMenuComponent,
    BpmComponent,
    FormComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TableModule,
    CalendarModule,
		SliderModule,
		DialogModule,
		MultiSelectModule,
		ContextMenuModule,
		DropdownModule,
		ButtonModule,
		ToastModule,
    InputTextModule,
    ProgressBarModule,
    TooltipModule,
    HttpClientModule,
    FormsModule,
    CardModule,
    MenuModule
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
