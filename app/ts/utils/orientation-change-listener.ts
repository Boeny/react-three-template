

export type Orientation = 'portrait' | 'landscape';

export let prevOrientation = window.orientation;

export interface Listener {
    (orientation: Orientation): any;
}

const listeners: Listener[] = [];

export interface Checker {
    (): void;
}

export interface Unsubscriber {
    (): void;
}

const checkOrientation: Checker = () => {
    const currentOrientation = window.orientation;
    if (currentOrientation !== prevOrientation) {
        prevOrientation = currentOrientation;
        const orientation = prevOrientation === 90 || prevOrientation === -90 ? 'landscape' : 'portrait';
        notifyListeners(listeners, orientation);
    }
};

function startListening(handler: Checker) {
    window.addEventListener('resize', handler, false);
    window.addEventListener('orientationchange', handler, false);
}

function stopListening(handler: Checker) {
    window.removeEventListener('resize', handler);
    window.removeEventListener('orientationchange', handler);
}

function notifyListeners(list: Listener[], orientation: Orientation) {
    list.forEach(listener => listener(orientation));
}

export function subscribe(handler: Listener): Unsubscriber {
    const hasListeners = listeners.length > 0;
    listeners.push(handler);
    if (!hasListeners) {
        startListening(checkOrientation);
    }
    return () => {
        const index = listeners.indexOf(handler);
        listeners.splice(index, 1);
        if (listeners.length === 0) {
            stopListening(checkOrientation);
        }
    };
}
