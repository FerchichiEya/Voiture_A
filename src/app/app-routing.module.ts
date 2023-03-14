import { UserComponent } from './user/user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { DetailComponent } from './detail/detail.component';
import { VoitureGuard } from './voiture.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VoituresComponent } from './voitures/voitures.component';
import { AddVoitureComponent } from './add-voiture/add-voiture.component';
import { UpdateVoitureComponent } from './services/update-voiture/update-voiture.component';
import { RechercheParCategorieComponent } from './recherche-par-categorie/recherche-par-categorie.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { ListeCategoriesComponent } from './liste-categories/liste-categories.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { PanierComponent } from './panier/cart/panier.component';



const routes: Routes = [
  {path: "voitures", component : VoituresComponent},
  {path: "add-voiture", component : AddVoitureComponent}
,{path: "updateVoiture/:id", component: UpdateVoitureComponent},
{path: "rechercheParCategorie", component : RechercheParCategorieComponent}
,{path: "rechercheParNom", component : RechercheParNomComponent}
,{path: "listeCategories", component : ListeCategoriesComponent},
{path: 'login', component: LoginComponent},
{path: 'app-forbidden', component: ForbiddenComponent,canActivate:[VoitureGuard]},
{ path: "", redirectTo: "voitures", pathMatch: "full" },
{path: "detailVoiture/:id", component: DetailComponent},
{path: "panier", component : PanierComponent},
{path: "add-user", component: AddUserComponent},
{path: "users", component: UserComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
