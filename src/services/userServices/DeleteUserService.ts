import UserRepository  from '../../repositories/UserRepository';

export default class DeleteUserService {
  private userRepository: UserRepository;

  constructor ( 
   userRepository: UserRepository 
  ){
    this.userRepository = userRepository;
  }

  public async execute(userId: number) {
    return await this.userRepository.delete(userId);
  }
  
}