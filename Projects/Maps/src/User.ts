import faker from 'faker';
import { MappAble } from './types';

export class User implements MappAble {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
  markerContent(): string {
    return `<h1>I'm ${this.name} and this is my Location</h1>`;
  }
}
