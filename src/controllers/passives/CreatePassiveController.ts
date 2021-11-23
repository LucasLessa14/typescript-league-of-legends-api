import { CreatePassiveService } from '../../services/passives/CreatePassiveService';
import { Request, Response } from 'express';

class CreatePassiveController {

    async handle(req: Request, res: Response) {

        const { name, description, urlImage } = req.body;

        const createPassive = new CreatePassiveService();

        const passive = await createPassive.execute(name, description, urlImage);

        return res.json(passive);
    }
}
 
export { CreatePassiveController };