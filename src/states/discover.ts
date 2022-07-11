import {atom} from 'recoil';
import {MapPlace} from 'entity/place';

export const placeSelected = atom<MapPlace | null>({
  key: 'app/placeSelected',
  default: null,
});
