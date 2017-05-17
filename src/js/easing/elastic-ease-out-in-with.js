import Easing from './easing';

export default class ElasticEaseOutInWith extends Easing {
  constructor(amplitude, period) {
    super();
    this.a = amplitude;
    this.p = period;
    this.pi = Math.PI;
  }

  update(t, b, c, d) {
    let s;
    c /= 2;
    if (t < d / 2) {
      if ((t *= 2) === 0) return b;
      if ((t /= d) === 1) return b + c;
      if (!this.p) this.p = d * 0.3;
      if (!this.a || this.a < Math.abs(c)) {
        this.a = c;
        s = this.p / 4;
      } else {
        s = this.p / (2 * this.pi) * Math.asin(c / this.a);
      }
      return this.a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * this.pi) / this.p) + c + b;
    } else {
      if ((t = t * 2 - d) === 0) {
        return b + c;
      } else if ((t /= d) === 1) {
        return (b + c) + c;
      }
      if (!this.p) this.p = d * 0.3;
      if (!this.a || this.a < Math.abs(c)) {
        this.a = c;
        s = this.p / 4;
      } else {
        s = this.p / (2 * this.pi) * Math.asin(c / this.a);
      }
      return -(this.a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * this.pi) / this.p)) + (b + c);
    }
  }
}
