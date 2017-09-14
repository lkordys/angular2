import {Pipe, PipeTransform} from "@angular/core";
import {Localization} from "./Localization";

@Pipe({
  name: 'myfilter',
  pure: false
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], filter: Localization): any {
    if (!items || !filter) {
      return items;
    }
    return items.filter(item => item.city.indexOf(filter) !== -1);
  }
}
