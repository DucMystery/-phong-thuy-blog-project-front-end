export interface IAlbum {
  id?: number;
  name : string;
  status: boolean;
  postDate: Date;
  images?: string[];
  account: number;
}
