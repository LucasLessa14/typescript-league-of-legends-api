import { getCustomRepository } from 'typeorm';
import { ChampionsRepositories } from '../../repositories/ChampionsRepositories';

class FindChampionBySlugService {

    public async execute(championSlug: string) {
        const championRepository = getCustomRepository(ChampionsRepositories);

        const champion = await championRepository.findOne({
            where: {
                slug: championSlug
            }
        });

        if (!champion) throw new Error('Champion not found');
        
        return champion;
    }
}

export { FindChampionBySlugService };