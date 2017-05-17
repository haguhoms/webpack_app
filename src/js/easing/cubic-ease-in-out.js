import Easing from './easing';

export default class CubicEaseInOut extends Easing {
  update(t, b, c, d) {
    if ((t /= d / 2) < 1) {
      return (c / 2) * t * t * t + b;
    } else {
      return (c / 2) * ((t -= 2) * t * t + 2) + b;
    }
  }
}
