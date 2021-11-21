import { getCustomRepository } from 'typeorm';
import { SkillsRepositories } from '../../repositories/SkillsRepositories';

class FindByIdChampionService {

    public async execute(championId: string) {
        const skillRepository = getCustomRepository(SkillsRepositories);

        // const champion = await skillRepository.findOne({
        //     where: {
        //         championId
        //     }
        // });

        // if (!champion) {
        //     throw new Error('Champion not found');
        // }
        
        // return champion;
    }
}

export { FindByIdChampionService };