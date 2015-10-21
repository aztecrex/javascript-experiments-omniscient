import React from 'react';
import component from 'omniscient';
import immstruct from 'immstruct';

import App from './app';
import '../less/index.less';

import Pulse from './pulse'

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

let control = Pulse(() => data.cursor().update(
  'counter', i => i + 17),
  100);

let gate = data.reference('run');
control(gate.cursor().deref())
gate.observe('change', go => control(go))

render();
data.on('swap', render);
