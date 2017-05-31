import Easing from './easing';

export default class ElasticEaseInOutWith extends Easing {
  constructor(amplitude, period) {
    super();
    this.a = amplitude;
    this.p = period;
    this.pi = Math.PI;
  }

  update(t, b, c, d) {
    let s;
    if (t === 0) {
      return b;
    } else if ((t /= d / 2) === 2) {
      return b + c;
    }
    if (!this.p) this.p = d * (0.3 * 1.5);
    if (!this.a || this.a < Math.abs(c)) {
      this.a = c;
      s = this.p / 4;
    } else {
      s = this.p / (2 * this.pi) * Math.asin(c / this.a);
    }
    if (t < 1) {
      return -0.5 * (this.a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * this.pi) / this.p)) + b;
    } else {
      return this.a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * this.pi) / this.p) * 0.5 + c + b;
    }
  }
}
