import {Injectable} from "@angular/core";
import {IHttpService} from "../proto/IHttpService";
import {User} from "../models/User";
import {AppErrorHandler} from "../helpers/AppErrorHandler";
import {AppMessagesService} from "../helpers/AppMessagesService";
import {IQueryParam} from "../proto/IQueryParam";

@Injectable({providedIn: 'root'})
export class UserService implements IHttpService<User> {
  appErrorHandler?: AppErrorHandler;
  appMessagesService?: AppMessagesService;
  db: any;

  add(t: User): Promise<string | undefined> {
    return Promise.resolve(undefined);
  }

  delete(docId: string): Promise<boolean | undefined> {
    return Promise.resolve(undefined);
  }

  get(docId: string): Promise<User | undefined> {
    return Promise.resolve(undefined);
  }

  list(queryParam?: IQueryParam): Promise<User[] | undefined> {
    return Promise.resolve(undefined);
  }

  set(t: User): Promise<boolean | undefined> {
    return Promise.resolve(undefined);
  }

  update(t: User): Promise<boolean | undefined> {
    return Promise.resolve(undefined);
  }

}
