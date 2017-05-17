import Easing from './easing';

export default class BackEaseInOutWith extends Easing {
  constructor(s) {
    super();
    this.s = s;
  }

  update(t, b, c, d) {
    let s;
    s = this.s;
    if ((t /= d / 2) < 1) {
      return c / 2 * (t * t * (((s * 1.525) + 1) * t - s * 1.525)) + b;
    } else {
      return c / 2 * ((t -= 2) * t * (((s * 1.525) + 1) * t + s * 1.525) + 2) + b;
    }
  }
}
