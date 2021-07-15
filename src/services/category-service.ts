import Category from '../models/category';
import { ICategory } from '../models/interfaces/icategory';
import { ICategoryWord } from '../models/interfaces/icategory-word';
import { MessagesServer } from '../models/messages-server';
import fileService from './file-service';

class CategoryService {
  loadFile = async (file: any) => {
    const fileName = fileService.saveFile(file);
    return fileName;
  };

  createWord = async (req: any) => {
    const newWord: ICategoryWord = {
      idWord: req.body.idWord,
      langRU: req.body.langRU,
      langEN: req.body.langEN,
      picture: (await this.loadFile(req.files.picture)) as string,
      sound: (await this.loadFile(req.files.sound)) as string,
    };

    return newWord;
  };

  create = async (category: ICategory) => {
    const findCategory = await Category.findOne(category);
    if (findCategory) {
      return { message: MessagesServer.CATEGORY_ERROR_ALREADY_CREATED };
    }
    const createdCategory: ICategory = await Category.create(category);
    return {
      message: MessagesServer.CATEGORY_SUCCES_CREATED,
      _id: createdCategory._id,
    };
  };

  getCategories = async () => {
    const findCategories: ICategory[] = await Category.find();
    if (findCategories) {
      return findCategories;
    }

    return {};
  };

  getCategory = async (id: string) => {
    if (!id) {
      throw new Error('NO ID!');
    }

    const findCategory: ICategory = await Category.findById(id);

    if (findCategory) {
      return findCategory;
    }
    return {};
  };

  getCategoryByRouter = async (router: any) => {
    if (!router) {
      throw new Error('NO ROUTER!');
    }

    const findCategory: ICategory = await Category.findOne(router);
  

    if (findCategory) {
      return findCategory;
    }
    return {};
  };

  updateCategory = async (category: ICategory) => {
    if (!category._id) {
      throw new Error('NO ID!');
    }

    const updateCategory: ICategory = await Category.findByIdAndUpdate(
      category._id,
      category,
      { new: true }
    );

    if (updateCategory) {
      return updateCategory;
    }
    return {};
  };

  deleteCategory = async (id: string) => {
    if (!id) {
      throw new Error('NO ID!');
    }

    const findCategory: ICategory = await Category.findByIdAndDelete(id);

    if (findCategory) {
      return findCategory;
    }
    return {};
  };
}

export default new CategoryService();
