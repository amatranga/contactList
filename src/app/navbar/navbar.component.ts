import { Component, OnInit, Output, EventEmitter, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() featureSelected = new EventEmitter<string>();
  favoriteTrueSm;
  favoriteTrueMd;
  favoriteTrueLg;
  favoriteFalseSm;
  favoriteFalseMd;
  favoriteFalseLg;

  selectedImage;

  constructor() {
    this.favoriteTrueSm = 'assets/FavoriteTrue/FavoriteTrueSm.png';
    this.favoriteTrueMd = 'assets/FavoriteTrue/FavoriteTrueMd.png';
    this.favoriteTrueLg = 'assets/FavoriteTrue/FavoriteTrueLg.png';
    this.favoriteFalseSm = 'assets/FavoriteFalse/FavoriteFalseSm.png';
    this.favoriteFalseMd = 'assets/FavoriteFalse/FavoriteFalseMd.png';
    this.favoriteFalseLg = 'assets/FavoriteFalse/FavoriteFalseLg.png';
  }

  ngOnInit() {
  }

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }

}
