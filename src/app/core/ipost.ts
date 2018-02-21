import { Iuser } from './iuser';

export interface Ipost {
  id?: number;
  title: string;
  desc: string;
  text: string;
  img: string;
  userId: number;
  user?: Iuser;
  online: boolean;
  level: number;
  tagIds: number[];
}
