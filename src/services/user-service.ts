import Login from '../models/login';
import { MessagesServer } from '../models/messages-server';
import User from '../models/user';
import { IUser } from '../models/interfaces/iuser';
import { ILogin } from '../models/interfaces/ilogin';

class UserService {
  create = async (user: IUser) => {
    const findUser = await User.findOne(user);
    if (findUser) {
      return { message: 'User alredy created!' };
    }
    const createdUser = await User.create(user);
    return createdUser;
  };

  login = async (user: IUser) => {
    const findUser = await User.findOne(user);
    if (findUser) {
      const idLogin: ILogin = await Login.create({ login: user.login });

      return { message: MessagesServer.LOGIN_SUCCES, id: idLogin._id };
    }
    return { message: MessagesServer.LOGIN_ERROR };
  };

  isLogin = async (id: string) => {
    const findId = await Login.findById(id);
    if (findId) {
      return { message: MessagesServer.LOGIN_SUCCES };
    }
    return { message: MessagesServer.LOGIN_ERROR };
  };

  deleteLogin = async (id: string) => {
    const findId = await Login.findByIdAndDelete(id);
    if (findId) {
      return { message: MessagesServer.LOGIN_SUCCES_DELETE };
    }
    return { message: MessagesServer.LOGIN_ERROR_DELETE };
  };
}

export default new UserService();
