import { Request, Response } from "express";

class CreateSkillsControllers {

    async handle(req: Request, res: Response) {

        const { name, description } = req.body;
    }
}

export { CreateSkillsControllers };