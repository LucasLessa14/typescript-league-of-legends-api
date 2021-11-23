import { getCustomRepository } from "typeorm";
import { RolesRepositories } from "../../repositories/RolesRepositories";

class ListRolesService {

    async execute() {

        const rolesRepository = getCustomRepository(RolesRepositories);

        const roles = await rolesRepository.find();

        return roles;
    }
}

export { ListRolesService };