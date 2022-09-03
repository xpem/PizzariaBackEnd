import { Request, Response } from "express";
import { DetailProductService } from "../../services/product/DetailProductService";
import { ListByCategoryService } from "../../services/product/ListByCategoryService";

class ListProductController {
  async handle(req: Request, res: Response) {
    if (req.params?.id) {
      const id = req.params.id as string;
      const product = await new DetailProductService().executeById({ id });
      return res.json(product);
    } else {
      const listByCategoryService = new ListByCategoryService();
      const products = await listByCategoryService.ExecuteGroupedByCategories();

      return res.json(products);
    }
  }
}

export { ListProductController };
