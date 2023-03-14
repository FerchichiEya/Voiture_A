import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VoituresComponent } from './voitures/voitures.component';
import { AddVoitureComponent } from './add-voiture/add-voiture.component';
import { FormsModule } from '@angular/forms';
import { UpdateVoitureComponent } from './services/update-voiture/update-voiture.component';
import { RechercheParCategorieComponent } from './recherche-par-categorie/recherche-par-categorie.component';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { ListeCategoriesComponent } from './liste-categories/liste-categories.component';
import { UpdateCategorieComponent } from './update-categorie/update-categorie.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { TokenInterceptor } from './services/token.interceptor';
import { DetailComponent } from './detail/detail.component';
import { PanierComponent } from './panier/cart/panier.component';
import { UserComponent } from './user/user.component';
import { AddUserComponent } from './add-user/add-user.component';

@NgModule({
  
  declarations: [
    AppComponent,
    VoituresComponent,
    AddVoitureComponent,
    UpdateVoitureComponent,
    RechercheParCategorieComponent,
    RechercheParNomComponent,
    SearchFilterPipe,
    ListeCategoriesComponent,
    UpdateCategorieComponent,
    LoginComponent,
    ForbiddenComponent,
    DetailComponent,
    PanierComponent,
    UserComponent,
    AddUserComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
     //Ng2SearchPipeModule

  ],
  providers: [
    { provide : HTTP_INTERCEPTORS,
      useClass : TokenInterceptor,
      multi : true}
       
      
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
