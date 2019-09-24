<template>
<div class="ReferenceLinks">
  <h1>references</h1>

  <div class="linkList">
    <h2>nextTick (vue)</h2>
    <ul>
      <li><a href="https://vuejs.org/v2/api/#vm-nextTick" target="_blank">vue docs</a></li>
      <li><a href="https://vuejsdevelopers.com/2019/01/22/vue-what-is-next-tick" target="_blank">What the Tick is Vue.nextTick? — Adrià Fontcuberta</a></li>
      <li><a href="https://www.reddit.com/r/vuejs/comments/ait20p/what_the_tick_is_vuenexttick">What the Tick is Vue.nextTick? — responses</a></li>
      <li><a href="https://www.raymondcamden.com/2019/02/22/what-is-nexttick-in-vue-and-when-you-need-it" target="_blank">What is $nextTick in Vue and When You Need It — Raymond Camden</a></li>
      <li><a href="https://stackoverflow.com/questions/47634258/what-is-nexttick-or-what-does-it-do-in-vuejs" target="_blank">What is nextTick or what does it do in VueJs — StackOverflow</a></li>
      <li><a href="www.vuemastery.com/conferences/vueconf-us-2018/learning-reactivity-by-accident-jeff-schenck" target="_blank">Reactivity: Learning by Accident — Jeff Schenk</a></li>
      <li><a href="https://www.youtube.com/watch?v=mBUkaxW1czw">A Vue BTS — tessa</a></li>
      <li><a href="https://www.vuemastery.com/conferences/vueconf-us-2019/back-to-the-vueture-stuck-in-the-event-loop">Back to the Vueture: Stuck in the Event Loop — tessa</a></li>
    </ul>

    <h2>microtasks</h2>
    <ul>
      <li><a href="quora.com/Does-JavaScript-in-the-browser-have-the-equivalent-of-process-nextTick-or-setImmediate-in-node-js-or-do-we-just-have-setTimeout" target="_blank">
      Does JavaScript in the browser have the equivalent of process.nextTick() or setImmediate() in node.js or do we just have setTimeout()? — Quora
      </a></li>
      <li><a href="abc.danch.me/microtasks-macrotasks-more-on-the-event-loop-881557d7af6f" target="_blank">Microtasks & Macrotasks — More On The Event Loop — Daniel Chang</a></li>
    </ul>

    <h2>event loop (browser)</h2>
    <ul>
      <li><a href="flaviocopes.com/javascript-event-loop" target="_blank">The JavaScript Event Loop — Flavio Copes</a></li>
      <li><a href="https://stackoverflow.com/questions/5131086/using-the-gwt-scheduler/5132382#5132382" target="_blank">Using the GWT Scheduler — StackOverflow</a></li>
      <li><a href="https://www.youtube.com/watch?v=8aGhZQkoFbQ" target="_blank">What the heck is the event loop anyway? — Philip Roberts</a></li>
      <li><a href="https://www.youtube.com/watch?v=cCOL7MC4Pl0" target="_blank">In The Loop — Jake Archibald</a></li>
      <li><a href="https://www.youtube.com/watch?v=DwQJ_NPQWWo" target="_blank">Async + Await in JavaScript — Wes Bos</a></li>
    </ul>

    <h2>event loop (node)</h2>
    <ul>
      <li><a href="https://youtu.be/gl9qHml-mKc" target="_blank">Everything I thought I knew about the event loop was wrong — Daniel Khan</a></li>
      <li><a href="https://blog.logrocket.com/a-complete-guide-to-the-node-js-event-loop" target="_blank">A complete guide to the Node.js event loop — Piero Borelli</a></li>
      <li><a href="nodejs.org/uk/docs/guides/event-loop-timers-and-nexttick" target="_blank">The Node.js Event Loop, Timers, and process.nextTick() — node docs</a></li>
      <li><a href="https://youtu.be/PNa9OMajw9w" target="_blank">Everything You Need to Know About Node.js Event Loop — Bert Belder</a></li>
    </ul>

    <a href="https://creativedesignsideafree.blogspot.com/2017/03/round-animated-loading-gif.html" target="_blank">loading gif source</a>
  </div>
</div>
</template>

<style lang="scss">
.ReferenceLinks {
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 { padding: 0 0 2rem; }

  h2 {
    padding: 3rem 0 1rem;
    text-align: center;
  }

  a {
    color: green;
    text-decoration: none;

    &:visited {
      color: navy;
    }
  }
}

.linkList {
  height: 50vh;
  overflow-y: auto;
  text-align: left;
}
</style>