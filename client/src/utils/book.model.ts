//"Content-Type": "multipart/form-data"

interface Cover {
  public_id: string;
  secure_url: string;
}
export interface BookModel {
  uId?: string;
  title: string;
  author: string;
  genre: string;
  cover: Cover;
  description: string;
  price: number;
  stock: number;
  createdAt?: Date;
  updatedAt?: Date;
}
