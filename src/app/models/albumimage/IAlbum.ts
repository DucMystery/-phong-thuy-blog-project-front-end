import {IImage} from "./IImage";
import {IUser} from "../IUser";

export interface IAlbum {
  id?: number;
  name? : string;
  status?: string;
  category?: any,
  postTime?: Date;
  images?: IImage[];
  account?: any;
}
