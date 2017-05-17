import Easing from './easing';

export default class CircEaseIn extends Easing {
  update(t, b, c, d) {
    return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
  }
}
