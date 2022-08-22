import { Request, Response } from "express";
import { DetailProductService } from "../../services/product/DetailProductService";
import { UpdateProductService } from "../../services/product/UpdateProductService";

class UpdateProductController {
  async handle(req: Request, res: Response) {
    const id = req.params.id;
    const { name, price, description, category_id } = req.body;

    const detailProductService = new DetailProductService();
    const productByname = await detailProductService.executeByName({
      name,
    });

    if (productByname.length === 0) {
      const updateProductService = new UpdateProductService();
      const product = await updateProductService.execute({
        id,
        name,
        price,
        description,
        category_id,
      });
      return res.json(product);
    } else {
      return res.status(409).json("Produto já existente");
    }
  }
}

export { UpdateProductController };
