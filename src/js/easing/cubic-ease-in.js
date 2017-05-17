import Easing from './easing';

export default class CubicEaseIn extends Easing {
  update(t, b, c, d) {
    return c * (t /= d) * t * t + b;
  }
}
