import UserRepository  from '../../repositories/UserRepository';

export default class UpdateUserScheduleService {
  private userRepository: UserRepository;

  constructor ( 
   userRepository: UserRepository 
  ){
    this.userRepository = userRepository;
  }

  public async execute(
    day: string, 
    start_time: string, 
    end_time:string, 
    description: string, 
    scheduleId: number, 
    ) {
    return await this.userRepository.updateUserSchedule(day, start_time, end_time, description, scheduleId);
  }
  
}