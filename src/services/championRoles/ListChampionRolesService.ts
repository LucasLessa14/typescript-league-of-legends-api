import { getCustomRepository } from "typeorm";
import { ChampionRoleRepositories } from "../../repositories/ChampionRoleRepositories";

class ListChampionRolesService {
    async execute() {

        const championRolesRepository = getCustomRepository(ChampionRoleRepositories);

        const championRoles = await championRolesRepository.find();

        return championRoles;
    }
}

export { ListChampionRolesService };