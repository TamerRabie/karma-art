import {Injectable} from "@angular/core";
import {AdminLinks} from "../../constants/AdminLinks";
import {IAppLink} from "../../proto/IAppLink";
import {AppRoutesService} from "../../helpers/AppRoutesService";
import {IElementStyle} from "../../proto/IElementStyle";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable()
export class AdminService {
  anonymousAvatar = 'assets/images/anonymous.jpg';
  adminSideBarLinks: IAppLink[] = AdminLinks;
  wrapperStyle: IElementStyle = {openClass: 'margin-left-230', closeClass: 'margin-left-50', isOpen: false};
  sidebarStyle: IElementStyle = {openClass: 'width-230', closeClass: 'width-50', isOpen: false};
  private wrapperSubject: BehaviorSubject<IElementStyle> = new BehaviorSubject<IElementStyle>(this.wrapperStyle);
  wrapperStyle$: Observable<IElementStyle> = this.wrapperSubject.asObservable();
  private sidebarSubject: BehaviorSubject<IElementStyle> = new BehaviorSubject<IElementStyle>(this.sidebarStyle);
  sidebarStyle$: Observable<IElementStyle> = this.sidebarSubject.asObservable();

  private isSidebarOpenSubject: BehaviorSubject<boolean | undefined> = new BehaviorSubject<boolean | undefined>(false);
  isSidebarOpen$: Observable<boolean | undefined> = this.isSidebarOpenSubject.asObservable();


  constructor(public appRoutes: AppRoutesService) {
  }

  workInit(): any {
    if (window.innerWidth > 992) {
      this.wrapperStyle.openClass = 'margin-left-230';
      this.wrapperStyle.closeClass = 'margin-left-50';
      this.sidebarStyle.openClass = 'width-230';
      this.sidebarStyle.closeClass = 'width-50';
    } else {
      this.wrapperStyle.openClass = 'margin-left-200 width-full min-width-full';
      this.wrapperStyle.closeClass = 'margin-left-0 width-full';
      this.sidebarStyle.openClass = 'width-200';
      this.sidebarStyle.closeClass = 'width-0';
    }
  }

  onAdminLinksChanged(link: IAppLink): void {
    this.checkActiveLink(link);
    switch (link.id) {
      case 0:
        this.appRoutes.adminRoute();
        break;
      case 1:
        this.appRoutes.usersRoute();
        break;
      case 2:
        this.appRoutes.productsRoute();
        break;
      case 3:
        this.appRoutes.ordersRoute();
        break;
      case 4:
        this.appRoutes.notificationsRoute();
        break;
      case 8:
        this.appRoutes.shopRoute();
        break;
    }
    this.wrapperStyle.isOpen = false;
    this.sidebarStyle.isOpen = false;
    this.isSidebarOpenSubject.next(false);
  }

  toggleSideBar(): void {
    this.wrapperStyle.isOpen = !this.wrapperStyle.isOpen;
    this.sidebarStyle.isOpen = !this.sidebarStyle.isOpen;
    this.isSidebarOpenSubject.next(this.sidebarStyle.isOpen);
  }

  checkActiveLink(link: IAppLink): void {
    this.adminSideBarLinks.forEach(l => {
      l.isActive = l.id === link.id;
    });
  }

}
