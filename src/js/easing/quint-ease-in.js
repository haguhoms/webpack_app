import Easing from './easing';

export default class QuintEaseIn extends Easing {
  update(t, b, c, d) {
    return c * (t /= d) * t * t * t * t + b;
  }
}
