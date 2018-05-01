"use strict";

/*
  This module defines the React component that
  represents the contract vehicles block on
  the homepage.
*/

/*
  A react component that accepts no properties
  and returns a JSX element that represents the
  contract vehicles block.
*/
function VehiclesComponent() {
  return React.createElement(
    "div",
    { "class": "nolij-vehicles-container" },
    React.createElement(
      "div",
      { "class": "nolij-vehicles-component" },
      React.createElement(
        "div",
        { "class": "nolij-vehicles-component-header" },
        React.createElement(
          "h2",
          { "class": "nolij-vehicles-component-title" },
          "Let's Work ",
          React.createElement(
            "strong",
            null,
            "Together"
          )
        )
      ),
      React.createElement(
        "div",
        { "class": "nolij-vehicles-component-body" },
        React.createElement(
          "div",
          { "class": "nolij-vehicles-component-lead" },
          React.createElement(
            "p",
            null,
            "Our contract vehicles allow our clients and teaming partners to access our services easily. Read our sole source guide to see how to get to us directly."
          )
        ),
        React.createElement(
          "div",
          { "class": "nolij-vehicles-component-details" },
          React.createElement(
            "div",
            { "class": "nolij-vehicles-component-left-card" },
            React.createElement(
              "div",
              { "class": "nolij-vehicles-component-left-card-header" },
              React.createElement(
                "h3",
                { "class": "nolij-vehicles-component-left-card-title" },
                "Contract Vehicles"
              )
            ),
            React.createElement("div", { "class": "nolij-vehicles-component-left-card-body" }),
            React.createElement(
              "div",
              { "class": "nolij-vehicles-component-left-card-footer" },
              React.createElement(
                "span",
                { "class": "nolij-vehicles-component-duns" },
                "DUNS 020264787"
              ),
              React.createElement(
                "span",
                { "class": "nolij-vehicles-component-cage" },
                "6VTS1"
              )
            )
          ),
          React.createElement(
            "div",
            { "class": "nolij-vehicles-component-right-card" },
            React.createElement("div", { "class": "nolij-vehicles-component-right-card-header" })
          )
        )
      )
    )
  );
}
