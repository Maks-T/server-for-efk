import { ICategory } from '../models/interfaces/icategory';
import { ICategoryWord } from '../models/interfaces/icategory-word';
import CategoryService from '../services/category-service';

class CategoryController {
  loadImageFile = async (req: any, res: any): Promise<any> => {
    try {
      const picture = await CategoryService.loadFile(req.files.picture);
      return res.json(picture);
    } catch (e) {
      return res.status(500).json(e);
    }
  };

  createWord = async (req: any, res: any): Promise<any> => {
    try {
      const newWord: ICategoryWord = await CategoryService.createWord(req);
      return res.json(newWord);
    } catch (e) {
      return res.status(500).json(e);
    }
  };

  create = async (req: any, res: any): Promise<any> => {
    try {
      const createdCategory = await CategoryService.create(req.body);
      return res.json(createdCategory);
    } catch (e) {
      return res.status(500).json(e);
    }
  };

  getCategories = async (req: any, res: any): Promise<any> => {
    try {
      const categories = await CategoryService.getCategories();
      return res.json(categories);
    } catch (e) {
      return res.status(500).json(e);
    }
  };

  getCategory = async (req: any, res: any): Promise<any> => {
    try {
      const category = await CategoryService.getCategory(req.params.id);
      return res.json(category);
    } catch (e) {
      return res.status(500).json(e);
    }
  };

  getCategoryByRouter = async (req: any, res: any): Promise<any> => {
    try {
    
      const category = await CategoryService.getCategoryByRouter({
        nameRouter: req.params.router,
      });
      return res.json(category);
    } catch (e) {
      return res.status(500).json(e);
    }
  };

  updateCategory = async (req: any, res: any): Promise<any> => {
    try {
     
      const category = await CategoryService.updateCategory(req.body);

      return res.json(category);
    } catch (e) {
      return res.status(500).json(e);
    }
  };

  deleteCategory = async (req: any, res: any): Promise<any> => {
    try {
      const category = await CategoryService.deleteCategory(req.params.id);
      return res.json(category);
    } catch (e) {
      return res.status(500).json(e);
    }
  };
}

export default new CategoryController();
