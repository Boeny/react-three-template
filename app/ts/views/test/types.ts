import { Color } from 'three';


export { Color, Vector3 } from 'three';

export interface State {
    mesh: {
        background: Color;
    };
}

export interface IStore {
    state: State;
}
