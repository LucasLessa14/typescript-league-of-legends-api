import { Request, Response } from "express";
import { ListChampionRolesService } from "../../services/championRoles/ListChampionRolesService";

class ListChampionRolesController {
    
    async handle(request: Request, response: Response) {

        const listChampionRolesService = new ListChampionRolesService();
        
        const listChampionRoles = await listChampionRolesService.execute();

        return response.json(listChampionRoles);
  }
}

export { ListChampionRolesController };