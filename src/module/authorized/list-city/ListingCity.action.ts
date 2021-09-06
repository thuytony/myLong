import { City, User } from '@model';
import { IAction } from '@redux';
import { ParamsGetCities } from '@networking';

export class ListingCityAction {
  public static readonly GET_LIST_CITIES: string = 'ListingCityAction.GET_LIST_CITIES';
  public static readonly GET_LIST_CITIES_SUCCESS: string = 'ListingCityAction.GET_LIST_CITIES_SUCCESS';
  public static readonly GET_LIST_CITIES_ERROR: string = 'ListingCityAction.GET_LIST_CITIES_ERROR';

  public static getCities = (payload: ParamsGetCities): IAction<ParamsGetCities, City[]> => {
    return {
      payload,
      type: ListingCityAction.GET_LIST_CITIES
    }
  }
}
