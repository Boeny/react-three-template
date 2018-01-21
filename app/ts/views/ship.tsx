import * as React from 'react';
import * as THREE from 'three';
import { Mesh } from './mesh';


interface Props {
    onMount: (rotate: () => void) => void;
}

interface State {
    rotation: THREE.Euler;
}

export class Ship extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = { rotation: new THREE.Euler() };
    }

    componentDidMount() {
        this.props.onMount(this.left.bind(this));
    }

    update(x: number, y: number, z: number) {
        console.log('ship update');
        this.setState({ rotation: new THREE.Euler(x, y, z) });
    }

    left() {
        const { x, y, z } = this.state.rotation;
        this.update(x + 0.1, y, z);
    }

    right() {
        const { x, y, z } = this.state.rotation;
        this.update(x - 0.1, y, z);
    }

    render() {
        return (
            <Mesh rotation={this.state.rotation} />
        );
    }
}
