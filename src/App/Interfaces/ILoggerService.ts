export interface ILoggerService {
  error: (...msg: any) => void;
  warn: (...msg: any) => void;
  info: (...msg: any) => void;
  debug: (...msg: any) => void;
  trace: (...msg: any) => void;
  setLevel: (level: any) => void;
}
