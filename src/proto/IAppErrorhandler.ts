import {FirebaseError} from "firebase/app";
import {IMessageData} from "./IMessageData";
import {AppMessagesService} from "../helpers/AppMessagesService";

export interface IAppErrorhandler {
  messageData?: IMessageData;
  appMessagesService: AppMessagesService;

  serveMessage(error: FirebaseError): void;
}
