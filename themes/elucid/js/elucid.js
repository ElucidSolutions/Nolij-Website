'use strict';

/*
  Defines the default behavior.
*/
(function ($) {
  $(document).ready(function () {
    init();
  });

  function init() {
    loadFonts();

    // Render the Nolij website app.
    ReactDOM.render(React.createElement(App, null), document.getElementById('nolij-react-app-container'));
  }

  /*
    Loads the fonts used by this theme.
     Note: this function relies on the theme library including
    https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js
  */
  function loadFonts() {
    WebFont.load({
      google: {
        families: ['Open+Sans:300,400,600']
      }
    });
  }

  /*
    Represents the Nolij website app.
  */
  function App(props) {
    return React.createElement(
      'div',
      { 'class': 'nolij-react-app' },
      React.createElement(
        'h1',
        null,
        'React Loaded'
      ),
      React.createElement(VehiclesComponent, null)
    );
  }
})(jQuery);
