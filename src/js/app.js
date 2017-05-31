require('../scss/app.scss');
import 'babel-polyfill';
import $ from 'jquery';
import FirstAnimator from './first_animator';

const first = new FirstAnimator();
first.setDuration(1000);
first.start();

