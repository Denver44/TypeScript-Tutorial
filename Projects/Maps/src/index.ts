import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const user = new User();
const company = new Company();
company.location = {
  lat: 13.0485,
  lng: 77.6209,
};
user.location = {
  lat: 19.1549,
  lng: 72.853,
};
const customMap = new CustomMap('map');

customMap.addMarkerToMap(user);
customMap.addMarkerToMap(company);
