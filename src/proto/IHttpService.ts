import {AppErrorHandler} from "../helpers/AppErrorHandler";
import {AppMessagesService} from "../helpers/AppMessagesService";
import {IQueryParam} from "./IQueryParam";

export interface IHttpService<T> {
  db: any;
  appErrorHandler?: AppErrorHandler
  appMessagesService?: AppMessagesService

  add(t: T): Promise<string | undefined>;

  set(t: T): Promise<boolean | undefined>;

  update(t: T): Promise<boolean | undefined>;

  delete(docId: string): Promise<boolean | undefined>;

  get(docId: string): Promise<T | undefined>;

  list(queryParam?: IQueryParam): Promise<T[] | undefined>;
}
