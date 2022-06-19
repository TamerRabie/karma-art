import {Injectable} from "@angular/core";
import {SwUpdate} from "@angular/service-worker";

@Injectable({providedIn: 'root'})
export class AppPwaService {

  constructor(private swUpdate: SwUpdate) {
  }


}
