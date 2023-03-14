import { voitures } from 'src/app/model/voiture.model';
import { PanierService } from './../../panier.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
   
  voiture = new voitures;

  constructor(private panierService : PanierService) { }

  ngOnInit(): void {
   
  }
  
}
