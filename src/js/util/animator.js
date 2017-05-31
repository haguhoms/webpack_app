import render from './render';

export default class Animator {
  constructor() {
    this.startTime = 0;
    this.duration  = null;
  }

  initialize() {}

  setDuration(duration) {
    this.duration = duration;
  }

  start() {
    if (this.startTime !== 0) return;

    this.startTime = (new Date).getTime();

    render.addListener(this);
  }

  stop() {
    render.removeListener(this);
  }

  reset() {
    this.stop();
    this.start();
  }

  complete() {}

  update(currentTime) {
    if (this.startTime === 0) return;

    const diff = currentTime - this.startTime;

    this.animate(currentTime, diff);

    this.checkContinue(diff);
  }

  animate(currentTime, diff) {}

  checkContinue(diff) {
    if (this.duration === null || diff < this.duration) return;

    this.complete();
    this.stop();
  }
}
