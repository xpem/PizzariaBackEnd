import { Request, Response } from "express";
import { CreateProductService } from "../../services/product/CreateProductService";
import { DetailProductService } from "../../services/product/DetailProductService";

class CreateProductController {
  async handle(req: Request, res: Response) {
    const { name, price, description, category_id } = req.body;

    // if (!req.file) {
    //   throw new Error("Upload file error");
    // }

    // const { originalname, filename: banner } = req.file;

    const detailProductService = new DetailProductService();
    const productByname = await detailProductService.executeByName({
      name,
    });

    if (productByname.length === 0) {
      const createProductService = new CreateProductService();
      const product = await createProductService.execute({
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

export { CreateProductController };
