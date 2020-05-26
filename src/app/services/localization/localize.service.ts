import { Injectable } from "@angular/core";

import "rxjs/add/observable/of";

import { TranslateService } from "@ngx-translate/core";
@Injectable()
export class LocalizeService {
  constructor(private translate: TranslateService) {}

  /**
   * Gets the instant translated value of a key (or an array of keys).
   * This method is synchronous and the default file loader is asynchronous.
   * You are responsible for knowing when your translations have been loaded
   * and it is safe to use this method. If you are not sure then you should use the get method instead.
   * @param key
   * @param interpolate
   */
  public instant(key: string | string[], interpolate?: any): string {
    return this.translate.instant(key, interpolate);
  }
}
