import { Request, Response } from "express";
import RoleRepository from "../repositories/RoleRepository";
import CreateRoleService from "../services/roleServices/CreateRoleService";
import UpdateRoleService from "../services/roleServices/UpdateRoleService";
import DeleteRoleService from "../services/roleServices/DeleteRoleService";
import FindAllRoleService from "../services/roleServices/ListAllRoleService";
import FindProfileByRoleService from "../services/roleServices/FindProfileByRoleService";

class RoleController { 
  public async create(request: Request, response: Response){

    const roleRepository = new RoleRepository();
    const service = new CreateRoleService(roleRepository);

    try {
      const { name } = request.body;
      const role = await service.execute(name);
      return response.status(201).json({role: role})
    } catch (e) {
      return response.status(500).json({message: 'Something is wrong!'})
    }
  }

  public async update(request: Request, response: Response){

    const roleRepository = new RoleRepository();
    const service = new UpdateRoleService(roleRepository);

    try {
      const { nome, roleId  } = request.body;
      const role = await service.execute(nome, roleId);
      return response.status(200).json({role: role})
    } catch (e) {
      return response.status(500).json({message: 'Something is wrong!'})
    }
  }

  public async delete(request: Request, response: Response){

    const roleRepository = new RoleRepository();
    const service = new DeleteRoleService(roleRepository);

    try {
      const aux  = request.params;
      const roleId = Number(aux.roleId);
      const role = await service.execute(roleId);
      return response.status(202).json({role: role});
    } catch (e) {
      return response.status(500).json({message: 'Something is wrong!'});
    }
  }

  public async listAll(request: Request, response: Response){

    const roleRepository = new RoleRepository();
    const service = new FindAllRoleService(roleRepository);

    try {
      const role = await service.execute();
      return response.status(200).json({role: role});
    } catch (e) {
      return response.status(500).json({message: 'Something is wrong!'});
    }
  }

  public async findProfileBylRole(request: Request, response: Response){

    const roleRepository = new RoleRepository();
    const service = new FindProfileByRoleService(roleRepository);

    try {
      const parameter  = request.params;
      const role = parameter.name;
      const profile = await service.execute(role);
      return response.status(200).json({profiles: profile});
    } catch (e) {
      return response.status(500).json({message: 'Something is wrong!'});
    }
  }

}

export default new RoleController;
