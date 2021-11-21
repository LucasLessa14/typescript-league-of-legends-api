import { Request, Response } from 'express';
import { FindByNameChampionService } from '../../services/champions/FindByNameChampionService';

class FindByNameChampionController {

  public async handle(request: Request, response: Response): Promise<Response> {
    
    const { name } = request.params;

    const findByNameChampionService = new FindByNameChampionService();

    const champion = await findByNameChampionService.execute(name);
    
    return response.json(champion);

  }

}

export { FindByNameChampionController };