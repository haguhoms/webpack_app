export default class Common {

  constructor(props) {
    this.PI = Math.PI;

    this.initialize();
    this.setEvent();
  }

  initialize() {}

  setEvent() {}

  getProgress(e, t, b, c, d) {
    if (t === void 0) return null;
    if (t < 0) return 0;
    if (t > d) return c;

    let progress;

    switch (e) {
      case 'linear':
        progress = c * t / d + b;
        break;
      case 'easeInSine':
        progress = -c * Math.cos(t / d * this.PI) + c + b;
        break;
      case 'easeOutSine':
        progress = c * Math.sin(t / d * this.PI) + b;
        break;
      case 'easeInOutSine':
        progress = -(c / 2) * (Math.cos(this.PI * t / d) - 1) + b;
        break;
      case 'easeOutInSine':
        if (t < (d / 2)) {
          progress = (c / 2) * Math.sin((t * 2) / d * this.PI) + b;
        }
        else {
          progress = -(c / 2) * Math.cos((t * 2 - d) / d * this.PI) + (c / 2) + (b + (c / 2));
        }
        break;
      case 'easeInCubic':
        progress = c * (t /= d) * t * t + b;
        break;
      case 'easeOutCubic':
        progress = c * ((t = t / d - 1) * t * t + 1) + b;
        break;
      case 'easeInOutCubic':
        if (t /= (d / 2) < 1) {
          progress = (c / 2) * t * t * t + b;
        }
        else {
          progress = (c / 2) * ((t -= 2) * t * t + 2) + b;
        }
        break;
      case 'easeOutInCubic':
        if (t < d / 2) {
          progress = c / 2 * ((t = t * 2 / d - 1) * t * t + 1) + b;
        }
        else {
          progress = c / 2 * (t = (t * 2 - d) / d) * t * t + b + c / 2;
        }
        break;
      case 'easeInQuint':
        progress = c * (t /= d) * t * t * t * t + b;
        break;
      case 'easeOutQuint':
        progress = c * ((t = t / d - 1) * t * t * t * t + 1) + b;
        break;
      case 'easeInOutQuint':
        if ((t /= d / 2) < 1) {
          progress = c / 2 * t * t * t * t * t + b;
        }
        else {
          progress = c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
        }
        break;
      case 'easeOutInQuint':
        if (t < d / 2) {
          progress = (c / 2) * ((t = (t * 2) / d - 1) * t * t * t * t + 1) + b;
        }
        else {
          progress = (c / 2) * (t = (t * 2 - d) / d) * t * t * t * t + (b + c / 2);
        }
        break;
      case 'easeInCirc':
        progress = -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
        break;
      case 'easeOutCirc':
        progress = c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
        break;
      case 'easeInOutCirc':
        if ((t /= d / 2) < 1) {
          progress = -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
        }
        else {
          progress = c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
        }
        break;
      case 'easeOutInCirc':
        if (t < d / 2) {
          progress = (c / 2) * Math.sqrt(1 - (t = (t * 2) / d - 1) * t) + b;
        }
        else {
          progress = -(c / 2) * (Math.sqrt(1 - (t = (t * 2 - d) / d) * t) - 1) + (b + c / 2);
        }
        break;
      case 'easeInQuad':
        progress = c * (t /= d) * t + b;
        break;
      case 'easeOutQuad':
        progress = -c * (t /= d) * (t - 2) + b;
        break;
      case 'easeInOutQuad':
        if ((t /= d / 2) < 1) {
          progress = c / 2 * t * t + b;
        }
        else {
          progress = -c / 2 * ((--t) * (t - 2) - 1) + b;
        }
        break;
      case 'easeOutInQuad':
        if (t < d / 2) {
          progress = -(c / 2) * (t = t * 2 / d) * (t - 2) + b;
        }
        else {
          progress = (c / 2) * (t = (t * 2 - d) / d) * t + (b + c / 2);
        }
        break;
      case 'easeInQuart':
        progress = c * (t /= d) * t * t * t + b;
        break;
      case 'easeOutQuart':
        progress = -c * ((t = t / d - 1) * t * t * t - 1) + b;
        break;
      case 'easeInOutQuart':
        if ((t /= d / 2) < 1) {
          progress = c / 2 * t * t * t * t + b;
        }
        else {
          progress = -c / 2 * ((t -= 2) * t * t * t - 2) + b;
        }
        break;
      case 'easeOutInQuart':
        if (t < d / 2) {
          progress = -(c / 2) * ((t = (t * 2) / d - 1) * t * t * t - 1) + b;
        }
        else {
          progress = (c / 2) * (t = (t * 2 - d) / d) * t * t * t + (b + c / 2);
        }
        break;
      case 'easeInExpo':
        if (t === 0) {
          progress = b;
        }
        else {
          progress = c * Math.pow(2, 10 * (t / d - 1)) + b;
        }
        break;
      case 'easeOutExpo':
        if (t === d) {
          progress = b + c;
        }
        else {
          progress = c * (-Math.pow(2, -10 * t / d) + 1) + b;
        }
        break;
      case 'easeInOutExpo':
        if (t === 0) {
          progress = b;
        }
        else if (t === d) {
          progress = b + c;
        }
        else if ((t /= d / 2) < 1) {
          progress = c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        }
        else {
          progress = c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
        }
        break;
      case 'easeOutInExpo':
        if (t < d / 2) {
          if (t * 2.0 === d) {
            progress = b + c / 2.0;
          } else {
            progress = c / 2.0 * (1 - Math.pow(2, -10 * t * 2.0 / d)) + b;
          }
        }
        else if (t * 2.0 - d === 0) {
          progress = b + c / 2.0;
        }
        else {
          progress = c / 2.0 * Math.pow(2, 10 * ((t * 2 - d) / d - 1)) + b + c / 2.0;
        }
        break;
      case 'easeInBack':
        progress = c * (t /= d) * t * ((1.70158 + 1) * t - 1.70158) + b;
        break;
      case 'easeOutBack':
        progress = c * ((t = t / d - 1) * t * ((1.70158 + 1) * t + 1.70158) + 1) + b;
        break;
      case 'easeInOutBack':
        if ((t /= d / 2) < 1) {
          progress = c / 2 * (t * t * (((1.70158 * 1.525) + 1) * t - 1.70158 * 1.525)) + b;
        } else {
          progress = c / 2 * ((t -= 2) * t * (((1.70158 * 1.525) + 1) * t + 1.70158 * 1.525) + 2) + b;
        }
        break;
      case 'easeOutInBack':
        if (t < d / 2) {
          progress =  (c / 2) * ((t = (t * 2) / d - 1) * t * ((1.70158 + 1) * t + 1.70158) + 1) + b;
        } else {
          progress =  (c / 2) * (t = (t * 2 - d) / d) * t * ((1.70158 + 1) * t - 1.70158) + (b + c / 2);
        }
        break;
      default:
        progress = null;
        break;
    }
  }

  getEasingByString(easingName) {
    let easing;
    switch(easingName) {
      case 'linear':
        easing = Linear.easeNone;
        break;
      case 'easeBackIn':
        easing = Back.easeIn;
        break;
      case 'easeBackInOut':
        easing = Back.easeInOut;
        break;
      case 'easeInQuad':
        easing = Quad.easeIn;
        break;
      case 'easeInCubic':
        easing = Cubic.easeIn;
        break;
      case 'easeInQuart':
        easing = Quart.easeIn;
        break;
      case 'easeInQuint':
        easing = Quint.easeIn;
        break;
      case 'easeInSine':
        easing = Sine.easeIn;
        break;
      case 'easeInExpo':
        easing = Expo.easeIn;
        break;
      case 'easeOutCirc':
        easing = Circ.easeOut;
        break;
      case 'easeOutQuad':
        easing = Quad.easeOut;
        break;
      case 'easeOutCubic':
        easing = Cubic.easeOut;
        break;
      case 'easeOutQuart':
        easing = Quart.easeOut;
        break;
      case 'easeOutQuint':
        easing = Quint.easeOut;
        break;
      case 'easeOutSine':
        easing = Sine.easeOut;
        break;
      case 'easeOutExpo':
        easing = Expo.easeOut;
        break;
      case 'easeOutCirc':
        easing = Circ.easeOut;
        break;
      case 'easeInOutBack':
        easing = Back.easeInOut;
        break;
      case 'easeInOutQuad':
        easing = Quad.easeInOut;
        break;
      case 'easeInOutCubic':
        easing = Cubic.easeInOut;
        break;
      case 'easeInOutQuart':
        easing = Quart.easeInOut;
        break;
      case 'easeInOutQuint':
        easing = Quint.easeInOut;
        break;
      case 'easeInOutSine':
        easing = Sine.easeInOut;
        break;
      case 'easeInOutExpo':
        easing = Expo.easeInOut;
        break;
      case 'easeInOutCirc':
        easing = Circ.easeInOut;
        break;
      default:
        break;
    }
  }
}

