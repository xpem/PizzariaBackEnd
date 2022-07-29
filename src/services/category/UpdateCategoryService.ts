import prismaClient from "../../prisma";

interface CategoryRequest {
  id: string;
  name: string;
}

class UpdateCategoryService {
  async execute({ id, name }: CategoryRequest) {
    const order = await prismaClient.category.update({
      where: {
        id,
      },
      data: {
        name,
      },
    });

    return order;
  }
}

export { UpdateCategoryService };
