import Easing from './easing';

export default class ExpoEaseOut extends Easing {
  update(t, b, c, d) {
    if (t === d) {
      return b + c;
    } else {
      return c * (-Math.pow(2, -10 * t / d) + 1) + b;
    }
  }
}
