import ProfileRepository  from '../../repositories/ProfileRepository';

export default class FindProfileByNameService {
  private profileRepository: ProfileRepository;

  constructor ( profileRepository: ProfileRepository ){
    this.profileRepository = profileRepository;
  }

  public async execute(name: string) {
    return await this.profileRepository.findByName(name);
  }

}