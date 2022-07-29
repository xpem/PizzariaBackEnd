import { Request, Response } from "express";
import { DetailCategoryService } from "../../services/category/DetailCategoryService";
import { UpdateCategoryService } from "../../services/category/UpdateCategoryService";

class UpdateCategoryController {
  async handle(req: Request, res: Response) {
    const id = req.params.id;
    const { name } = req.body;

    const detailCategoryService = new DetailCategoryService();
    const categoryByname = await detailCategoryService.executeByName({
      name,
    });

    if (categoryByname.length === 0) {
      const createCategoryService = new UpdateCategoryService();
      const category = await createCategoryService.execute({ id, name });
      return res.json(category);
    } else {
      return res.status(409).json("Categoria já existente");
    }
  }
}

export { UpdateCategoryController };
