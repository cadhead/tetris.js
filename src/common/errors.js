const errors = {
  dev: {
    View: {
      "Init: unknown element": "Не удалось инициализировать представление: не указан корневой элемент!"
    }
  }
}

export default class TetrisError {
  constructor(params) {
    this.development = params.development || window.development || false;
    this.errors = errors;

    if (this.development) {
      this.system(params.error);
    }
  }

  system(errorName = "") {
    if (!errorName) return;
    let error = "";

    for (let key in this.errors.dev) {
      for (let identifier in this.errors.dev[key]) {
        if (identifier === errorName) {
          error 
            = `${key} Error: ${this.errors.dev[key][identifier]}`;
        }
      }
    }

    if (error) return console.error(error);
    return;
  }
}