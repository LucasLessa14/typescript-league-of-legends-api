import { CreateChampionPassiveService } from '../../services/championPassives/CreateChampionPassiveService';
import { Request, Response } from 'express';

class CreateChampionPassiveController {

    async handle(req: Request, res: Response) {

        const { name, description, urlImage } = req.body;

        const createChampionPassive = new CreateChampionPassiveService();

        const championPassive = await createChampionPassive.execute(name, description, urlImage);

        return res.json(championPassive);
    }
}
 
export { CreateChampionPassiveController };