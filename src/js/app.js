require('../scss/app.scss');
import 'babel-polyfill';
import cats from './cats';
import data from '../json/data.json';
import $ from 'jquery';

$('<h1>Cats</h1>').appendTo('body');
const ul = $('<ul class="block"></ul>').appendTo('body');
for (const cat of cats) {
  $('<li></li>').addClass('block__element').text(cat).appendTo(ul);
}
for (const cat of data) {
  $('<li></li>').text(cat).appendTo(ul);
}
