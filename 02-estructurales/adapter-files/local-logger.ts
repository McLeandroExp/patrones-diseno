import { COLORS } from '../../helpers/colors.ts';

// TODO: Implementar el LocalLogger Class
export class LocalLogger {
  constructor(private file: string) {}

  writeLog(message: string) {
    console.log(`[${this.file} error] %c${message}`, COLORS.white);
  }
  writeWarning(message: string) {
    console.log(`[${this.file} warning] %c${message}`, COLORS.yellow);
  }
  writeError(message: string) {
    console.log(`[${this.file} error] %c${message}`, COLORS.red);
  }

}