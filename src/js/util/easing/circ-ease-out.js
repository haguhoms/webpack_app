import Easing from './easing';

export default class CircEaseOut extends Easing {
  update(t, b, c, d) {
    return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
  }
}
