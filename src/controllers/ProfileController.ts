import { Request, Response } from "express";
import ProfileRepository from "../repositories/ProfileRepository";
import CreateProfileService from "../services/profileServices/CreateProfileService";
import UpdateProfileService from "../services/profileServices/UpdateProfileService";
import FindProfileByIdService from "../services/profileServices/FindProfileByIdService";
import FindAllProfileService from "../services/profileServices/FindAllProfileService";
import JoinProfileRoleService from "../services/profileServices/JoinProfileRoleService";
import JoinProfileSkillService from "../services/profileServices/JoinProfileSkillService";
import FindProfileByNameService from "../services/profileServices/FindProfileByNameService";
import CreateProfileAvailabilityService from "../services/profileServices/CreateProfileAvailabilityService";
import UpdateProfileAvailabilityService from "../services/profileServices/UpdateProfileAvailabilityService";
import FindProfileBySkillService from "../services/profileServices/FindProfileBySkillService";
import CreateAddressService from "../services/profileServices/CreateAddressService";
import UpdateAddressService from "../services/profileServices/UpdateAddressService";

class ProfileController {
  public async create(request: Request, response: Response){

    const profileRepository = new ProfileRepository();
    const service = new CreateProfileService(profileRepository);

    try {
      const { nickname, seniority, description, photo, userId  } = request.body;
      const profile = await service.execute(nickname, seniority, description, photo, userId);
      return response.status(201).json({profile: profile})
    } catch (e) {
      return response.status(500).json({message: 'Something is wrong!'})
    }
  }

  public async update(request: Request, response: Response){

    const profileRepository = new ProfileRepository();
    const service = new UpdateProfileService(profileRepository);

    try {
      const { nickname, seniority, description, photo, profileId  } = request.body;
      const profile = await service.execute(nickname, seniority, description, photo, profileId);
      return response.status(200).json({profile: profile})
    } catch (e) {
      return response.status(500).json({message: 'Something is wrong!'})
    }
  }

  public async findById(request: Request, response: Response){

    const profileRepository = new ProfileRepository();
    const service = new FindProfileByIdService(profileRepository);

    try {
      const parameter = request.params;
      const profileId = Number(parameter.profileId);
      const profile = await service.execute(profileId);
      return response.status(200).json({profile: profile})
    } catch (e) {
      console.log(e)
      return response.status(500).json({message: 'Something is wrong!'})
    }
  }

  public async findByName(request: Request, response: Response){

    const profileRepository = new ProfileRepository();
    const service = new FindProfileByNameService(profileRepository);

    try {
      const parameter = request.params;
      const name = parameter.name;
      const profile = await service.execute(name);
      return response.status(200).json({profile: profile})
    } catch (e) {
      console.log(e)
      return response.status(500).json({message: 'Something is wrong!'})
    }
  }

  public async findAllUser(request: Request, response: Response){

    const profileRepository = new ProfileRepository();
    const service = new FindAllProfileService(profileRepository);

    try {
      const profile = await service.execute();
      return response.status(200).json({profile: profile});
    } catch (e) {
      return response.status(500).json({message: 'Something is wrong!'});
    }
  }

  public async joinProfileRole(request: Request, response: Response){

    const profileRepository = new ProfileRepository();
    const service = new JoinProfileRoleService(profileRepository);

    try {
      const { profileId, roleId  } = request.body;
      const profile = await service.execute(profileId, roleId);
      return response.status(200).json({profile: profile});
    } catch (e) {
      return response.status(500).json({message: 'Something is wrong!'});
    }
  }

  public async joinProfileSkill(request: Request, response: Response){

    const profileRepository = new ProfileRepository();
    const service = new JoinProfileSkillService(profileRepository);

    try {
      const { profileId, skillId  } = request.body;
      const profile = await service.execute(profileId, skillId);
      return response.status(200).json({profile: profile});
    } catch (e) {
      return response.status(500).json({message: 'Something is wrong!'});
    }
  }

  public async createProfileAvailability(request: Request, response: Response){

    const profileRepository = new ProfileRepository();
    const service = new CreateProfileAvailabilityService(profileRepository);

    try {
      const { day, hour, profileId  } = request.body;
      const profileAvailability = await service.execute(day, hour, profileId);
      return response.status(201).json({profileAvailability: profileAvailability});
    } catch (e) {
      console.log(e)
      return response.status(500).json({message: 'Something is wrong!'});
    }
  }

  public async updateProfileAvailability(request: Request, response: Response){

    const profileRepository = new ProfileRepository();
    const service = new UpdateProfileAvailabilityService(profileRepository);

    try {
      const { day, hour, profileAvailabilityId  } = request.body;
      const profileAvailability = await service.execute(day, hour, profileAvailabilityId);
      return response.status(200).json({profileAvailability: profileAvailability});
    } catch (e) {
      return response.status(500).json({message: 'Something is wrong!'});
    }
  }

  public async findProfileBySkill(request: Request, response: Response){

    const profileRepository = new ProfileRepository();
    const service = new FindProfileBySkillService(profileRepository);

    try {
      const parameter = request.params;
      const skill = parameter.skill;
      const profile = await service.execute(skill);
      return response.status(200).json(profile);
    } catch (e) {
      console.log(e)
      return response.status(500).json({message: 'Something is wrong!'})
    }
  }

  public async createAddress(request: Request, response: Response){

    const profileRepository = new ProfileRepository();
    const service = new CreateAddressService(profileRepository);

    try {
      const { profileId, street, number, cep, country, state, city  } = request.body;
      const profile = await service.execute(profileId, street, number, cep, country, state, city);
      return response.status(201).json({profile: profile})
    } catch (e) {
      return response.status(500).json({message: 'Something is wrong!'})
    }
  }

  public async updateAddress(request: Request, response: Response){

    const profileRepository = new ProfileRepository();
    const service = new UpdateAddressService(profileRepository);

    try {
      const { profileId, street, number, cep, country, state, city  } = request.body;
      const profile = await service.execute(profileId, street, number, cep, country, state, city);
      return response.status(200).json({profile: profile})
    } catch (e) {
      return response.status(500).json({message: 'Something is wrong!'})
    }
  }

}

export default new ProfileController;