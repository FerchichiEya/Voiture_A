import { Categorie } from 'src/app/model/categorie.model';
import { voitures } from 'src/app/model/voiture.model';
import { VoitureService } from './../services/voiture.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  voiture = new voitures;
  categorie = new Categorie;
  
  constructor(private activatedRoute : ActivatedRoute,
              private VoitureService: VoitureService,
              private router: Router) { 
              }

  ngOnInit(): void {
    this.VoitureService.consultVoiture(this.activatedRoute.snapshot.params['id']).
    subscribe( voiture =>{ this.voiture = voiture;console.log(voiture.detail);
    this.categorie = this.voiture.categorie;
    } ) ;
  }

}
