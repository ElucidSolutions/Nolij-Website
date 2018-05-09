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
      React.createElement(ApplyBlockComponent, null),
      React.createElement(ConnectBlockComponent, null)
    );
  }
})(jQuery);

jQuery(window).bind('hashchange', function () {
  var url = location.hash;
  page_scroll(url);
});

/*
  Accepts one argument: url, a URI object that
  represents the current page URL; and scrolls
  the viewport to either the top of the page or
  the element referenced by the nested fragment
  identifier (if any).
*/
function page_scroll(url) {
  var fragmentId = getFragmentFromURL(url) || 'top';
  var fragmentElement = jQuery('[data-nolij-id=' + fragmentId + ']');

  if (fragmentElement.length > 0) {
    jQuery('html, body').animate({
      scrollTop: fragmentElement.offset().top
    });
  }
}

/*
  Accepts a Content URL as a URI object and
  returns the nested fragment identifier as
  a string.

  Note: ID's may contain nested fragment
  identifiers which can be used to create
  fragment links within pages.
*/
function getFragmentFromURL(url) {
  return url.split('#')[1];
}
