import { Router } from 'express';
import userController from '../controllers/user-controller';


const userRouter = Router();

userRouter.post('/adduser', userController.create);
userRouter.post('/login', userController.login);
userRouter.post('/checklogin', userController.isLogin);
userRouter.delete('/deletelogin', userController.deleteLogin);


export default userRouter;
