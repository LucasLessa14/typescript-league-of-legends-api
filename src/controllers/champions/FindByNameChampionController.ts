import { Request, Response } from 'express';
import { FindByNameChampionService } from '../../services/champions/FindByNameChampionService';

class FindByNameChampionController {

  public async handle(request: Request, response: Response): Promise<Response> {
    
    const { championName } = request.params;

    const findByNameChampionService = new FindByNameChampionService();

    const champion = await findByNameChampionService.execute(championName);
    
    return response.json(champion);

  }

}

export { FindByNameChampionController };