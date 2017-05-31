import Easing from './easing';

export default class SineEaseInOut extends Easing {
  constructor() {
    super();
    this._pi = Math.PI * .5;
  }

  update(t, b, c, d) {
    return -(c / 2) * (Math.cos(this._pi * t / d) - 1) + b;
  }
}
