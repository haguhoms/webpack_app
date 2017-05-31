import Easing from './easing';

export default class BackEaseInWith extends Easing {
  constructor(s) {
    super();
    this.s = s;
  }

  update(t, b, c, d) {
    let s;
    s = this.s;
    return c * (t /= d) * t * ((s + 1) * t - s) + b;
  }
}
