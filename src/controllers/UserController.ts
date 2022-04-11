import { Request, Response } from "express";
import CreateUserService from "../services/userServices/CreateUserService";
import UserRepository from "../repositories/UserRepository";
import FindUserByIdService from "../services/userServices/FindUserByIdService";
import FindAllUserService from "../services/userServices/FindAllUserService";


class UserController {
  public async create(request: Request, response: Response){

    const userRepository = new UserRepository();
    const service = new CreateUserService(userRepository);

    try {
      const { name, email, password } = request.body;
      const user = await service.execute(name, email, password);
      return response.status(201).json({user: user})
    } catch (e) {
      return response.status(500).json({message: 'Something is wrong!'})
    }
  }

  public async findUserById(request: Request, response: Response){

    const userRepository = new UserRepository();
    const service = new FindUserByIdService(userRepository);

    try {
      const id  = request.params;
      const userId = Number(id.userId);
      const user = await service.execute(userId);
      return response.status(200).json({user: user});
    } catch (e) {
      return response.status(500).json({message: 'Something is wrong!'});
    }
  }

  public async findAllUser(request: Request, response: Response){

    const userRepository = new UserRepository();
    const service = new FindAllUserService(userRepository);

    try {
      const user = await service.execute();
      return response.status(200).json({user: user});
    } catch (e) {
      return response.status(500).json({message: 'Something is wrong!'});
    }
  }

}

export default new UserController;