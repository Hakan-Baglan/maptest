import { Component, OnInit } from '@angular/core';


import * as Mapboxgl from 'mapbox-gl';
import { Router } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  // mapa!: Mapboxgl.Map;
  poligonLayers!: GeoJSON.GeometryObject[];
  selectedPligon!: [number, number];
  selectedPligonId!: number;

  //Markers
  markers: Mapboxgl.LngLat[] = [];

  constructor(private router: Router) {
    this.poligonLayers = this.generatePoligons();
    // console.log('poligon:', this.poligonLayers);
  }
  generatePoligons(): GeoJSON.GeometryObject[] {
    const layer: GeoJSON.GeometryObject = {
      type: "Polygon",
      coordinates: [
        [
          [
            40.27587890625,
            36.932330061503144
          ],
          [
            39.70458984374999,
            37.84015683604136
          ],
          [
            38.91357421874999,
            38.03078569382294
          ],
          [
            38.16650390625,
            38.08268954483802
          ],
          [
            37.72705078125,
            37.43997405227057
          ],
          [
            37.6611328125,
            37.23032838760387
          ],
          [
            38.056640625,
            36.932330061503144
          ],
          [
            38.64990234375,
            36.82687474287728
          ],
          [
            39.13330078125,
            36.70365959719456
          ],
          [
            39.90234375,
            36.80928470205937
          ],
          [
            40.27587890625,
            36.932330061503144
          ]
        ]
      ]
    } as GeoJSON.GeometryObject;
    const layer2: GeoJSON.GeometryObject = {
      type: "Polygon",
      coordinates: [
        [
          [
            32.596435546875,
            39.85072092501597
          ],
          [
            33.02490234375,
            39.825413103424786
          ],
          [
            33.145751953125,
            40.069664523297774
          ],
          [
            32.607421875,
            40.027614437486655
          ],
          [
            32.596435546875,
            39.85072092501597
          ]
        ]
      ]
    } as GeoJSON.GeometryObject;
    return [layer, layer2];
  }

  ngOnInit(): void { }

  onClick(e: any, witch: number) {
    this.selectedPligonId = witch;
    // console.log('tıklandı! ', e);
    const lngLat = e.lngLat;
    this.selectedPligon = [lngLat.lng, lngLat.lat];
  }

  mapClick(e: Mapboxgl.MapMouseEvent) {
    // console.log(e.lngLat);
    this.markers.push(e.lngLat);
    this.router.navigate(['map', 'marker'], { queryParams: { lng: e.lngLat.lng, lat: e.lngLat.lat } });

  }
  offset(point: Mapboxgl.LngLat): Mapboxgl.LngLat {
    return new Mapboxgl.LngLat(point.lng, point.lat + 0.1);

  }
}
