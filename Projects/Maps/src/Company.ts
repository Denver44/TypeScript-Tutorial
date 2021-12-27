import faker from 'faker';
import { MappAble } from './types';

export class Company implements MappAble {
  name: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
  markerContent(): string {
    return `
    <h1>Company Name   :  ${this.name}</h1>
    <h3>Company Phrase : ${this.catchPhrase}</h3>
    `;
  }
}
