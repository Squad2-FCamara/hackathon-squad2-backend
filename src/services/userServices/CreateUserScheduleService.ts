import UserRepository from "../../repositories/UserRepository";

export default class CreateUserScheduleService {
  private userRepository: UserRepository;

  constructor ( userRepository: UserRepository ){
    this.userRepository = userRepository;
  }
   
  public async execute(
    day: string, 
    start_time: string, 
    end_time:string, 
    description: string, 
    userId1: number, 
    userId2: number
    ){
    return await this.userRepository.createUserSchedule(day, start_time, end_time, description, userId1, userId2);
  }
  
}