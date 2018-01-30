import { State, Color } from './types';


export function getDefaultState(): State {
    return {
        mesh: { background: '#00ff00' }
    };
}


export function convertToColor(color: string): Color {
    return new Color(color);
}
