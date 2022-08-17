import { Request, Response } from "express";
import { DeleteCategoryService } from "../../services/category/DeleteCategoryService";
import { ListByCategoryService } from "../../services/product/ListByCategoryService";

class DeleteCategoryController {
  async handle(req: Request, res: Response) {
    const id = req.params.id as string;

    const listByCategoryService = new ListByCategoryService();
    const products = await listByCategoryService.ExecuteByCaterogyid({ category_id: id });

    if (products.length === 0) {
      const deleteCategoryService = new DeleteCategoryService();
      const deletedCategory = await deleteCategoryService.execute({ id });

      return res.json(deletedCategory);
    } else {
      return res
        .status(409)
        .json("Não é possível exclur Categoria com Produtos associados a ela");
    }
  }
}

export { DeleteCategoryController };
