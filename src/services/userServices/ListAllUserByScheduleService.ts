import UserRepository  from '../../repositories/UserRepository';

export default class ListAllUserByScheduleService {
  private userRepository: UserRepository;

  constructor ( userRepository: UserRepository ){
    this.userRepository = userRepository;
  }

  public async execute() {
    return await this.userRepository.listAllUserBySchedule();
  }
}