import Easing from './easing';

export default class CubicEaseOut extends Easing {
  update(t, b, c, d) {
    return c * ((t = t / d - 1) * t * t + 1) + b;
  }
}
