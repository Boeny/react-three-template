import * as React from 'react';
import { Store } from './store';
import { setColor } from './actions';
import { MountAndInit } from '~/components/mount-and-init';


interface Props {
    onMount: (check: () => void) => void;
}

export class Test extends React.Component<Props> {

    element: HTMLDivElement | null = null;

    getBkColor = (): string => {
        return this.element && this.element.style.backgroundColor || 'white';
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
                onMount={() => onMount(
                    () => setColor(this.getBkColor())
                )}
            />
        );
    }
}
