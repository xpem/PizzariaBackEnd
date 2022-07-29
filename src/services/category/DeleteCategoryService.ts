import prismaClient from "../../prisma";

interface CategoryRequest {
  id: string;
}

class DeleteCategoryService {
  async execute({ id }: CategoryRequest) {
    const item = await prismaClient.category.delete({
      where: { id },
    });

    return item;
  }
}

export { DeleteCategoryService };