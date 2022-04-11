import UserRepository  from '../../repositories/UserRepository';

export default class FindUserByIdService {
  private userRepository: UserRepository;

  constructor ( 
   userRepository: UserRepository 
  ){
    this.userRepository = userRepository;
  }

  public async execute(id: number) {
    return await this.userRepository.findById(id);
  }

}