import {Product} from './Product';

export class Category {
  docId = '';
  categoryName = '';
  description = '';
  createdDate = 0;
  lastModified = 0;
  createdById = '';
  modifiedById = '';
  productList: Product[] = [];
}

export const categoryConverter = {
  toFirestore: (category: Category) => {
    return {
      docId: category.docId,
      categoryName: category.categoryName,
      description: category.description,
      createdById: category.createdById,
      modifiedById: category.modifiedById,
      createdDate: category.createdDate,
      lastModified: category.lastModified,
      productList: category.productList
    }
  },
  fromFirestore: (snapshot: any, options?: any) => {
    const data = snapshot.data(options);
    const category = new Category();
    category.docId = data.docId;
    category.categoryName = data.categoryName;
    category.description = data.description;
    category.createdById = data.createdById;
    category.modifiedById = data.modifiedById;
    category.createdDate = data.createdDate;
    category.lastModified = data.lastModified;
    category.productList = data.productList;
  }
}
