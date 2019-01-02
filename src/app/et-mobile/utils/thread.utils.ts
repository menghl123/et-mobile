export class ThreadUtils {
  static sleep(delay: number): void {
    const start = (new Date()).getTime();
    while ((new Date()).getTime() - start < delay) {
      continue;
    }
  }

}
