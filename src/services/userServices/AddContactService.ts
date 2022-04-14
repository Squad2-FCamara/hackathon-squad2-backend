import UserRepository from "../../repositories/UserRepository";

export default class AddContactRoleService {
  private userRepository: UserRepository;

  constructor ( 
   userRepository: UserRepository 
  ){
    this.userRepository = userRepository;
  }
   
  public async execute(userId: number, profileId: number) {
    return await this.userRepository.addContact(userId, profileId);
  }
  
}