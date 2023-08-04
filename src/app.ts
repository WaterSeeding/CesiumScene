import "./app.css";
import * as dat from "dat.gui";
import { viewer } from "./main";
import Scene from "./Scene/index";
import SkyBox from "./SkyBox/index";
import Camera from "./Camera/index";

const gui = new dat.GUI({
  name: "Cesium GUI",
  width: 450,
  autoPlace: true,
  closed: false,
});
gui.domElement.id = "gui";
gui.show();

const scene = new Scene(viewer, gui);
const skyBox = new SkyBox(
  viewer,
  gui,
  {
    show: true,
    sourcesType: "default",
    sourcesList: [
      {
        name: "daytime",
        sources: {
          positiveX: "./static/skybox/daytime/px.jpg",
          positiveY: "./static/skybox/daytime/ny.jpg",
          positiveZ: "./static/skybox/daytime/pz.jpg",
          negativeX: "./static/skybox/daytime/nx.jpg",
          negativeY: "./static/skybox/daytime/py.jpg",
          negativeZ: "./static/skybox/daytime/nz.jpg",
        },
      },
      {
        name: "night",
        sources: {
          positiveX: "./static/skybox/night/px.jpg",
          negativeX: "./static/skybox/night/nx.jpg",
          positiveY: "./static/skybox/night/ny.jpg",
          negativeY: "./static/skybox/night/py.jpg",
          positiveZ: "./static/skybox/night/pz.jpg",
          negativeZ: "./static/skybox/night/nz.jpg",
        },
      },
      {
        name: "test",
        sources: {
          positiveX: "./static/skybox/test/px.jpg",
          negativeX: "./static/skybox/test/nx.jpg",
          positiveY: "./static/skybox/test/ny.jpg",
          negativeY: "./static/skybox/test/py.jpg",
          positiveZ: "./static/skybox/test/pz.jpg",
          negativeZ: "./static/skybox/test/nz.jpg",
        },
      },
    ],
  },
  false
);
const camera = new Camera(
  viewer,
  gui,
  {
    position: {
      height: 27067269,
      longitude: 96.337443,
      latitude: 31.767829,
    },
    headingPitchRoll: {
      heading: 0,
      pitch: -90,
      roll: 0,
    },
  },
  true
);
