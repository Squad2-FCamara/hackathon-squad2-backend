import ProfileRepository  from '../../repositories/ProfileRepository';

export default class UpdateProfileAvailabilityService {
  private profileRepository: ProfileRepository;

  constructor ( profileRepository: ProfileRepository ){
    this.profileRepository = profileRepository;
  }

  public async execute( day: Date, start_time: Date, end_time: Date, profileAvailabilityId: number ) {
    return await this.profileRepository.updateProfileAvailability(day, start_time, end_time, profileAvailabilityId);
  }
  
}