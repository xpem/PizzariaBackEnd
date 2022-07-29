import { Request, Response } from "express";
import { DetailCategoryService } from "../../services/category/DetailCategoryService";
import { ListCategoryService } from "../../services/category/ListCategoryService";

class ListCategoryController {
  async handle(req: Request, res: Response) {

    if (req.params?.id) {
      const id = req.params.id as string;
      const category = await (new DetailCategoryService()).executeById({ id });
      return res.json(category);
    } else {
      const categories = await (new ListCategoryService()).execute();
      return res.json(categories);
    }
  }
}

export { ListCategoryController };
