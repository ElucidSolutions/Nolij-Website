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
                { "class": "nolij-vehicles-component-left-card-title nolij-vehicles-component-card-title" },
                "Contract ",
                React.createElement(
                  "strong",
                  null,
                  "Vehicles"
                )
              )
            ),
            React.createElement(
              "div",
              { "class": "nolij-vehicles-component-left-card-body" },
              React.createElement(
                "ul",
                { "class": "nolij-vehicles-component-vehicles-list" },
                React.createElement(
                  "li",
                  { "class": "nolij-vehicles-component-vehicles-list-item" },
                  "GSA ",
                  React.createElement(
                    "strong",
                    null,
                    "IT70"
                  )
                ),
                React.createElement(
                  "li",
                  { "class": "nolij-vehicles-component-vehicles-list-item" },
                  "GSA ",
                  React.createElement(
                    "strong",
                    null,
                    "Alliant Small Business"
                  ),
                  " ",
                  React.createElement(
                    "span",
                    { "class": "nolij-light" },
                    "(ASB)"
                  )
                ),
                React.createElement(
                  "li",
                  { "class": "nolij-vehicles-component-vehicles-list-item" },
                  "GSA ",
                  React.createElement(
                    "strong",
                    null,
                    "Professional Services Schedule"
                  ),
                  " ",
                  React.createElement(
                    "span",
                    { "class": "nolij-light" },
                    "(PSS)"
                  )
                ),
                React.createElement(
                  "li",
                  { "class": "nolij-vehicles-component-vehicles-list-item" },
                  React.createElement(
                    "div",
                    null,
                    "CIOSP3 ",
                    React.createElement(
                      "strong",
                      null,
                      "Small Business"
                    )
                  ),
                  React.createElement(
                    "div",
                    null,
                    React.createElement(
                      "a",
                      { "class": "nolij-vehicles-component-vehicles-link" },
                      "Learn more about our CIOSP3 contract vehicles"
                    )
                  )
                )
              )
            ),
            React.createElement(
              "div",
              { "class": "nolij-vehicles-component-left-card-footer" },
              React.createElement(
                "span",
                { "class": "nolij-vehicles-component-duns" },
                React.createElement(
                  "strong",
                  null,
                  "DUNS"
                ),
                " 020264787"
              ),
              React.createElement(
                "span",
                { "class": "nolij-vehicles-component-cage" },
                React.createElement(
                  "strong",
                  null,
                  "CAGE"
                ),
                " 6VTS1"
              )
            )
          ),
          React.createElement(
            "div",
            { "class": "nolij-vehicles-component-right-card" },
            React.createElement(
              "div",
              { "class": "nolij-vehicles-component-right-card-header" },
              React.createElement(
                "h3",
                { "class": "nolij-vehicles-component-right-card-title nolij-vehicles-component-card-title" },
                "Certificates"
              )
            ),
            React.createElement(
              "div",
              { "class": "nolij-vehicles-component-right-card-body" },
              React.createElement(
                "div",
                { "class": "nolij-vehicles-component-cert" },
                React.createElement(
                  "div",
                  { "class": "nolij-vehicles-component-cert-logo" },
                  React.createElement("img", { "class": "nolij-vehicles-component-cert-logo-img nolij-cmmi-logo", alt: "CMMI Logo", src: "/themes/elucid/components/vehicles/images/cmmi-dev-icon.png" })
                ),
                React.createElement(
                  "div",
                  { "class": "nolij-vehicles-component-cert-desc" },
                  "CMMI Level 3",
                  React.createElement("br", null),
                  "(Services)"
                )
              ),
              React.createElement(
                "div",
                { "class": "nolij-vehicles-component-cert" },
                React.createElement(
                  "div",
                  { "class": "nolij-vehicles-component-cert-logo" },
                  React.createElement("img", { "class": "nolij-vehicles-component-cert-logo-img nolij-cmmi-logo", alt: "CMMI Logo", src: "/themes/elucid/components/vehicles/images/cmmi-dev-icon.png" })
                ),
                React.createElement(
                  "div",
                  { "class": "nolij-vehicles-component-cert-desc" },
                  "CMMI Level 3",
                  React.createElement("br", null),
                  "(Development)"
                )
              ),
              React.createElement(
                "div",
                { "class": "nolij-vehicles-component-cert" },
                React.createElement(
                  "div",
                  { "class": "nolij-vehicles-component-cert-logo" },
                  React.createElement("img", { "class": "nolij-vehicles-component-cert-logo-img nolij-iso-logo", alt: "ISO Logo", src: "/themes/elucid/components/vehicles/images/iso-logo.png" })
                ),
                React.createElement(
                  "div",
                  { "class": "nolij-vehicles-component-cert-desc" },
                  "ISO 9001:2015"
                )
              )
            )
          )
        )
      )
    )
  );
}
