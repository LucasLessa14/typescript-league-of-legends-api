import { Request, Response, NextFunction } from 'express';

export async function ensureSlugName(request: Request, response: Response, next: NextFunction) {

    const { name } = request.params;

    if (!name) {
        return response.status(400).json({
            error: 'Missing name'
        });
    }

    request.params.name = name.replace(/\s+/g, '-').toLowerCase();

    return next();
}