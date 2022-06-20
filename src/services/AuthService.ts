import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {User} from "../models/User";

@Injectable({providedIn: 'root'})
export class AuthService {
  private appUserSubject: BehaviorSubject<User | undefined> = new BehaviorSubject<User | undefined>(undefined);
  appUser$: Observable<User | undefined> = this.appUserSubject.asObservable();

  signOut(): void {

  }

}
