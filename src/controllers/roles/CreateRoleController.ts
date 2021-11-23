import { CreateRoleService } from '../../services/roles/CreateRoleService';
import { Request, Response } from 'express';

class CreateRoleController {

    async handle(request: Request, response: Response) {

        const { name } = request.body;

        const createRole = new CreateRoleService();

        const role = await createRole.execute(name);

        return response.json(role);
    }
}

export { CreateRoleController };