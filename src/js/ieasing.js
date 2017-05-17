import easing from './easing/easing';
import LinearEaseNone from './easing/linear-ease-none';
import SineEaseOut from './easing/sine-ease-out';
import SineEaseIn from './easing/sine-ease-in';
import SineEaseOutIn from './easing/sine-ease-out-in';
import SineEaseInOut from './easing/sine-ease-in-out';
import CubicEaseOut from './easing/cubic-ease-out';
import CubicEaseIn from './easing/cubic-ease-in';
import CubicEaseOutIn from './easing/cubic-ease-out-in';
import CubicEaseInOut from './easing/cubic-ease-in-out';
import QuintEaseOut from './easing/quint-ease-out';
import QuintEaseIn from './easing/quint-ease-in';
import QuintEaseOutIn from './easing/quint-ease-out-in';
import QuintEaseInOut from './easing/quint-ease-in-out';
import CircEaseOut from './easing/circ-ease-out';
import CircEaseIn from './easing/circ-ease-in';
import CircEaseOutIn from './easing/circ-ease-out-in';
import CircEaseInOut from './easing/circ-ease-in-out';
import QuadEaseOut from './easing/quad-ease-out';
import QuadEaseIn from './easing/quad-ease-in';
import QuadEaseOutIn from './easing/quad-ease-out-in';
import QuadEaseInOut from './easing/quad-ease-in-out';
import QuartEaseOut from './easing/quart-ease-out';
import QuartEaseIn from './easing/quart-ease-in';
import QuartEaseOutIn from './easing/quart-ease-out-in';
import QuartEaseInOut from './easing/quart-ease-in-out';
import ExpoEaseOut from './easing/expo-ease-out';
import ExpoEaseIn from './easing/expo-ease-in';
import ExpoEaseOutIn from './easing/expo-ease-out-in';
import ExpoEaseInOut from './easing/expo-ease-in-out';
import ElasticEaseOut from './easing/elastic-ease-out';
import ElasticEaseIn from './easing/elastic-ease-in';
import ElasticEaseOutIn from './easing/elastic-ease-out-in';
import ElasticEaseInOut from './easing/elastic-ease-in-out';
import BackEaseOut from './easing/back-ease-out';
import BackEaseIn from './easing/back-ease-in';
import BackEaseOutIn from './easing/back-ease-out-in';
import BackEaseInOut from './easing/back-ease-in-out';
import BounceEaseOut from './easing/bounce-ease-out';
import BounceEaseIn from './easing/bounce-ease-in';
import BounceEaseOutIn from './easing/bounce-ease-out-in';
import BounceEaseInOut from './easing/bounce-ease-in-out';

const Linear = {
  easeNone:   new LinearEaseNone(),
  easeOut:    new LinearEaseNone(),
  easeIn:     new LinearEaseNone(),
  easeOutIn:  new LinearEaseNone(),
  easeInOut:  new LinearEaseNone()
}

const Sine = {
  easeOut:    new SineEaseOut(),
  easeIn:     new SineEaseIn(),
  easeOutIn:  new SineEaseOutIn(),
  easeInOut:  new SineEaseInOut()
}

const Cubic = {
  easeOut:    new CubicEaseOut(),
  easeIn:     new CubicEaseIn(),
  easeOutIn:  new CubicEaseOutIn(),
  easeInOut:  new CubicEaseInOut()
}

const Quint = {
  easeOut:    new QuintEaseOut(),
  easeIn:     new QuintEaseIn(),
  easeOutIn:  new QuintEaseOutIn(),
  easeInOut:  new QuintEaseInOut()
}

const Circ = {
  easeOut:    new CircEaseOut(),
  easeIn:     new CircEaseIn(),
  easeOutIn:  new CircEaseOutIn(),
  easeInOut:  new CircEaseInOut()
}

const Quad = {
  easeOut:    new QuadEaseOut(),
  easeIn:     new QuadEaseIn(),
  easeOutIn:  new QuadEaseOutIn(),
  easeInOut:  new QuadEaseInOut()
}

const Quart = {
  easeOut:    new QuartEaseOut(),
  easeIn:     new QuartEaseIn(),
  easeOutIn:  new QuartEaseOutIn(),
  easeInOut:  new QuartEaseInOut()
}

const Expo = {
  easeOut:    new ExpoEaseOut(),
  easeIn:     new ExpoEaseIn(),
  easeOutIn:  new ExpoEaseOutIn(),
  easeInOut:  new ExpoEaseInOut()
}

const Elastic = {
  easeOut:    new ElasticEaseOut(),
  easeIn:     new ElasticEaseIn(),
  easeOutIn:  new ElasticEaseOutIn(),
  easeInOut:  new ElasticEaseInOut()
}

const Back = {
  easeOut:    new BackEaseOut(),
  easeIn:     new BackEaseIn(),
  easeOutIn:  new BackEaseOutIn(),
  easeInOut:  new BackEaseInOut()
}

const Bounce = {
  easeOut:    new BounceEaseOut(),
  easeIn:     new BounceEaseIn(),
  easeOutIn:  new BounceEaseOutIn(),
  easeInOut:  new BounceEaseInOut()
}

export const IEasing = {
  Linear:   Linear,
  Sine:     Sine,
  Cubic:    Cubic,
  Quint:    Quint,
  Circ:     Circ,
  Quad:     Quad,
  Quart:    Quart,
  Expo:     Expo,
  Elastic:  Elastic,
  Back:     Back,
  Bounce:   Bounce
}
