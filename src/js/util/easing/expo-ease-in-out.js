import Easing from './easing';

export default class ExpoEaseInOut extends Easing {
  update(t, b, c, d) {
    if (t === 0) {
      return b;
    } else if (t === d) {
      return b + c;
    } else if ((t /= d / 2) < 1) {
      return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
    } else {
      return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
    }
  }
}
