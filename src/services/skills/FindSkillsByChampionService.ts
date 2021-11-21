import { getCustomRepository } from 'typeorm';
import { SkillsRepositories } from '../../repositories/SkillsRepositories';
import { FindByNameChampionService } from "../champions/FindByNameChampionService";

class FindSkillsByChampionService {

    public async execute(championName: string) {

        const skillRepository = getCustomRepository(SkillsRepositories);

        const champion = await new FindByNameChampionService().execute(championName);

        if (!champion) throw new Error('Champion not found');

        const skills = await skillRepository.find({
            where: { champion }
        });

        if (!skills) throw new Error('Skill not found');

        return skills;
    }
}

export { FindSkillsByChampionService };