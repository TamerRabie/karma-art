import {Injectable} from "@angular/core";
import {AppHeaderLinks} from "../../constants/AppHeaderLinks";
import {IAppLink} from "../../proto/IAppLink";
import {BehaviorSubject, Observable} from "rxjs";
import {AppRoutesService} from "../../helpers/AppRoutesService";
import {MatDialog} from "@angular/material/dialog";
import {AppSigninComponent} from "../../app/app-signin/app-signin.component";

@Injectable()
export class HomeService {
  logo = 'assets/images/karma-logo.png';
  logoSmall = 'assets/images/karma-logo-sm.png';
  avatar = 'assets/images/tamer.jpg';
  anonymousAvatar = 'assets/images/anonymous.jpg';
  noImage = 'assets/images/no-image.png';
  loader1 = 'assets/images/loader-1.gif';
  loader2 = 'assets/images/loader-2.gif';
  radarLoader = 'assets/images/radar-loader.gif';
  stopwatch = 'assets/images/stopwatch.gif';
  interact = 'assets/images/interact.svg';
  grabHand = 'assets/images/grab.svg';
  announcements = 'Announcements Section Announcements Section .... !!';
  headerLinks: IAppLink[] = AppHeaderLinks;
  activeLink: IAppLink = this.headerLinks[0];
  private isSidebarOpenSubject: BehaviorSubject<boolean | undefined> = new BehaviorSubject<boolean | undefined>(false);
  isSidebarOpen$: Observable<boolean | undefined> = this.isSidebarOpenSubject.asObservable();

  constructor(private matDialog: MatDialog,
              private appRoutesService: AppRoutesService) {
  }


  onHeaderLinksChange(link: IAppLink): void {
    this.checkActiveLink(link);
    switch (link.id) {
      case 0:
        this.appRoutesService.shopRoute();
        break;
      case 1:
        this.appRoutesService.personalizedGiftsRoute();
        break;
      case 2:
        this.appRoutesService.commissionArtRoute();
        break;
      case 3:
        this.appRoutesService.aboutUsRoute();
        break;
      case 4:
        this.appRoutesService.contactUsRoute();
        break;
    }
    this.toggleAppSideBar(false);
  }

  toggleAppSideBar(openSidebar: boolean): void {
    this.isSidebarOpenSubject.next(openSidebar);
  }

  openSignInDialog(): void {
    this.matDialog.open(AppSigninComponent, {
      position: {top: '15px'},
      width: '90%',
      maxWidth: '350px',
      disableClose: false,
      data: null
    });
  }

  private checkActiveLink(link: IAppLink): void {
    this.headerLinks.forEach(l => {
      if (l.id === link.id) {
        l.isActive = true;
        this.activeLink = l;
      } else {
        l.isActive = false;
      }
    });
  }

}
