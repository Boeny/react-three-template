import * as React from 'react';
import * as THREE from 'three';
import { Layout } from '~/layout';
import { Mesh } from './mesh';


export function App() {
    const rotation = new THREE.Euler();
    console.log('App render');
    return (
        <Layout
            onUpdate={() => {
                rotation.z += 0.1;
                console.log(rotation.z);
            }}
        >
            <Mesh rotation={rotation} />
        </Layout>
    );
}
