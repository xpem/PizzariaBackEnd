import prismaClient from "../../prisma";

interface ProductRequest {
  category_id: string;
}

class ListByCategoryService {

  async ExecuteByCaterogyid({ category_id }: ProductRequest) {
    const findByCategory = await prismaClient.product.findMany({
      where: {
        category_id,
      },
    });

    return findByCategory;
  }

  async ExecuteGroupedByCategories() {
    const res = await prismaClient.category.findMany({
      select: {
        name: true,
        products: {
          select: {
            id: true,
            price: true,
            description: true,
            name: true,
          },
        },
      },
      orderBy: { name: "asc" },
    });

    return res;
  }
}

export { ListByCategoryService };
