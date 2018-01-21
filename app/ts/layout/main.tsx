import * as React from 'react';
import * as React3 from 'react3';
import * as THREE from 'three';


const cameraPosition = new THREE.Vector3(0, 0, 5);

interface Props {
    onUpdate?: () => void;
    onKeyDown?: () => void;
    onKeyUp?: () => void;
    onMouseDown?: () => void;
    onMouseUp?: () => void;
    onClick?: () => void;
    children?: any;
}

export function Layout(props: Props) {
    const { children, onUpdate, onKeyDown, onKeyUp, onMouseDown, onMouseUp, onClick } = props;
    const width = window.innerWidth;
    const height = window.innerHeight;
    return (
        <React3
            mainCamera={'camera'} // this points to the perspectiveCamera which has the name set to "camera" below
            width={width}
            height={height}
            onAnimate={onUpdate}
            onKeyDown={onKeyDown}
            onKeyUp={onKeyUp}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            onClick={onClick}
        >
            <scene>
                <perspectiveCamera
                    name={'camera'}
                    fov={75}
                    aspect={width / height}
                    near={0.1}
                    far={1000}
                    position={cameraPosition}
                />
                {children}
            </scene>
        </React3>
    );
}
