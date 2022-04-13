import ProfileRepository from "../../repositories/ProfileRepository";

export default class DeleteAvailabilityService {
  private profileRepository: ProfileRepository;

  constructor ( 
   profileRepository: ProfileRepository 
  ){
    this.profileRepository = profileRepository;
  }
   
  public async execute(profileAvailabilityId: number) {
    return await this.profileRepository.deleteProfileAvailability(profileAvailabilityId);
  }
  
}