import ProfileRepository  from '../../repositories/ProfileRepository';

export default class UpdateProfileAvailabilityService {
  private profileRepository: ProfileRepository;

  constructor ( profileRepository: ProfileRepository ){
    this.profileRepository = profileRepository;
  }

  public async execute( day: string, hour: string, profileAvailabilityId: number ) {
    return await this.profileRepository.updateProfileAvailability(day, hour, profileAvailabilityId);
  }
  
}