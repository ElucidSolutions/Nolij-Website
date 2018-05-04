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
        families: ['Roboto:300,400,600,700', 'Raleway:300,400,600,700']
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
      React.createElement(HomepageHeroComponent, {
        target: '.nolij-services-container'
      }),
      React.createElement(ServicesComponent, null),
      React.createElement(VehiclesComponent, null),
      React.createElement(ClientsBlockComponent, null),
      React.createElement(ApplyBlockComponent, null)
    );
  }
})(jQuery);
