import ProfileRepository from "../../repositories/ProfileRepository";

export default class JoinProfileSkillService {
  private profileRepository: ProfileRepository;

  constructor ( 
   profileRepository: ProfileRepository 
  ){
    this.profileRepository = profileRepository;
  }
   
  public async execute(profileId: number, roleId: number) {
    return await this.profileRepository.joinProfileSkill(profileId, roleId);
  }
  
}