Common = (function() {

    function Common() {
      this.initialize();
      this.setEvent();
    };

    Common.prototype.initialize = function() {};
    Common.prototype.setEvent = function() {};

    // 進捗管理
    // e: easingType
    // t: currentTime
    // b: startValue
    // c: endValue
    // d: totalTime
    Common.prototype.getProgress = function(e, t, b, c, d) {
      var retValue;
      if (t === undefined) return null;
      if (t < 0) return 0;
      if (t > d) return c;

      switch (e) {
        case 'linear':
          retValue = c * t / d + b;
          break;
        case 'easeInSine':
          retValue = -c * Math.cos(t / d * this.PI) + c + b;
          break;
        case 'easeOutSine':
          retValue = c * Math.sin(t / d * this.PI) + b;
          break;
        case 'easeInOutSine':
          retValue = -(c / 2) * (Math.cos(this.PI * t / d) - 1) + b;
          break;
        case 'easeOutInSine':
          if (t < (d / 2)) {
            retValue = (c / 2) * Math.sin((t * 2) / d * this.PI) + b;
          }
          else {
            retValue = -(c / 2) * Math.cos((t * 2 - d) / d * this.PI) + (c / 2) + (b + (c / 2));
          }
          break;
        case 'easeInCubic':
          retValue = c * (t /= d) * t * t + b;
          break;
        case 'easeOutCubic':
          retValue = c * ((t = t / d - 1) * t * t + 1) + b;
          break;
        case 'easeInOutCubic':
          if (t /= (d / 2) < 1) {
            retValue = (c / 2) * t * t * t + b;
          }
          else {
            retValue = (c / 2) * ((t -= 2) * t * t + 2) + b;
          }
          break;
        case 'easeOutInCubic':
          if (t < d / 2) {
            retValue = c / 2 * ((t = t * 2 / d - 1) * t * t + 1) + b;
          }
          else {
            retValue = c / 2 * (t = (t * 2 - d) / d) * t * t + b + c / 2;
          }
          break;
        case 'easeInQuint':
          retValue = c * (t /= d) * t * t * t * t + b;
          break;
        case 'easeOutQuint':
          retValue = c * ((t = t / d - 1) * t * t * t * t + 1) + b;
          break;
        case 'easeInOutQuint':
          if ((t /= d / 2) < 1) {
            retValue = c / 2 * t * t * t * t * t + b;
          }
          else {
            retValue = c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
          }
          break;
        case 'easeOutInQuint':
          if (t < d / 2) {
            retValue = (c / 2) * ((t = (t * 2) / d - 1) * t * t * t * t + 1) + b;
          }
          else {
            retValue = (c / 2) * (t = (t * 2 - d) / d) * t * t * t * t + (b + c / 2);
          }
          break;
        case 'easeInCirc':
          retValue = -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
          break;
        case 'easeOutCirc':
          retValue = c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
          break;
        case 'easeInOutCirc':
          if ((t /= d / 2) < 1) {
            retValue = -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
          }
          else {
            retValue = c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
          }
          break;
        case 'easeOutInCirc':
          if (t < d / 2) {
            retValue = (c / 2) * Math.sqrt(1 - (t = (t * 2) / d - 1) * t) + b;
          }
          else {
            retValue = -(c / 2) * (Math.sqrt(1 - (t = (t * 2 - d) / d) * t) - 1) + (b + c / 2);
          }
          break;
        case 'easeInQuad':
          retValue = c * (t /= d) * t + b;
          break;
        case 'easeOutQuad':
          retValue = -c * (t /= d) * (t - 2) + b;
          break;
        case 'easeInOutQuad':
          if ((t /= d / 2) < 1) {
            retValue = c / 2 * t * t + b;
          }
          else {
            retValue = -c / 2 * ((--t) * (t - 2) - 1) + b;
          }
          break;
        case 'easeOutInQuad':
          if (t < d / 2) {
            retValue = -(c / 2) * (t = t * 2 / d) * (t - 2) + b;
          }
          else {
            retValue = (c / 2) * (t = (t * 2 - d) / d) * t + (b + c / 2);
          }
          break;
        case 'easeInQuart':
          retValue = c * (t /= d) * t * t * t + b;
          break;
        case 'easeOutQuart':
          retValue = -c * ((t = t / d - 1) * t * t * t - 1) + b;
          break;
        case 'easeInOutQuart':
          if ((t /= d / 2) < 1) {
            retValue = c / 2 * t * t * t * t + b;
          }
          else {
            retValue = -c / 2 * ((t -= 2) * t * t * t - 2) + b;
          }
          break;
        case 'easeOutInQuart':
          if (t < d / 2) {
            retValue = -(c / 2) * ((t = (t * 2) / d - 1) * t * t * t - 1) + b;
          }
          else {
            retValue = (c / 2) * (t = (t * 2 - d) / d) * t * t * t + (b + c / 2);
          }
          break;
        case 'easeInExpo':
          if (t === 0) {
            retValue = b;
          }
          else {
            retValue = c * Math.pow(2, 10 * (t / d - 1)) + b;
          }
          break;
        case 'easeOutExpo':
          if (t === d) {
            retValue = b + c;
          }
          else {
            retValue = c * (-Math.pow(2, -10 * t / d) + 1) + b;
          }
          break;
        case 'easeInOutExpo':
          if (t === 0) {
            retValue = b;
          }
          else if (t === d) {
            retValue = b + c;
          }
          else if ((t /= d / 2) < 1) {
            retValue = c / 2 * Math.pow(2, 10 * (t - 1)) + b;
          }
          else {
            retValue = c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
          }
          break;
        case 'easeOutInExpo':
          if (t < d / 2) {
            if (t * 2.0 === d) {
              retValue = b + c / 2.0;
            } else {
              retValue = c / 2.0 * (1 - Math.pow(2, -10 * t * 2.0 / d)) + b;
            }
          }
          else if (t * 2.0 - d === 0) {
            retValue = b + c / 2.0;
          }
          else {
            retValue = c / 2.0 * Math.pow(2, 10 * ((t * 2 - d) / d - 1)) + b + c / 2.0;
          }
          break;
        case 'easeInBack':
          retValue = c * (t /= d) * t * ((1.70158 + 1) * t - 1.70158) + b;
          break;
        case 'easeOutBack':
          retValue = c * ((t = t / d - 1) * t * ((1.70158 + 1) * t + 1.70158) + 1) + b;
          break;
        case 'easeInOutBack':
          if ((t /= d / 2) < 1) {
            retValue = c / 2 * (t * t * (((1.70158 * 1.525) + 1) * t - 1.70158 * 1.525)) + b;
          } else {
            retValue = c / 2 * ((t -= 2) * t * (((1.70158 * 1.525) + 1) * t + 1.70158 * 1.525) + 2) + b;
          }
          break;
        case 'easeOutInBack':
          if (t < d / 2) {
            retValue =  (c / 2) * ((t = (t * 2) / d - 1) * t * ((1.70158 + 1) * t + 1.70158) + 1) + b;
          } else {
            retValue =  (c / 2) * (t = (t * 2 - d) / d) * t * ((1.70158 + 1) * t - 1.70158) + (b + c / 2);
          }
          break;
        default:
          retValue = null;
          break;
      }
      return retValue;
    };

    Common.prototype.isset = function(data) {
      if (data === '' || data === null || data === void 0) {
        return false;
      }
      else {
        return true;
      }
    };

    return Common;
  })();
