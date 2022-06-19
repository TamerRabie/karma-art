export interface IMessageData {
  message: string;
  isError?: boolean;
  isWarning?: boolean;
  isSuccess?: boolean;
  isInfo?: boolean;
  duration?: number;
}
