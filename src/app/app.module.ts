import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ButtonModule, CalendarModule, DropdownModule, InputSwitchModule, PanelModule, TabViewModule} from 'primeng/primeng';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {ScoutService} from './services/scout.service';
import {HttpClientModule} from '@angular/common/http';
import {TableModule} from 'primeng/table';
import {RouterModule, Routes} from '@angular/router';
import {CrmComponent} from './pages/crm/crm.component';
import {ScoutComponent} from './pages/scout/scout.component';
import {UnitPickerComponent} from './pages/scout/unit-picker.component';

const routes: Routes = [
  {path: '', redirectTo: '/scout', pathMatch: 'full'},
  {path: 'scout', component: ScoutComponent},
  {path: 'crm', component: CrmComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ScoutComponent,
    CrmComponent,
    UnitPickerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TableModule,
    TabViewModule,
    HttpClientModule,
    InputSwitchModule,
    CalendarModule,
    PanelModule,
    FormsModule,
    ButtonModule,
    DropdownModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [ScoutService],
  bootstrap: [AppComponent]
})


export class AppModule {

}
