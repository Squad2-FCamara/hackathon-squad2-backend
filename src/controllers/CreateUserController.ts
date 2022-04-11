import { Request, Response } from "express";
import CreateUserService from "../services/userServices/CreateUserService";
import UserRepository from "../repositories/UserRepository";

class CreaterUserController {
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
}

export default new CreaterUserController;