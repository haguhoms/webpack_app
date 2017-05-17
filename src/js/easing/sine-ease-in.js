import Easing from './easing';

export default class SineEaseIn extends Easing {
  constructor() {
    super();
    this._pi = Math.PI * .5;
  }

  update(t, b, c, d) {
    return -c * Math.cos(t / d * this._pi) + c + b;
  }
}
