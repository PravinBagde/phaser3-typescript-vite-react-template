import Phaser from "phaser";
import { Keys_Scene, Keys_Texture } from "@/constants";

export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super(Keys_Scene.PRELOAD);
  }

  preload() {
    this.load.image(Keys_Texture.RepeatingBackground, "/escheresque_dark.png");
  }

  create() {
    this.scene.start(Keys_Scene.PLAY);
  }
}
