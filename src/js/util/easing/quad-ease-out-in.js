import Easing from './easing';

export default class QuadEaseOutIn extends Easing {
  update(t, b, c, d) {
    if (t < d / 2) {
      return -(c / 2) * (t = t * 2 / d) * (t - 2) + b;
    } else {
      return (c / 2) * (t = (t * 2 - d) / d) * t + (b + c / 2);
    }
  }
}
