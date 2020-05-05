import background from "./background.js";
import playfield from "./playfield.js";
import block from "./block.js";
import leftPanel from "./leftPanel.js";
import rightPanel from "./rightPanel.js";

const Interface = {
  background: {
    render(data) {
      new background(data);
    }
  },

  playfield: {
    static: {
      render(data) {
        new playfield(data).static();
      }
    },
    state: {
      render(data) {
        new playfield(data).state();
      }
    }
  },

  block: {
    render(data) {
      new block(data);
    }
  },

  leftPanel: {
    static: {
      render(data) {
        new leftPanel(data).static();
      }
    },
    state: {
      render(data) {
        new leftPanel(data).state();
      }
    }
  },

  rightPanel: {
    static: {
      render(data) {
        new rightPanel(data).static();
      }
    },
    state: {
      render(data) {
        new rightPanel(data).state();
      }
    }
  }
}

export default Interface;