import UserRepository  from '../../repositories/UserRepository';

export default class CreateUserService {
  private userRepository: UserRepository;

  constructor ( 
   userRepository: UserRepository 
  ){
    this.userRepository = userRepository;
  }

  public async execute(name: string, email: string, password:string) {
    return await this.userRepository.create(name, email, password);
  }

  
}