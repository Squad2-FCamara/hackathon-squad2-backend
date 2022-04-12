import ProfileRepository  from '../../repositories/ProfileRepository';

export default class FindAllProfileService {
  private profileRepository: ProfileRepository;

  constructor ( profileRepository: ProfileRepository ){
    this.profileRepository = profileRepository;
  }

  public async execute() {
    return await this.profileRepository.findAll();
  }

}