export interface IBlog {

  id?: number;
  title: string;
  content: string;
  status: boolean;
  // //thêm số lượt like
  amountOfLikes:number;
  category?: any;
  postTime?: Date;
  image?: string;
  account?: any;
  comments?: any[];



}
