import Easing from './easing';

export default class CircEaseOutIn extends Easing {
  update(t, b, c, d) {
    if (t < d / 2) {
      return (c / 2) * Math.sqrt(1 - (t = (t * 2) / d - 1) * t) + b;
    } else {
      return -(c / 2) * (Math.sqrt(1 - (t = (t * 2 - d) / d) * t) - 1) + (b + c / 2);
    }
  }
}
