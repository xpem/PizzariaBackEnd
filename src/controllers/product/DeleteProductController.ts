import { Request, Response } from "express";
import { ListItemService } from "../../services/item/ListItemService";
import { DeleteProductService } from "../../services/product/DeleteProductService";

class DeleteProductController {
  async handle(req: Request, res: Response) {
    const id = req.params.id as string;

    const listItemService = new ListItemService();
    const items = await listItemService.executeByProductId({ productId: id });

    if (items.length === 0) {
      const deleteProductService = new DeleteProductService();
      const deletedProduct = await deleteProductService.execute({ id });
      return res.json(deletedProduct);
    } else {
      return res
        .status(409)
        .json(
          "Não é possível excluir Produto com itens de mesa associados a ele"
        );
    }
  }
}

export { DeleteProductController };
