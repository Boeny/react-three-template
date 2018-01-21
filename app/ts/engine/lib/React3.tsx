import * as React from 'react';
import * as THREE from 'three';
import * as React3Renderer from './React3Renderer';

interface Props {
    width: number;
    height: number;
    context?: string;
    children?: any;
    canvasStyle?: any;
    customRenderer?: () => void;
    gammaInput?: boolean;
    gammaOutput?: boolean;
    sortObjects?: boolean;
    mainCamera?: string;
    onAnimate?: () => void;
    clearColor?: THREE.Color | number | string;
    shadowMapEnabled?: boolean;
    shadowMapType?: THREE.BasicShadowMap | THREE.PCFShadowMap | THREE.PCFSoftShadowMap;
    shadowMapCullFace?: THREE.CullFaceNone | THREE.CullFaceBack | THREE.CullFaceFront | THREE.CullFaceFrontBack;
    shadowMapDebug?: boolean;
    pixelRatio?: number;
    antialias?: boolean | number;
    canvasRef?: () => void;
}

interface State {
  canvasKey: number;
}

export class React3 extends React.Component<Props, State> {

  static findTHREEObject = React3Renderer.findTHREEObject;
  static eventDispatcher = React3Renderer.eventDispatcher;

  constructor(props: Props, context = '3d') {
    super(props, context);
    this.state = { canvasKey: 0 };
  }

  componentDidMount() {
    this.react3Renderer = new React3Renderer();
    this._render();
  }

  componentWillReceiveProps(newProps) {
    const lastProps = this.props;

    if (lastProps.canvasRef !== newProps.canvasRef) {
      if (lastProps.canvasRef) {
        lastProps.canvasRef(null);
      }

      if (newProps.canvasRef) {
        newProps.canvasRef(this._canvas);
      }
    }
  }

  componentDidUpdate() {
    this._render();
  }

  componentWillUnmount() {
    this.react3Renderer.dispose();
    delete this.react3Renderer;
  }

  onRecreateCanvas = () => {
    this.setState({ canvasKey: this.state.canvasKey + 1 });
  }

  _render() {
    const canvas = this._canvas;

    const propsToClone = { ...this.props };

    delete propsToClone.canvasStyle;
    delete propsToClone.canvasRef;

    this.react3Renderer.render(
      <react3
        {...propsToClone}
        onRecreateCanvas={this.onRecreateCanvas}
      >
        {this.props.children}
      </react3>, canvas);
  }

  canvasRef = (c: HTMLCanvasElement) => {
    this._canvas = c;
    if (this.props.canvasRef) {
      this.props.canvasRef(c);
    }
  }

  render() {
    const { canvasKey } = this.state;
    const { width, height, canvasStyle } = this.props;
    return (
      <canvas
        ref={this.canvasRef}
        key={canvasKey}
        width={width}
        height={height}
        style={{
          ...canvasStyle,
          width,
          height
        }}
      />
    );
  }
}
