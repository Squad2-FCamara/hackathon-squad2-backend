import RoleRepository  from '../../repositories/RoleRepository';

export default class FindProfileByRoleService {
  private roleRepository: RoleRepository;

  constructor ( roleRepository: RoleRepository ){
    this.roleRepository = roleRepository;
  }

  public async execute(name: string) {
    return await this.roleRepository.findProfileByRole(name);
  }

}