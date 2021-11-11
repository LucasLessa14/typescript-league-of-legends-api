import { getCustomRepository } from "typeorm";
import { ChampionRoleRepositories } from "../../repositories/ChampionRoleRepositories";

class CreateChampionRoleService {
    
    async execute(name: string) {

        const championRoleRepositories = getCustomRepository(ChampionRoleRepositories);

        if (!name) {
            throw new Error('Name is required');
        }
        
        const championRoles = championRoleRepositories.create({ name });

        await championRoleRepositories.save(championRoles);

        return championRoles;

    }
}

export { CreateChampionRoleService };