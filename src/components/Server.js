import {
    Engine, Scene, SceneLoader, ArcRotateCamera,
    Vector3, Color3, DirectionalLight, HemisphericLight, CubeTexture
} from '@babylonjs/core';
class Server {
    constructor() {
        this.canvas = document.getElementById('myCanvas');
        this.engine = new Engine(this.canvas, true, { preserveDrawingsBuffer: true, stencil: true });
        this.scene = new Scene(this.engine);
        this.camera = new ArcRotateCamera("camera1", 1.0, 1.4, 12, new Vector3(0, 1, 0), this.scene);
        this.init();
        this.loadModel();
        this.animate();
    }

    init() {
        this.camera.alpha = Math.PI / 2;
        this.camera.beta = 1.4;
        this.camera.inputs.attached.keyboard.angularSpeed = 0;
        this.camera.attachControl(this.canvas, true);
        this.camera.upperRadiusLimit = 20;
        this.camera.wheelPrecision = 50;
        this.scene.clearColor = new Color3(0.5, 0.8, 0.5);
        var light = new HemisphericLight("light1", new Vector3(0, 1, 0), this.scene);
        light.intensity = 1;
        light.specular = Color3.Black();
        var hdrTexture = CubeTexture.CreateFromPrefilteredData("./models/environment.dds", this.scene);
        hdrTexture.gammaSpace = false;
        this.scene.environmentTexture = hdrTexture;
    }

    loadModel() {
        Promise.all([
            SceneLoader.ImportMeshAsync(null, "./models/", "1.glb", this.scene).then((result) => {
                let env = result.meshes[0];
            }),
        ]).then(() => {
            var matNames = ['body', 'panel', 'btn', 'logo', 'black'];
            matNames.forEach(m => {
                var mat = this.scene.getMaterialByName(m);
                mat._metallic = 0.9;
                mat._roughness = 0.2;
            });
        });
    }

    animate() {
        this.engine.runRenderLoop(() => {
            this.scene.render();
        });
        window.addEventListener("resize", () => {
            this.engine.resize();
        });
    }
}

export default Server;