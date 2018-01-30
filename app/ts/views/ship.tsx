import * as React from 'react';
import { Euler } from 'three';
import { Mesh } from './mesh';


interface Props {
    onMount: (rotate: () => void) => void;
}

interface State {
    rotation: Euler;
}

export class Ship extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = { rotation: new Euler() };
    }

    componentDidMount() {
        this.props.onMount(this.left.bind(this));
    }

    update(x: number, y: number, z: number) {
        this.setState({ rotation: new Euler(x, y, z) });
    }

    left() {
        const { x, y, z } = this.state.rotation;
        this.update(x, y + 0.1, z);
    }

    right() {
        const { x, y, z } = this.state.rotation;
        this.update(x, y - 0.1, z);
    }

    render() {
        return (
            <Mesh rotation={this.state.rotation} />
        );
    }
}
