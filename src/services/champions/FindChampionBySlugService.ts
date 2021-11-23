import { getCustomRepository } from 'typeorm';
import { ChampionsRepositories } from '../../repositories/ChampionsRepositories';

class FindChampionBySlugService {

    async execute(slug: string) {
        const championRepository = getCustomRepository(ChampionsRepositories);

        const champion = await championRepository.findOne({ where: { slug } });

        if (!champion) throw new Error('Champion not found');
        
        return champion;
    }
}

export { FindChampionBySlugService };