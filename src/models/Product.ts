import {Photo} from './Photo';

export class Product {
  docId = '';
  productName = '';
  categoryId = '';
  categoryName = '';
  description = '';
  materials = '';
  dispatchTime = '';
  caption = '';
  quantity = 0;
  oldPrice = 0;
  newPrice = 0;
  createdDate = 0;
  lastModified = 0;
  createdById = '';
  modifiedById = '';
  isNew = false;
  isOnSale = false;
  isDiscount = false;
  isFreeDelivery = false;
  photoList: Photo[] = [];
}
