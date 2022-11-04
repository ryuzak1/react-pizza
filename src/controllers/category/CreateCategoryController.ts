import { CreateCategoryService } from "../../services/category/CreateCategoryService";
import { Request, Response } from "express"

class CreateCategoryController {
    async handle(req: Request, res: Response) {
        const createCategory = new CreateCategoryService();

        const {name} = req.body;
        const category = await createCategory.execute({name});

        return res.json(category);
    }
}

export {CreateCategoryController}