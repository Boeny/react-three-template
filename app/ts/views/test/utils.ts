import { State, Color } from './types';


export function getDefaultState(): State {
    return {
        mesh: { background: new Color(0, 255, 0) }
    };
}


export function convertToColor(color: string): Color {
    return new Color(0, color ? 255 : 0, 0);
}
