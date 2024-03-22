import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './home-page/home-page.component';
import { RoutingModule } from './router/router.module';
import { DetailsComponent } from './details/details.component';
import { NgxBootstrapIconsModule ,allIcons } from 'ngx-bootstrap-icons';
import { ItemComponent } from './item/item.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    DetailsComponent,
    ItemComponent,
    
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    RoutingModule,
    FormsModule,
    NgxBootstrapIconsModule.pick(allIcons),
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
