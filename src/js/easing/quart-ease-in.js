import Easing from './easing';

export default class QuartEaseIn extends Easing {
  update(t, b, c, d) {
    return c * (t /= d) * t * t * t + b;
  }
}
