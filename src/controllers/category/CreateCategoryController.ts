import { Request, Response } from "express";
import { CreateCategoryService } from "../../services/category/CreateCategoryService";
import { DetailCategoryService } from "../../services/category/DetailCategoryService";

class CreateCategoryController {
  async handle(req: Request, res: Response) {
    const { name } = req.body;

    const detailCategoryService = new DetailCategoryService();
    const categoryByname = await detailCategoryService.executeByName({
      name,
    });

    if (categoryByname.length === 0) {
      const createCategoryService = new CreateCategoryService();
      const category = await createCategoryService.execute({
        name,
      });

      return res.json(category);
    } else {
      return res.status(409).json("Categoria já existente");
    }
  }
}

export { CreateCategoryController };
