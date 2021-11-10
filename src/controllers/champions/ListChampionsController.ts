import { Request, Response } from 'express';
import { ListChampionsService } from '../../services/champions/ListChampionsService';

class ListChampionsController {

    async handle(request: Request, response: Response) {

        const listChampionsService = new ListChampionsService();

        const champions = await listChampionsService.execute();

        return response.json(champions);
    }
}

export { ListChampionsController };