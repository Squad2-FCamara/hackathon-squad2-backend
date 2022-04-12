import ProfileRepository from "../../repositories/ProfileRepository";

export default class JoinProfileRoleService {
  private profileRepository: ProfileRepository;

  constructor ( 
   profileRepository: ProfileRepository 
  ){
    this.profileRepository = profileRepository;
  }
   
  public async execute(profileId: number, roleId: number) {
    return await this.profileRepository.joinProfileRole(profileId, roleId);
  }
  
}