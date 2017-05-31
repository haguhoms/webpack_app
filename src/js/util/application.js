class Application {
  constructor() {
    this.browserName    = null;
    this.browserVersion = null;
    this.osName         = null;
    this.osVersion      = null;
    this.isMobile       = false;
    this.width          = 0;
    this.height         = 0;
    this.PI             = Math.PI * 0.5;
    this.RADIAN         = Math.PI / 180;

    this.getWidth();
    this.getHeight();
    this.getInfo();
  }

  getWidth() {
    this.width = window.innerWidth || document.documentElement.clientWidth || 0;
  }

  getHeight() {
    this.height = window.innerHeight || document.documentElement.clientHeight || 0;
  }

  getInfo() {
    const ua = navigator.userAgent.toUpperCase();

    if (ua.indexOf('EDGE') > -1) {
      this.browserName = BrowserName.Edge;
      ua.match(/EDGE\/(\d+(\.\d+)+)/ig);
      this.browserVersion = RegExp.$1;
    }
    else if (ua.indexOf('CHROME') > -1) {
      this.browserName = BrowserName.Chrome;
      ua.match(/CHROME\/(\d+(\.\d+)+)/ig);
      this.browserVersion = RegExp.$1;
    }
    else if (ua.indexOf('SAFARI') > -1) {
      this.browserName = BrowserName.Safari;
      ua.match(/VERSION\/(\d+(\.\d+)+)/ig);
      this.browserVersion = RegExp.$1;
    }
    else if (ua.indexOf('FIREFOX') > -1) {
      this.browserName = BrowserName.Firefox;
      ua.match(/FIREFOX\/(\d+(\.\d+)+)/i);
      this.browserVersion = RegExp.$1;
    }
    else if (ua.indexOf('MSIE') > -1) {
      this.browserName = BrowserName.IE;
      ua.match(/MSIE (\d+(\.\d+)+)/i);
      this.browserVersion = RegExp.$1;
    }
    else if (ua.indexOf('TRIDENT') > -1) {
      this.browserName = BrowserName.IE;
      ua.match(/RV:(\d+(\.\d+)+)/i);
      this.browserVersion = RegExp.$1;
    }
    else if (ua.indexOf('OPERA') > -1) {
      this.browserName = BrowserName.Opera;
      ua.match(/OPERA\/(\d+(\.\d+)+)/i);
      this.browserVersion = RegExp.$1;
    }

    if (ua.indexOf('ANDROID') > -1) {
      ua.match(/ANDROID (\d+\.\d+)/i);
      this.osVersion = (RegExp.$1.replace(/\./g, '') + '00').slice(0, 3);
      this.osVersion = Number(this.osVersion);
      this.osName = OSName.Android;
      this.isMobile = true;
      if (this.osVersion < 400) isKA = true;
    }
    else if (ua.indexOf('IPHONE') > -1) {
      ua.match(/IPHONE OS (\w+){1,3}/g);
      this.osVersion = (RegExp.$1.replace(/_/g, '') + '00').slice(0, 3);
      this.osVersion = Number(this.osVersion);
      this.osName = OSName.iPhone;
      this.isMobile = true;
    }
    else if (ua.indexOf('IPOD') > -1) {
      ua.match(/IPOD OS (\w+){1,3}/g);
      this.osVersion = (RegExp.$1.replace(/_/g, '') + '00').slice(0, 3);
      this.osVersion = Number(this.osVersion);
      this.osName = OSName.iPod;
      this.isMobile = true;
    }
    else if (ua.indexOf('IPAD') > -1) {
      ua.match(/IPAD OS (\w+){1,3}/g);
      this.osVersion = (RegExp.$1.replace(/_/g, '') + '00').slice(0, 3);
      this.osVersion = Number(this.osVersion);
      this.osName = OSName.iPad;
      this.isMobile = true;
    }
    else if (ua.indexOf('MAC OS X') > -1) {
      ua.match(/MAC OS X (\d+[\._]\d+)|(\d+_\d+)/g);
      this.osVersion = (RegExp.$1.replace(/\.|_/g, '') + '00').slice(0, 3);
      this.osVersion = Number(this.osVersion);
      this.osName = OSName.MacOS;
    }
    else {
      this.osName = OSName.Windows;
    }
  }

  getRandom(min, max) {
    return Math.random() * (max - min) + min;
  }

  getFloatValue(value, n) {
    const pow = Math.pow(10, n);
    return Math.round(value * pow) / pow;
  }
}

const BrowserName = {
        Edge:     'edge',
        Chrome:   'chrome',
        Safari:   'safari',
        IE:       'ie',
        Firefox:  'firefox',
        Opera:    'opera'
      }
    , OSName = {
        Windows:  'window',
        MacOS:    'macos',
        iPhone:   'iPhone',
        iPad:     'iPad',
        iPod:     'iPod',
        Android:  'android'
      };

export default new Application();
