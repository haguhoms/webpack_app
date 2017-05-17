import Easing from './easing';

export default class QuadEaseIn extends Easing {
  update(t, b, c, d) {
    return c * (t /= d) * t + b;
  }
}
