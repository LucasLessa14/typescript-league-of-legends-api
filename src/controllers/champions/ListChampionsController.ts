import { Request, Response } from 'express';
import { ListChampionsService } from '../../services/champions/ListChampionsService';

class ListChampionsController {

    public async handle(request: Request, response: Response): Promise<Response> {

        const listChampionsService = new ListChampionsService();

        const champions = await listChampionsService.execute();

        return response.json({
            count: champions.length,
            champions: champions
        });
    }
}

export { ListChampionsController };