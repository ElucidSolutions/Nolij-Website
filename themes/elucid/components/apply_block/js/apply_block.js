"use strict";

/*
  This module defines the Apply block which is
  displayed on the homepage. This block is a
  simple text block containing a link to the
  application website.
*/

/*
  A React component that accepts no properties
  and returns a JSX element that represents the
  Apply block.
*/
function ApplyBlockComponent() {
  return React.createElement(
    "div",
    { "class": "nolij-apply-container" },
    React.createElement(
      "div",
      { "class": "nolij-apply-component" },
      React.createElement(
        "div",
        { "class": "nolij-apply-component-header" },
        React.createElement(
          "h2",
          { "class": "nolij-apply-component-title" },
          "Join the ",
          React.createElement(
            "strong",
            null,
            "Team"
          )
        )
      ),
      React.createElement(
        "div",
        { "class": "nolij-apply-component-body" },
        React.createElement(
          "div",
          { "class": "nolij-apply-component-lead" },
          React.createElement(
            "p",
            null,
            "Do you like the idea of being a driver on a team of distinction? Do you want to contribute to a growing company which serves our nation\u2019s government and other clients?"
          )
        ),
        React.createElement(
          "div",
          { "class": "nolij-apply-component-card" },
          React.createElement("div", { "class": "nolij-apply-component-card-left" }),
          React.createElement(
            "div",
            { "class": "nolij-apply-component-card-right" },
            React.createElement(
              "div",
              { "class": "nolij-apply-component-card-header" },
              React.createElement(
                "h3",
                { "class": "nolij-apply-component-card-title" },
                "Accelerate Your ",
                React.createElement(
                  "strong",
                  null,
                  "Career"
                )
              )
            ),
            React.createElement(
              "div",
              { "class": "nolij-apply-component-card-body" },
              React.createElement(
                "p",
                null,
                "Do you like the idea of being a driver on a team of distinction? Do you want to contribute to a growing company which serves our nation\u2019s government and other clients?"
              ),
              React.createElement(
                "p",
                null,
                "If so, we want to hear from you."
              ),
              React.createElement(
                "div",
                null,
                React.createElement(
                  "a",
                  { "class": "nolij-apply-component-card-link" },
                  "View jobs and apply"
                )
              )
            )
          )
        )
      )
    )
  );
}
