import ProfileRepository from "../../repositories/ProfileRepository";

export default class CreateProfileAvailabilityService {
  private profileRepository: ProfileRepository;

  constructor ( profileRepository: ProfileRepository ){
    this.profileRepository = profileRepository;
  }
   
  public async execute( day: string, hour: string, profileId: number ){
    return await this.profileRepository.createProfileAvailability(day, hour, profileId);
  }
  
}