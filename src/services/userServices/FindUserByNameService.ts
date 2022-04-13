import UserRepository  from '../../repositories/UserRepository';

export default class FindUserByNameService {
  private userRepository: UserRepository;

  constructor ( 
   userRepository: UserRepository 
  ){
    this.userRepository = userRepository;
  }

  public async execute(name: string) {
    return await this.userRepository.findByName(name);
  }

}