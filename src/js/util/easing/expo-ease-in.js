import Easing from './easing';

export default class ExpoEaseIn extends Easing {
  update(t, b, c, d) {
    if (t === 0) {
      return b;
    } else {
      return c * Math.pow(2, 10 * (t / d - 1)) + b;
    }
  }
}
