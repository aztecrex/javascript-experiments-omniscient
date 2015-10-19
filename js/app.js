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

// var Count = component(
//   ({value}) => <span className='count'>{value.deref()}</span>
//   );
//

export default component(
  'App',
  model =>
    <div className='app'>
      <h1>Counter Control in Omniscient</h1>
      <div>{Count(model.cursor('counter'))}</div>
      <div>{Ctl(model.cursor("run"))}</div>
    </div>

  );




  // or with jsx:
  //
  // <div className="app">
  //   {counter.deref()}
  // </div>);
  //
  // just remember to:
  //
  // import React from 'react';


// enable 6to5-loader?experimental in webpack.config.js and 'import "babel/polyfill"' to use generators
// export function * counter () {
//   var n = 0;
//   while (true) yield n++;
// }
