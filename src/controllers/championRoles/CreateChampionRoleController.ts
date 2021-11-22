import { CreateChampionRoleService } from '../../services/championRoles/CreateChampionRoleService';
import { Request, Response } from 'express';

class CreateChampionRoleController {

    async handle(request: Request, response: Response) {

        const { name } = request.body;

        const createRole = new CreateChampionRoleService();

        const role = await createRole.execute(name);

        return response.json(role);
    }
}

export { CreateChampionRoleController };