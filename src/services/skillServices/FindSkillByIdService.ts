import SkillRepository  from '../../repositories/SkillRepository';

export default class FindSkillByIdService {
  private skillRepository: SkillRepository;

  constructor ( skillRepository: SkillRepository ){
    this.skillRepository = skillRepository;
  }

  public async execute(id: number) {
    return await this.skillRepository.findById(id);
  }

}