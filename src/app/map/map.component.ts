import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';


import * as Mapboxgl from 'mapbox-gl'
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  mapa!: Mapboxgl.Map;

  constructor() { }

  ngOnInit() {
    Mapboxgl!.accessToken = environment.mapboxKey;
    
    this.mapa = new Mapboxgl.Map({
      container: 'mapa-mapbox', // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: [35.872299,38.873282], // starting position
      zoom: 5.3 // starting zoom
    });
  }

}
