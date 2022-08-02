import prismaClient from "../../prisma";

class ListProductService {
  async execute() {
    const res = await prismaClient.product.findMany();

    return res;
  }
}

export { ListProductService };