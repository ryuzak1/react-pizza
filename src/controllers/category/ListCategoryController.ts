import { Request, Response } from "express"
import { ListCategoryService } from "../../services/category/ListCategoryService"

class ListCategoryController {
    async handle(req: Request, res: Response) {
        const categoryService = new ListCategoryService();
        const categories = await categoryService.execute();

        return res.json(categories);
    }

}

export { ListCategoryController }