import { Request, Response } from "express";
import { ListProducByCategoryService } from "../../services/product/ListProducByCategoryService";

class ListProductByCategoryController {
    async handle(req: Request, res: Response) {
        const category_id = req.query.category_id as string;

        const listProductByCategory = new ListProducByCategoryService();
        const products = await listProductByCategory.execute({ category_id });

        return res.json(products);
    }
}

export {ListProductByCategoryController}