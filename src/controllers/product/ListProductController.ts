import { Request, Response } from "express";
import { ListByCategoryService } from "../../services/product/ListByCategoryService";

class ListProductController {
  async handle(req: Request, res: Response) {
    const listByCategoryService = new ListByCategoryService();
    const products = await listByCategoryService.ExecuteGroupedByCategories();

    return res.json(products);
  }
}

export { ListProductController };
