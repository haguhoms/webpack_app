import Easing from './easing';

export default class LinearEaseNone extends Easing {
  update(t, b, c, d) {
    return c * t / d + b;
  }
}
