import {Injectable} from "@angular/core";
import {IMessageData} from "../proto/IMessageData";
import {AppMessagesService} from "./AppMessagesService";
import {IAppErrorhandler} from "../proto/IAppErrorhandler";
import {FirebaseError} from "firebase/app";

@Injectable({providedIn: 'root'})
export class AppErrorHandler implements IAppErrorhandler {
  messageData?: IMessageData;
  appMessagesService: AppMessagesService;

  constructor(messageService: AppMessagesService) {
    this.appMessagesService = messageService;
  }

  serveMessage(error: FirebaseError): void {
    // console.log(error);
    // this.messageData = {
    //   message: error.message,
    //   isError: true,
    //   duration: 10000
    // };
    // this.appMessagesService.toastMessage(this.messageData);
  }

}
