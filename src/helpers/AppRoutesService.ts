import {Injectable} from "@angular/core";
import {Router} from "@angular/router";

@Injectable({providedIn: 'root'})
export class AppRoutesService {

  constructor(private router: Router) {
  }

  shopRoute(): void {
    this.router.navigateByUrl('').then(() => {
    }).catch((err) => {
      console.log(err);
    });
  }

  personalizedGiftsRoute(): void {
    this.router.navigateByUrl('PersonalizedGifts').then(() => {
    }).catch((err) => {
      console.log(err);
    });
  }

  commissionArtRoute(): void {
    this.router.navigateByUrl('CommissionArt').then(() => {
    }).catch((err) => {
      console.log(err);
    });
  }

  contactUsRoute(): void {
    this.router.navigateByUrl('ContactUs').then(() => {
    }).catch((err) => {
      console.log(err);
    });
  }

  aboutUsRoute(): void {
    this.router.navigateByUrl('AboutUs').then(() => {
    }).catch((err) => {
      console.log(err);
    });
  }

  adminRoute(): void {
    this.router.navigateByUrl('Admin').then(() => {
    }).catch((err) => {
      console.log(err);
    });
  }

  usersRoute(): void {
    this.router.navigateByUrl('Admin/Users').then(() => {
    }).catch((err) => {
      console.log(err);
    });
  }

  productsRoute(): void {
    this.router.navigateByUrl('Admin/Products').then(() => {
    }).catch((err) => {
      console.log(err);
    });
  }

  ordersRoute(): void {
    this.router.navigateByUrl('Admin/Orders').then(() => {
    }).catch((err) => {
      console.log(err);
    });
  }

  notificationsRoute(): void {
    this.router.navigateByUrl('Admin/Notifications').then(() => {
    }).catch((err) => {
      console.log(err);
    });
  }

}
