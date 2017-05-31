import Easing from './easing';

export default class SineEaseOut extends Easing {
  constructor() {
    super();
    this._pi = Math.PI * .5;
  }

  update(t, b, c, d) {
    return c * Math.sin(t / d * this._pi) + b;
  }
}
