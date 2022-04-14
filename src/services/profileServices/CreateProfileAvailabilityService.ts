import ProfileRepository from "../../repositories/ProfileRepository";

export default class CreateProfileAvailabilityService {
  private profileRepository: ProfileRepository;

  constructor ( profileRepository: ProfileRepository ){
    this.profileRepository = profileRepository;
  }
   
  public async execute( day: Date, start_time: Date, end_time: Date, profileId: number ){
    return await this.profileRepository.createProfileAvailability(day, start_time, end_time, profileId);
  }
  
}