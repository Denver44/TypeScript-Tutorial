// Works as a gatekeeper for our functions
import { MappAble } from './types';

export class CustomMap {
  private googleMap: google.maps.Map;
  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 4,
      center: {
        lat: 21.1458,
        lng: 79.0882,
      },
    });
  }
  addMarkerToMap(mappable: MappAble): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: mappable.location,
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      });
      infoWindow.open(this.googleMap, marker);
    });
  }
}
