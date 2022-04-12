import UserRepository  from '../../repositories/UserRepository';

export default class UpdateUserService {
  private userRepository: UserRepository;

  constructor ( 
   userRepository: UserRepository 
  ){
    this.userRepository = userRepository;
  }

  public async execute(name: string, email: string, password: string, userId: number) {
    return await this.userRepository.update(name, email, password, userId);
  }
  
}