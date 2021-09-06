import { combineReducers } from 'redux';
import {
  LoginReducer, HomeReducer, ListingCityReducer, ListingNurseReducer
} from '@module';
import { CommonReducer } from './common/Common.reducer';

const ReducerFactory = combineReducers({
  loginReducer: LoginReducer.reducer,
  homeReducer: HomeReducer.reducer,
  nursesReducer: ListingNurseReducer.reducer,
  citiesReducer: ListingCityReducer.reducer,
  commonReducer: CommonReducer.reducer,
})

export default ReducerFactory;

export type RootState = ReturnType<typeof ReducerFactory>;