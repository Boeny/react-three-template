import * as React from 'react';
import { Color } from './types';
import { Store } from './store';
import { setColor } from './actions';
import { convertToColor } from './utils';
import { MountAndInit } from '~/components/mount-and-init';


type CheckColorAction = (color: Color) => void;

interface Props {
    onMount: (check: () => void) => void;
}

export class Test extends React.Component<Props> {

    element: HTMLDivElement | null = null;

    getBkColor = () => {
        console.log(this.element && this.element.style.backgroundColor);
        return convertToColor(this.element && this.element.style.backgroundColor || '');
    }

    getAction = (action: CheckColorAction) => {
        return () => action(this.getBkColor());
    }

    render() {
        const { onMount } = this.props;
        return (
            <MountAndInit
                component={(
                    <div
                        ref={el => this.element = el}
                        style={Store.state.mesh}
                    >mesh</div>
                )}
                onMount={() => onMount(this.getAction(setColor))}
            />
        );
    }
}
