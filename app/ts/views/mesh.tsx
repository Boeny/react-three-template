import * as React from 'react';
import * as THREE from 'three';


interface Props {
    rotation: THREE.Euler;
}

export function Mesh(props: Props) {
    return (
        <mesh rotation={props.rotation}>
            <boxGeometry
                width={1}
                height={1}
                depth={1}
            />
            <meshBasicMaterial color={0x00ff00} />
        </mesh>
    );
}
