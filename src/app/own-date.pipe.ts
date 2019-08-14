import { Pipe, PipeTransform } from "@angular/core";
import { getSyntheticPropertyName } from "@angular/compiler/src/render3/util";

@Pipe({
  name: "ownDate"
})
export class OwnDatePipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    return "év: " + value.getFullYear() + " hónap: " + (value.getMonth() + 1);
  }
}
