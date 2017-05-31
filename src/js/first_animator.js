import Application from './util/application';
import Animator from './util/animator';
import {IEasing} from './util/ieasing';

export default class FirstAnimator extends Animator {
  constructor() {
    super();

    this.body = document.querySelector('#js-first');
    this.x = 0;
    this.easing = IEasing.Quart.easeOut;

    this.initialize();
  }

  initialize() {
    this.body.style.left = 0;
  }

  animate(currentTime, diff) {
    this.x = Application.getFloatValue(this.easing.update(diff, 0, 700, 1000), 2);
    this.body.style.transform = 'translateX(' + this.x + 'px)';
  }
}
