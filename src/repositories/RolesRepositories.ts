import { EntityRepository, Repository } from "typeorm";
import { Role } from "../entities/Roles";

@EntityRepository(Role)
class RolesRepositories extends Repository<Role>{}

export { RolesRepositories };