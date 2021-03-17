import { INotificationMessageParams } from './INotificationMessageParams';
import { INotificationParams } from './INotificationParams';
export interface INotificationService {
  infoMessage: (arg0: INotificationMessageParams) => void;
  warningMessage: (arg0: INotificationMessageParams) => void;
  errorMessage: (arg0: INotificationMessageParams) => void;
  // loadingMessage: (arg0: INotificationMessageParams) => void;
  successMessage: (arg0: INotificationMessageParams) => void;
}
