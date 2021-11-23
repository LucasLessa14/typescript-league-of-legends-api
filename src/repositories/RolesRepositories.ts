import { EntityRepository, Repository } from "typeorm";
import { Roles } from "../entities/Roles";

@EntityRepository(Roles)
class RolesRepositories extends Repository<Roles>{}

export { RolesRepositories };