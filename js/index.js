import React from 'react';
import component from 'omniscient';
import immstruct from 'immstruct';

import App from './app';
import '../less/index.less';

let data = immstruct({
  counter: 0,
  run: false,
  some: "More data here",
  things: ["one","two","three"]
});

let el = document.querySelector('#app');

function render() {
  React.render(
    App(data.cursor()),
    el);
}


let control = (function() {
  var curState = false;
  var interval;

  return function (newState) {
    console.log("control invoked with:" + newState)
    if (newState != curState) {
      if (newState) {
        interval = setInterval(
           () => data.cursor().update('counter', i => i + 17),
           100);
      } else {
        clearInterval(interval);
      }
      curState = newState;
    }
  }
})();

let gate = data.reference('run');
control(gate.cursor().deref())
gate.observe('change', go => control(go))

render();
data.on('swap', render);
