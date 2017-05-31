class Render {
  constructor() {
    this.updaters = [];
    this.rid      = -1;
    this.isStart  = false;
  }

  removeListener(updater) {
    this.updaters.splice(updater);
    if (this.updaters.length !== 0) return;
    this.stop();
  }

  addListener(updater) {
    this.updaters.push(updater);
    if (this.isStart) return;
    this.start();
  }

  start() {
    this.isStart = true;
    this.tick();
  }

  stop() {
    this.isStart = false;
    cancelAnimationFrame(this.rid);
  }

  reset() {
    this.stop();
    this.start();
  }

  tick() {
    const currentTime = (new Date).getTime();
    this.updaters.forEach((updater) => {
      updater.update(currentTime);
    });
    this.rid = requestAnimationFrame(this.tick.bind(this));
  }
}

const requestAnimationFrame =
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        ((callback, element) => window.setTimeout(callback, 1000 / 60))
    , cancelAnimationFrame =
        window.cancelAnimationFrame ||
        window.webkitCancelRequestAnimationFrame ||
        window.mozCancelRequestAnimationFrame ||
        window.oCancelRequestAnimationFrame ||
        window.msCancelRequestAnimationFrame ||
        window.clearTimeout;

export default new Render();
