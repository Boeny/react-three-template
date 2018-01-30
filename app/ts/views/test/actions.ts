import { action } from 'mobx';
import { IStore, Color } from './types';
import { Store } from './store';
import { convertToColor } from './utils';


const getSetColorAction = (store: IStore) => (color: string) => {
    if (store.state.mesh.background !== color) {
        store.state.mesh.background = color;
    }
};
export const setColor = action(getSetColorAction(Store));


const getColorAction = (store: IStore) => (): Color => {
    return convertToColor(store.state.mesh.background);
};
export const getColor = getColorAction(Store);
