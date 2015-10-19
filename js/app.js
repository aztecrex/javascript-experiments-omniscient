import React from 'react';
import component from 'omniscient';

var Ctl = component(
  model =>
  <button onClick={() => model.update(v => !v)}>
    {model.deref() ? "Stop" : "Start"}
  </button>
);

var Count = component(
  model => <span className="count">{model.deref()}</span>
);

export default component(
  'App',
  model =>
    <div className='app'>
      <h1>Counter Control in Omniscient</h1>
      <div>{Count(model.cursor('counter'))}</div>
      <div>{Ctl(model.cursor("run"))}</div>
    </div>

  );
