import * as React from 'react';
import { observer } from 'mobx-react';
import { Euler, FlatShading, VertexColors } from 'three';
import { getColor } from './test/actions';


interface Props {
    rotation: Euler;
}

export const Mesh = observer((props: Props) => {
    console.log('render');
    return (
        <mesh rotation={props.rotation}>
            <boxGeometry
                width={1}
                height={1}
                depth={1}
            />
            <meshPhongMaterial
                color={getColor()}
                specular={0x999999}
                shading={FlatShading}
                vertexColors={VertexColors}
                castShadow={true}
                receiveShadow={true}
            />
        </mesh>
    );
});
