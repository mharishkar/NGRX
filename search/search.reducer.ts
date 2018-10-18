import * as SearchActions  from './search.action';
import { SearchParam } from '../../model/search.model';

export interface AppState {
	  searchParam :  SearchParam;
}


const initialState: AppState = {
  searchParam : {
     room           : [],
     check_in_date  : '',
     check_out_date : '',
     adult          : '',
     children       : '',
     destination    : '',
     propertyUuid   : ''
  }
}


export function counterReducer(state = initialState, action: SearchActions.SearchActions) {
  switch (action.type) {
    case SearchActions.GET_SEARCH_PARAM:
      return { ...state }

    case SearchActions.UPDATE_SEARCH_PARAM:
      return { ...state, searchParam: action.payload }

    default:
      return state;
  }
}