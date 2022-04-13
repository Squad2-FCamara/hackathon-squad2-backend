import ProfileRepository  from '../../repositories/ProfileRepository';

export default class FindProfileByIdService {
  private profileRepository: ProfileRepository;

  constructor ( profileRepository: ProfileRepository ){
    this.profileRepository = profileRepository;
  }

  public async execute(id: number) {
    return await this.profileRepository.findById(id);
  }

}