import { EntityRepository, Repository } from "typeorm";
import { ChampionRoles } from "../entities/ChampionRoles";

@EntityRepository(ChampionRoles)
class ChampionRoleRepositories extends Repository<ChampionRoles>{}

export { ChampionRoleRepositories };