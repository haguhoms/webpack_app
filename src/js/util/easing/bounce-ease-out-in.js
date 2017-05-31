import Easing from './easing';

export default class BounceEaseOutIn extends Easing {
  update(t, b, c, d) {
    if (t < d / 2) {
      if ((t = (t * 2) / d) < (1 / 2.75)) {
        return (c / 2) * (7.5625 * t * t) + b;
      } else if (t < (2 / 2.75)) {
        return (c / 2) * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + b;
      } else if (t < (2.5 / 2.75)) {
        return (c / 2) * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + b;
      } else {
        return (c / 2) * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + b;
      }
    } else {
      if ((t = (d - (t * 2 - d)) / d) < (1 / 2.75)) {
        return (c / 2) - ((c / 2) * (7.5625 * t * t)) + (b + c / 2);
      } else if (t < (2 / 2.75)) {
        return (c / 2) - ((c / 2) * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75)) + (b + c / 2);
      } else if (t < (2.5 / 2.75)) {
        return (c / 2) - ((c / 2) * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375)) + (b + c / 2);
      } else {
        return (c / 2) - ((c / 2) * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375)) + (b + c / 2);
      }
    }
  }
}
