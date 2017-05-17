import Easing from './easing';

export default class QuadEaseOut extends Easing {
  update(t, b, c, d) {
    return -c * (t /= d) * (t - 2) + b;
  }
}
