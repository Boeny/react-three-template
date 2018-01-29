import * as React from 'react';
import * as THREE from 'three';
import { getColor } from './test/actions';


interface Props {
    rotation: THREE.Euler;
}

export function Mesh(props: Props) {
    return (
        <mesh rotation={props.rotation}>
            <sphereGeometry
                radius={1}
                widthSegments={32}
                heightSegments={32}
            />
            <meshPhongMaterial
                color={getColor()}
                specular={0x999999}
                shading={THREE.FlatShading}
                vertexColors={THREE.VertexColors}
                castShadow={true}
                receiveShadow={true}
            />
        </mesh>
    );
}
