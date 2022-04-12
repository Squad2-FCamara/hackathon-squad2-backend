import ProfileRepository from "../../repositories/ProfileRepository";

export default class UpdateProfileService {
  private profileRepository: ProfileRepository;

  constructor ( profileRepository: ProfileRepository ){
    this.profileRepository = profileRepository;
  }

  public async execute(
    nickname: string, 
    seniority: string, 
    description: string,
    photo: string,
    profileId: number
    ){
    return await this.profileRepository.update(nickname, seniority, description, photo, profileId);
  }
  
}