import UserRepository  from '../../repositories/UserRepository';

export default class DeleteUserScheduleService {
  private userRepository: UserRepository;

  constructor ( userRepository: UserRepository ){
    this.userRepository = userRepository;
  }

  public async execute(userScheduleId: number) {
    return await this.userRepository.deleteUserSchedule(userScheduleId);
  }
  
}