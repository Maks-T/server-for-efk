import { ObjectId } from "mongoose";
import { ICategoryWord } from "./icategory-word";

export interface ICategory {
  _id?: ObjectId;  
  nameCategory: string;
  nameRouter: string;
  words: ICategoryWord[];
}
