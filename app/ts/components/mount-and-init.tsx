import * as React from 'react';


interface Props {
    component: JSX.Element;
    onMount: () => void;
}

interface State {
    ready: boolean;
}

export class MountAndInit extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = { ready: false };
    }

    componentDidMount() {
        this.props.onMount();
        this.setState(() => ({ ready: true }));
    }

    render() {
        return this.state.ready ? this.props.component : <noscript />;
    }
}
