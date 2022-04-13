import { Request, Response } from "express";
import SkillRepository from "../repositories/SkillRepository";
import CreateSkillService from "../services/skillServices/CreateSkillService";
import FindAllSkillService from "../services/skillServices/ListAll";
import FindSkillByIdService from "../services/skillServices/FindSkillByIdService";
import UpdateSkillService from "../services/skillServices/UpdateSkillService";
import DeleteSkillService from "../services/skillServices/DeleteSkillService";

class SkillController {
  public async create(request: Request, response: Response){

    const skillRepository = new SkillRepository();
    const service = new CreateSkillService(skillRepository);

    try {
      const { name } = request.body;
      const skill = await service.execute(name);
      return response.status(201).json({skill: skill})
    } catch (e) {
      return response.status(500).json({message: 'Something is wrong!'})
    }
  }

  public async listAll(request: Request, response: Response){

    const skillRepository = new SkillRepository();
    const service = new FindAllSkillService(skillRepository);

    try {
      const skill = await service.execute();
      return response.status(200).json({skill: skill});
    } catch (e) {
      return response.status(500).json({message: 'Something is wrong!'});
    }
  }

  public async findById(request: Request, response: Response){

    const profileRepository = new SkillRepository();
    const service = new FindSkillByIdService(profileRepository);

    try {
      const parameter = request.params;
      const skillId = Number(parameter.skillId);
      const skill = await service.execute(skillId);
      return response.status(200).json({skill: skill})
    } catch (e) {
      console.log(e)
      return response.status(500).json({message: 'Something is wrong!'})
    }
  }

  public async update(request: Request, response: Response){

    const skillRepository = new SkillRepository();
    const service = new UpdateSkillService(skillRepository);

    try {
      const { name, skillId  } = request.body;
      const skill = await service.execute(name, skillId);
      return response.status(200).json({skill: skill})
    } catch (e) {
      return response.status(500).json({message: 'Something is wrong!'})
    }
  }

  public async delete(request: Request, response: Response){

    const skillRepository = new SkillRepository();
    const service = new DeleteSkillService(skillRepository);

    try {
      const aux  = request.params;
      const skillId = Number(aux.skillId);
      const skill = await service.execute(skillId);
      return response.status(202).json({skill: skill});
    } catch (e) {
      return response.status(500).json({message: 'Something is wrong!'});
    }
  }


}

export default new SkillController;