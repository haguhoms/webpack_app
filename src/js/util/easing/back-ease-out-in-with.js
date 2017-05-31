import Easing from './easing';

export default class BackEaseOutInWith extends Easing {
  constructor(s) {
    super();
    this.s = s;
  }

  update(t, b, c, d) {
    let s;
    s = this.s;
    if (t < d / 2) {
      return (c / 2) * ((t = (t * 2) / d - 1) * t * ((s + 1) * t + s) + 1) + b;
    } else {
      return (c / 2) * (t = (t * 2 - d) / d) * t * ((s + 1) * t - s) + (b + c / 2);
    }
  }
}
