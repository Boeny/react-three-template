import * as React from 'react';
import * as THREE from 'three';
import { Layout } from '~/layout';
import { Mesh } from './mesh';


export function App() {
    const rotation = new THREE.Euler();
    return (
        <Layout
            onUpdate={() => {
                rotation.x += 0.1;
                rotation.y += 0.1;
            }}
        >
            <Mesh rotation={rotation} />
        </Layout>
    );
}
