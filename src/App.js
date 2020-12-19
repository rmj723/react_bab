import React, { Component } from 'react';
import { Engine, Scene, Model } from 'react-babylonjs'
import { SceneLoader, Vector3 } from '@babylonjs/core';
import Cage from './components/Cage';
import Server from './components/Server';
import './App.css';

class App extends Component {
    componentDidMount() {
        init();
    }

    render() {
        return (
            <div>
                <canvas id='myCanvas'></canvas>
                {/* <Engine canvasId="myCanvas">
                    <Scene>
                        <arcRotateCamera name="arc" 
                            target={new Vector3(0, 1, 0)}
                            minZ={0.001}
                            alpha={-Math.PI / 2} beta={1.4}
                            radius={8} wheelPrecision={50}
                        />
                        <hemisphericLight name="light1" intensity={0.7} direction={Vector3.Up()} />
                        <ground name="ground1" width={15} height={15} subdivisions={2}  />
                        <Model
                            rootUrl={'./models/'} sceneFilename="1.glb"
                            position={new Vector3(-2.5, 0.2, 0)}
                            rotation={new Vector3(0, Math.PI, 0)}
                            scaling={new Vector3(0.2, 0.2, 0.2)}
                        />
                        <Model
                            rootUrl={'./models/'} sceneFilename="2.glb"
                            position={new Vector3(2, 1, 2)}
                            rotation={new Vector3(0, 0, 0)} 
                            scaling={new Vector3(0.4, 0.4, 0.2)}
                        />
                        <Model
                            rootUrl={'./models/'} sceneFilename="db.glb"
                            position={new Vector3(2, 1, 1)}
                            rotation={new Vector3(0, 0, 0)}
                            scaling={new Vector3(1, 1, 1)}
                        />
                    </Scene>
                </Engine> */}
            </div>
        );
    }
}

export default App;


function init() {
    var _server = new Server();

    // var _cage = new Cage();

    setTimeout(() => {
        // _cage.setOpacity(0.5);
        // _cage.setSize(1.4, 1, 1);
    }, 1000);
}