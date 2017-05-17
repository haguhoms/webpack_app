import Easing from './easing';

export default class BackEaseOutWith extends Easing {
  constructor(s) {
    super();
    this.s = s;
  }

  update(t, b, c, d) {
    let s;
    s = this.s;
    return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
  }
}
