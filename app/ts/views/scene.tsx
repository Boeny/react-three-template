import * as React from 'react';
import { Layout } from '~/layout';
import { Ship } from './ship';
import { Vector3 } from 'three';


let rotate: () => void = () => null;
let rotating = false;
const vPos = new Vector3(1, 1, 1);
const vNeg = new Vector3(-1, -1, -1);
const hemispherePos = new Vector3(0.5, 1, 0.75);

interface Props {
    onUpdate?: () => void;
}

export function Scene(props: Props) {
    const { onUpdate } = props;
    return (
        <Layout
            onUpdate={() => {
                if (rotating) {
                    rotate();
                }
                onUpdate && onUpdate();
            }}
            onMouseDown={() => {
                rotating = true;
            }}
            onMouseUp={() => {
                rotating = false;
            }}
        >
            <hemisphereLight
                skyColor={0xeeeeff}
                groundColor={0x777788}
                intensity={0.75}
                position={hemispherePos}
            />
            <directionalLight color={0xffffff} position={vPos} />
            <directionalLight color={0x002288} position={vNeg} />
            <ambientLight color={0x222222} />
            <Ship onMount={r => rotate = r}/>
        </Layout>
    );
}
