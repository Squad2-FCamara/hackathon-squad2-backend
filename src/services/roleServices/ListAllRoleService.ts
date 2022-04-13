import RoleRepository  from '../../repositories/RoleRepository';

export default class ListAllRoleService {
  private roleRepository: RoleRepository;

  constructor ( roleRepository: RoleRepository ){
    this.roleRepository = roleRepository;
  }

  public async execute() {
    return await this.roleRepository.listAll();
  }

}