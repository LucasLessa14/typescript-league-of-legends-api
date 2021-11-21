import { getCustomRepository } from "typeorm";
import { SkillsRepositories } from "../../repositories/SkillsRepositories";

class DeleteSkillService {

  async execute(skillId: string) {
    const skillsRepositories = getCustomRepository(SkillsRepositories);

    const skill = await skillsRepositories.findOne(skillId);

    if (!skill) throw new Error('Skill not found');

    try {
        await skillsRepositories.delete(skillId);

        return skill;

    } catch (err) {

        throw new Error(err.message);
    }
  }
}

export { DeleteSkillService };