import { Request, Response } from "express";
import CreateUserService from "../services/userServices/CreateUserService";
import UserRepository from "../repositories/UserRepository";
import FindUserByIdService from "../services/userServices/FindUserByIdService";
import FindUserByNameService from "../services/userServices/FindUserByNameService";
import ListAllUserService from "../services/userServices/ListAllUserService";
import UpdateUserService from "../services/userServices/UpdateUserService";
import DeleteUserService from "../services/userServices/DeleteUserService";
import CreateUserScheduleService from "../services/userServices/CreateUserScheduleService";
import UpdateUserScheduleService from "../services/userServices/UpdateUserScheduleService";
import DeleteUserScheduleService from "../services/userServices/DeleteUserScheduleService";
import ListUserByAvailabilityService from "../services/userServices/ListUserByAvailabilityService";
import ListUserByScheduleService from "../services/userServices/ListUserByScheduleService";
import ListAllUserByAvailabilityService from "../services/userServices/ListAllUserByAvailabilityService";
import ListAllUserByScheduleService from "../services/userServices/ListAllUserByScheduleService";
import AddContactRoleService from "../services/userServices/AddContactService";
import RemoveContactService from "../services/userServices/RemoveContactService";

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

  public async findUserByName(request: Request, response: Response){

    const userRepository = new UserRepository();
    const service = new FindUserByNameService(userRepository);

    try {
      const parameter  = request.params;
      const user = await service.execute(parameter.name);
      return response.status(200).json({user: user});
    } catch (e) {
      return response.status(500).json({message: 'Something is wrong!'});
    }
  }

  public async listAllUser(request: Request, response: Response){

    const userRepository = new UserRepository();
    const service = new ListAllUserService(userRepository);

    try {
      const user = await service.execute();
      return response.status(200).json({user: user});
    } catch (e) {
      return response.status(500).json({message: 'Something is wrong!'});
    }
  }

  public async update(request: Request, response: Response){

    const userRepository = new UserRepository();
    const service = new UpdateUserService(userRepository);

    try {
      const { name, email, password, userId } = request.body;
      const user = await service.execute(name, email, password, userId);
      return response.status(200).json({user: user});
    } catch (e) {
      return response.status(500).json({message: 'Something is wrong!'});
    }
  }

  public async delete(request: Request, response: Response){

    const userRepository = new UserRepository();
    const service = new DeleteUserService(userRepository);

    try {
      const aux  = request.params;
      const userId = Number(aux.userId);
      const user = await service.execute(userId);
      return response.status(202).json({user: user});
    } catch (e) {
      return response.status(500).json({message: 'Something is wrong!'});
    }
  }

  public async createUserSchedule(request: Request, response: Response){

    const userRepository = new UserRepository();
    const service = new CreateUserScheduleService(userRepository);

    try {
      const { day, start_time, end_time, description, userId1, userId2  } = request.body;
      const userSchedule = await service.execute(day, start_time, end_time, description, userId1, userId2);
      return response.status(200).json({userSchedule: userSchedule});
    } catch (e) {
      return response.status(500).json({message: 'Something is wrong!'});
    }
  }

  public async updateUserSchedule(request: Request, response: Response){

    const userRepository = new UserRepository();
    const service = new UpdateUserScheduleService(userRepository);

    try {
      const { day, start_time, end_time, description, scheduleId } = request.body;
      const userSchedule = await service.execute(day, start_time, end_time, description, scheduleId );
      return response.status(200).json({userSchedule: userSchedule});
    } catch (e) {
      return response.status(500).json({message: 'Something is wrong!'});
    }
  }

  public async deleteUserSchedule(request: Request, response: Response){

    const userRepository = new UserRepository();
    const service = new DeleteUserScheduleService(userRepository);

    try {
      const parameter  = request.params;
      const scheduleId = Number(parameter.scheduleId);
      const userSchedule = await service.execute(scheduleId );
      return response.status(200).json({userSchedule: userSchedule});
    } catch (e) {
      return response.status(500).json({message: 'Something is wrong!'});
    }
  }

  public async listUserByAvailability(request: Request, response: Response){

    const userRepository = new UserRepository();
    const service = new ListUserByAvailabilityService(userRepository);

    try {
      const id  = request.params;
      const userId = Number(id.userId);
      const users = await service.execute(userId);
      return response.status(200).json({user: users});
    } catch (e) {
      return response.status(500).json({message: 'Something is wrong!'});
    }
  }

  public async listAllUserByAvailability(request: Request, response: Response){

    const userRepository = new UserRepository();
    const service = new ListAllUserByAvailabilityService(userRepository);

    try {
      const users = await service.execute();
      return response.status(200).json({user: users});
    } catch (e) {
      return response.status(500).json({message: 'Something is wrong!'});
    }
  }

  public async listUserBySchedule(request: Request, response: Response){

    const userRepository = new UserRepository();
    const service = new ListUserByScheduleService(userRepository);

    try {
      const id  = request.params;
      const userId = Number(id.userId);
      const users = await service.execute(userId);
      return response.status(200).json(users);
    } catch (e) {
      console.log(e)
      return response.status(500).json({message: 'Something is wrong!'});
    }
  }

  public async listAllUserBySchedule(request: Request, response: Response){

    const userRepository = new UserRepository();
    const service = new ListAllUserByScheduleService(userRepository);

    try {
      const users = await service.execute();
      return response.status(200).json({user: users});
    } catch (e) {
      return response.status(500).json({message: 'Something is wrong!'});
    }
  }

  public async addContact(request: Request, response: Response) {

    const userRepository = new UserRepository();
    const service = new AddContactRoleService(userRepository);

    try {
      const { userId, profileId } = request.body;
      const users = await service.execute(userId, profileId);
      return response.status(201).json(users);
    } catch (e) {
      return response.status(500).json({message: 'Something is wrong!'});
    }
  }

  public async removeUserProfile(request: Request, response: Response){

    const userRepository = new UserRepository();
    const service = new RemoveContactService(userRepository);

    try {
      const parameter  = request.params;
      const userProfileId = Number(parameter.userProfileId);
      const userProfile = await service.execute(userProfileId );
      return response.status(200).json(userProfile);
    } catch (e) {
      return response.status(500).json({message: 'Something is wrong!'});
    }
  }


}

export default new UserController;