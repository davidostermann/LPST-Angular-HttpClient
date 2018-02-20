import { Iuser } from './iuser';

export class User implements Iuser {

  constructor(u: Iuser) {
    this.id = u.id;
    this.name = u.name;
    this.image = u.image;
    this.jobTitle = u.jobTitle;
    this.position = u.position;
  }

  id: number;
  name: string;
  image: string;
  jobTitle: string;
  position: { lat: string, lng: string };
}
