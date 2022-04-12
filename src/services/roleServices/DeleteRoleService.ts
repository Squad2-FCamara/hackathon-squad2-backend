import RoleRepository  from '../../repositories/RoleRepository';

export default class DeleteRoleService {
  private roleRepository: RoleRepository;

  constructor ( 
   roleRepository: RoleRepository 
  ){
    this.roleRepository = roleRepository;
  }

  public async execute(roleId: number) {
    return await this.roleRepository.delete(roleId);
  }
  
}