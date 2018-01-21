import * as React from 'react';


export function Loading() {
    return (
        <div
            style={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                marginTop: -11,
                marginLeft: -83,
                color: 'green'
            }}
        >Loading, please, wait...</div>
    );
}
