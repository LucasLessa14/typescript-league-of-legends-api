import { Request, Response } from 'express';
import { FindChampionBySlugService } from '../../services/champions/FindChampionBySlugService';

class FindChampionBySlugController {

  public async handle(request: Request, response: Response): Promise<Response> {
    
    const { slug } = request.params;

    const findByNameChampionService = new FindChampionBySlugService();

    const champion = await findByNameChampionService.execute(slug);
    
    return response.json(champion);
  }
}

export { FindChampionBySlugController };