import { html } from 'common-tags';
import throttle from 'lodash.throttle';

(function gridOverlay() {
  if (JSON.parse(process.env.NODE_ENV === 'development')) {
    window.addEventListener('keypress', throttle((evt) => {
      if (evt.key === '?') {
        const elem = document.getElementById('x-grid-overlay');

        if (elem) {
          document.body.removeChild(elem);
        } else {
          document.body.insertAdjacentHTML('beforeend', html`
            <div id="x-grid-overlay" class="container" style="position:fixed;top:0;right:0;bottom:0;left:0;pointer-events:none">
              <div class="row" style="height: 100%">
                ${(new Array(12)).fill(0).map(() => (`
                  <div class="col-2 col-md-1" style="background-color:rgba(0,0,255,0.1);height:100%">
                    <div style="background-color:rgba(255,0,0,0.1);height:100%"></div>
                  </div>
                `))}
              </div>
            </div>
          `);
        }
      }
    }, 250));
  }
}());