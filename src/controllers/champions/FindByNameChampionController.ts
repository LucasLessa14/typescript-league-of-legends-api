import { Request, Response } from 'express';
import { FindChampionBySlugService } from '../../services/champions/FindChampionBySlugService';

class FindByNameChampionController {

  public async handle(request: Request, response: Response): Promise<Response> {
    
    const { championName } = request.params;

    const findByNameChampionService = new FindChampionBySlugService();

    const champion = await findByNameChampionService.execute(championName);
    
    return response.json(champion);

  }
}

export { FindByNameChampionController };