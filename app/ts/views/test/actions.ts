import { IStore, Color } from './types';
import { Store } from './store';


const getSetColorAction = (store: IStore) => (color: Color) => {
    store.state.mesh.background = color;
};
export const setColor = getSetColorAction(Store);


const getColorAction = (store: IStore) => (): Color => {
    return store.state.mesh.background;
};
export const getColor = getColorAction(Store);
