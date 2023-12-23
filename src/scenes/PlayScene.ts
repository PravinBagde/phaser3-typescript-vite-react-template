import Phaser from "phaser";
import { Keys_Scene, Keys_Texture } from "@/constants";

export default class PlayScene extends Phaser.Scene {
  constructor() {
    super(Keys_Scene.PLAY);
  }

  create() {
    const { width, height } = this.scale;

    const bg = this.add.tileSprite(0, 0, width, height, Keys_Texture.RepeatingBackground);
    bg.setOrigin(0, 0);

    this.add
      .text(width / 2, height / 2, "hello\nphaser 3\ntemplate", {
        font: "100px monospace",
        color: "white",
      })
      .setOrigin(0.5, 0.5)
      .setShadow(5, 5, "#5588EE", 0, true, true);
  }

  update() {}
}
