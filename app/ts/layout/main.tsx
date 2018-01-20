import * as React from 'react';


interface Props {
    children?: JSX.Element | JSX.Element[];
}

export function Layout(props: Props) {
    return (
        <div>
            {props.children}
        </div>
    );
}
