"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
  This module defines the React component that
  represents the homepage hero block.
*/

/*
  A React component that accepts no properties
  and returns a JSX element that represents the
  homepage hero block.
*/
var HomepageHeroComponent = function (_React$Component) {
  _inherits(HomepageHeroComponent, _React$Component);

  function HomepageHeroComponent(props) {
    _classCallCheck(this, HomepageHeroComponent);

    var _this = _possibleConstructorReturn(this, (HomepageHeroComponent.__proto__ || Object.getPrototypeOf(HomepageHeroComponent)).call(this, props));

    _this.scroll = _this.scroll.bind(_this);
    return _this;
  }

  _createClass(HomepageHeroComponent, [{
    key: "scroll",
    value: function scroll() {
      var targetElement = jQuery(this.props.target);
      jQuery('html, body').animate({
        scrollTop: targetElement.offset().top - 100
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { "class": "nolij-hero-container" },
        React.createElement(
          "div",
          { "class": "nolij-hero-component" },
          React.createElement(
            "div",
            { "class": "nolij-hero-component-content" },
            React.createElement(
              "div",
              { "class": "nolij-hero-component-overlay" },
              React.createElement(
                "div",
                { "class": "nolij-hero-component-overlay-header" },
                React.createElement(
                  "h2",
                  { "class": "nolij-hero-component-overlay-title" },
                  "We connect your people, processes, and technology."
                )
              ),
              React.createElement(
                "div",
                { "class": "nolij-hero-component-overlay-body" },
                React.createElement(
                  "p",
                  { "class": "nolij-hero-component-overlay-lead" },
                  "This is a placeholder statement that supports the placeholder statement above. This ultimately should be supported by the placeholder imagine behind. What doe Nolij do for clients?"
                )
              ),
              React.createElement(
                "div",
                { "class": "nolij-hero-component-overlay-footer" },
                React.createElement(
                  "div",
                  {
                    "class": "nolij-hero-component-overlay-button"
                  },
                  "Let's Connect"
                )
              )
            ),
            React.createElement(
              "div",
              { "class": "nolij-hero-component-scroll-overlay" },
              React.createElement(
                "div",
                {
                  "class": "nolij-hero-component-scroll-overlay-tab",
                  onClick: this.scroll
                },
                "Scroll",
                React.createElement("br", null),
                "Down"
              )
            )
          )
        ),
        React.createElement(
          "video",
          { playsinline: "true", autoplay: "true", muted: "true", loop: "true", poster: "/themes/elucid/components/hero/images/video-placeholder.jpg", id: "bgvideo", width: "x", height: "y" },
          React.createElement("source", { src: "/themes/elucid/components/hero/video/banner-video.mp4", type: "video/mp4" })
        )
      );
    }
  }]);

  return HomepageHeroComponent;
}(React.Component);
