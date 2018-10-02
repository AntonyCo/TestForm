import {FormControl} from "@angular/forms";
import _ from 'lodash';
export const NARTAWAK_PREFIX:string = 'nk'
export const PREFIX_SEPARATOR:string = '-'
/**
 * Le valeur du champ commennce-t-elle par nk-
 * @param {FormControl} control
 * @returns {{isPrefixNartawak: boolean}}
 */
export function isPrefixNartawakValidator (control: FormControl) {
  const prefix = _.split(control.value, PREFIX_SEPARATOR, 1);
  return _.isArray(prefix) && NARTAWAK_PREFIX === prefix[0] ? null : { isPrefixNartawak: true };
};