import ProfileRepository from "../../repositories/ProfileRepository";

export default class CreateProfileAvailabilityService {
  private profileRepository: ProfileRepository;

  constructor ( profileRepository: ProfileRepository ){
    this.profileRepository = profileRepository;
  }
   
  public async execute( day: Date, hour: Date, profileId: number ){
    return await this.profileRepository.createProfileAvailability(day, hour, profileId);
  }
  
}