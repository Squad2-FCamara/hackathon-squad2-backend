import ProfileRepository from "../../repositories/ProfileRepository";

export default class CreateProfileService {
  private profileRepository: ProfileRepository;

  constructor ( 
   profileRepository: ProfileRepository 
  ){
    this.profileRepository = profileRepository;
  }
   
  public async execute(
    nickname: string, 
    seniority: string, 
    description: string,
    photo: string,
    userId: number) {
    return await this.profileRepository.create(nickname, seniority, description, photo, userId);
  }
  
}