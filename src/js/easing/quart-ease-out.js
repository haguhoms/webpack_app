import Easing from './easing';

export default class QuartEaseOut extends Easing {
  update(t, b, c, d) {
    return -c * ((t = t / d - 1) * t * t * t - 1) + b;
  }
}
