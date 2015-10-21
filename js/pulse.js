import {isObject,isFunction} from 'underscore';

export default function(a,b) {
    var handler;
    var interval;
    if (isFunction(a)) {
      handler = a;
      interval = b;
    } else {
      ({handler, interval} = a);
    }

    if (interval) {
      if ( interval < 100) {
        interval = 100;
      }
    } else {
      interval = 1000;
    }

    if (!handler) {
      handler = beep;
    }

    return gen({handler: handler, interval:interval});

}

function gen(params) {
  var curState = false;
  var interval;

  return function (newState) {
    if (newState != curState) {
      if (newState) {
        interval = setInterval(params.handler, params.interval);
      } else {
        clearInterval(interval);
      }
      curState = newState;
    }
  }
}

function beep() {
  console.log("beep")
}
