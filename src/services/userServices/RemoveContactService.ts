import UserRepository  from '../../repositories/UserRepository';

export default class RemoveContactService {
  private userRepository: UserRepository;

  constructor ( userRepository: UserRepository ){
    this.userRepository = userRepository;
  }

  public async execute(userProfileId: number) {
    return await this.userRepository.removeContact(userProfileId);
  }
  
}