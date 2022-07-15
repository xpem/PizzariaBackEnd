import { Request, Response } from "express";
import { ListByCategoryService } from "../../services/product/ListByCategoryService";

class ListByCategoryController {
  async handle(req: Request, res: Response) {

    if (!req.query.category_id) {
        throw new Error("Define a category_id");
      }

    const category_id = req.query.category_id as string;
    const listByCategoryService = new ListByCategoryService();
    const products = await listByCategoryService.execute({ category_id });

    return res.json(products);
  }
}

export { ListByCategoryController };
