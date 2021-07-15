import { Router } from 'express';

import categoryController from '../controllers/category-controller';

const categoryRouter = Router();

categoryRouter.post('/addcategory', categoryController.create);
categoryRouter.get('/getcategories', categoryController.getCategories);
categoryRouter.get('/getcategory/:id', categoryController.getCategory);
categoryRouter.put('/updatecategory', categoryController.updateCategory);
categoryRouter.delete('/deletecategory/:id', categoryController.deleteCategory);

categoryRouter.post('/loadimage', categoryController.loadImageFile);
categoryRouter.post('/createword', categoryController.createWord);

categoryRouter.get('/getcategorybyrouter/:router', categoryController.getCategoryByRouter);

export default categoryRouter;
