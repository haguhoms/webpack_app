import Easing from './easing';

export default class SineEaseOutIn extends Easing {
  constructor() {
    super();
    this._pi = Math.PI * .5;
  }

  update(t, b, c, d) {
    if (t < (d / 2)) {
      return (c / 2) * Math.sin((t * 2) / d * this._pi) + b;
    } else {
      return -(c / 2) * Math.cos((t * 2 - d) / d * this._pi) + (c / 2) + (b + (c / 2));
    }
  }
}
