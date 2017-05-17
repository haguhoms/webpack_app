import Easing from './easing';

export default class ExpoEaseOutIn extends Easing {
  update(t, b, c, d) {
    if (t < d / 2) {
      if (t * 2 === d) {
        return b + c / 2;
      } else {
        return c / 2 * (1 - Math.pow(2, -10 * t * 2 / d)) + b;
      }
    } else if (t * 2 - d === 0) {
      return b + c / 2;
    } else {
      return c / 2 * Math.pow(2, 10 * ((t * 2 - d) / d - 1)) + b + c / 2;
    }
  }
}
