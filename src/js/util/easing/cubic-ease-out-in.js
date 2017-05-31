import Easing from './easing';

export default class CubicEaseOutIn extends Easing {
  update(t, b, c, d) {
    if (t < d / 2) {
      return c / 2 * ((t = t * 2 / d - 1) * t * t + 1) + b;
    } else {
      return c / 2 * (t = (t * 2 - d) / d) * t * t + b + c / 2;
    }
  }
}
