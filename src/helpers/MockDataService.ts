import {Injectable} from '@angular/core';
import {SlideShowImageList} from '../constants/SlideShowImageList';
import {AccessoriesList} from '../constants/AccessoriesList';
import {ShopList} from '../constants/ShopList';
import {ArabicStyleList} from '../constants/ArabicStyleList';
import {CheeseBoardsList} from '../constants/CheeseBoardsList';
import {CoastersList} from '../constants/CoastersList';
import {CommissionArtList} from '../constants/CommissionArtList';
import {FeaturedList} from '../constants/FeaturedList';
import {MugsList} from '../constants/MugsList';
import {NewArrivalsList} from '../constants/NewArrivalsList';
import {OnSaleList} from '../constants/OnSaleList';
import {PersonalizedGiftsList} from '../constants/PersonalizedGiftsList';
import {TablesList} from '../constants/TablesList';
import {TraysList} from '../constants/TraysList';
import {WallArtList} from '../constants/WallArtList';
import {WallSignsList} from '../constants/WallSignsList';

@Injectable({providedIn: 'root'})
export class MockDataService {
  productsDataSource?: string[];
  slideShowDataSource?: string[];
  slideShowImages = SlideShowImageList;
  shopList = ShopList;
  accessoriesList = AccessoriesList;
  arabicStyleList = ArabicStyleList;
  cheeseBoardsList = CheeseBoardsList;
  coastersList = CoastersList;
  commissionArtList = CommissionArtList;
  featuredList = FeaturedList;
  mugsList = MugsList;
  newArrivalsList = NewArrivalsList;
  onSaleList = OnSaleList;
  personalizedGiftsList = PersonalizedGiftsList;
  tablesList = TablesList;
  traysList = TraysList;
  wallArtList = WallArtList;
  wallSignsList = WallSignsList;
}
