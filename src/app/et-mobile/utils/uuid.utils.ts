export class UuidUtils {
  public static makeID(): string {
    return Math.random().toString(16).substr(2, 8);
  }
}
