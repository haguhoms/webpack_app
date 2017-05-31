import Easing from './easing';

export default class BounceEaseInOut extends Easing {
  update(t, b, c, d) {
    if (t < d / 2) {
      if ((t = (d - t * 2) / d) < (1 / 2.75)) {
        return (c - (c * (7.5625 * t * t))) * 0.5 + b;
      } else if (t < (2 / 2.75)) {
        return (c - (c * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75))) * 0.5 + b;
      } else if (t < (2.5 / 2.75)) {
        return (c - (c * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375))) * 0.5 + b;
      } else {
        return (c - (c * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375))) * 0.5 + b;
      }
    } else {
      if ((t = (t * 2 - d) / d) < (1 / 2.75)) {
        return (c * (7.5625 * t * t)) * 0.5 + c * 0.5 + b;
      } else if (t < (2 / 2.75)) {
        return (c * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75)) * 0.5 + c * 0.5 + b;
      } else if (t < (2.5 / 2.75)) {
        return (c * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375)) * 0.5 + c * 0.5 + b;
      } else {
        return (c * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375)) * 0.5 + c * 0.5 + b;
      }
    }
  }
}
