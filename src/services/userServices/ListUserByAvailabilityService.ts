import UserRepository  from '../../repositories/UserRepository';

export default class ListUserByAvailabilityService {
  private userRepository: UserRepository;

  constructor ( userRepository: UserRepository ){
    this.userRepository = userRepository;
  }

  public async execute() {
    return await this.userRepository.listUserByAvailability();
  }
}