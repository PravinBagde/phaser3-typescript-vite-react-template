import Phaser from "phaser";
import React, { useEffect } from "react";

import PreloadScene from "@/scenes/PreloadScene";
import PlayScene from "@/scenes/PlayScene";

export const GameContainer: React.FC = () => {
  useEffect(() => {
    const gameConfig: Phaser.Types.Core.GameConfig = {
      title: "Practice",
      type: Phaser.AUTO,
      parent: "game-container",
      backgroundColor: "#063711",
      scale: {
        mode: Phaser.Scale.RESIZE,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: window.innerWidth,
        height: window.innerHeight,
      },
      physics: {
        default: "arcade",
        arcade: {
          debug: true,
        },
      },
      render: {
        antialiasGL: false,
        pixelArt: true,
      },
      callbacks: {
        postBoot: () => {
          // window.sizeChanged();
        },
      },
      canvasStyle: `display: block; width: 100%; height: 100%;`,
      autoFocus: true,
      audio: {
        disableWebAudio: false,
      },

      scene: [PreloadScene, PlayScene],
    };

    const game = new Phaser.Game(gameConfig);

    window.addEventListener("resize", () => {
      if (game.isBooted) {
        setTimeout(() => {
          game.scale.resize(window.innerWidth, window.innerHeight);
          game.canvas.setAttribute(
            "style",
            `display: block; width: ${window.innerWidth}px; height: ${window.innerHeight}px;`
          );
        }, 100);
      }
    });

    return () => {
      game.destroy(true);
    };
  }, []);

  return <div id="game-container"></div>;
};
