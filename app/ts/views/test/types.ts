

export { Color, Vector3 } from 'three';

export interface State {
    mesh: {
        background: string;
    };
}

export interface IStore {
    state: State;
}
