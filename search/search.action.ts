import { SearchParam } from './../../model/search.model';
import { Action } from '@ngrx/store';

export const GET_SEARCH_PARAM    = 'GET_SEARCH_PARAM';
export const UPDATE_SEARCH_PARAM = 'UPDATE_SEARCH_PARAM';


export class GetProductFilters implements Action {
    readonly type = GET_SEARCH_PARAM;
}

export class UpdateProductFilters implements Action {
    readonly type = UPDATE_SEARCH_PARAM;
    constructor(public payload: SearchParam) {
    }
}

export type SearchActions =
    | GetProductFilters
    | UpdateProductFilters;
