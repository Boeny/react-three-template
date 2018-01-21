import * as React from 'react';
import { Layout } from '~/layout';
import { Ship } from './ship';


let rotate: () => void = () => null;
let rotating = false;

export function Scene() {
    return (
        <Layout
            onUpdate={() => {
                if (rotating) {
                    rotate();
                }
            }}
            onMouseDown={() => {
                rotating = true;
            }}
            onMouseUp={() => {
                rotating = false;
            }}
        >
            <Ship onMount={r => rotate = r}/>
        </Layout>
    );
}
