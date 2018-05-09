"use strict";

/*
  This module defines the React component that
  represents the homepage clients block.
*/

/*
  A React component that accepts three
  properties:

  * image, a URL string that reference an
    image file
  * label, a string
  * acronym, a string

  and returns a JSX element that represents a
  client entry.
*/
function ClientComponent(props) {
  return React.createElement(
    "div",
    { "class": "nolij-clients-client" },
    React.createElement(
      "div",
      { "class": "nolij-clients-client-logo" },
      React.createElement("img", { "class": "nolij-clients-client-logo-img", src: props.image })
    ),
    React.createElement(
      "div",
      { "class": "nolij-clients-client-label" },
      props.label,
      React.createElement("br", null),
      React.createElement(
        "span",
        { "class": "nolij-clients-client-acronym" },
        "(",
        props.acronym,
        ")"
      )
    )
  );
}

/*
  A React component that accepts no properties
  and returns a JSX element that represents the
  Clients block.
*/
function ClientsBlockComponent() {
  var clients = [{
    'image': '/themes/elucid/components/clients/images/client-logo-mhs.png',
    'label': 'Military Health System',
    'acronym': 'MHS'
  }, {
    'image': '/themes/elucid/components/clients/images/client-logo-dod.png',
    'label': 'Department of Defense',
    'acronym': 'DOD'
  }, {
    'image': '/themes/elucid/components/clients/images/client-logo-dha.png',
    'label': 'Defense Health Agency',
    'acronym': 'DHA'
  }, {
    'image': '/themes/elucid/components/clients/images/client-logo-va.png',
    'label': 'Veterans Affairs',
    'acronym': 'VA'
  }, {
    'image': '/themes/elucid/components/clients/images/client-logo-doe.png',
    'label': 'Department of Energy',
    'acronym': 'DOE'
  }, {
    'image': '/themes/elucid/components/clients/images/client-logo-gsa.png',
    'label': 'General Services Administration',
    'acronym': 'GSA'
  }, {
    'image': '/themes/elucid/components/clients/images/client-logo-blm.png',
    'label': 'Bureau of Land Management',
    'acronym': 'BLM'
  }, {
    'image': '/themes/elucid/components/clients/images/client-logo-cdc.png',
    'label': 'Center for Disease Control and Prevention',
    'acronym': 'CDC'
  }];
  return React.createElement(
    "div",
    { "data-nolij-id": "clients", "class": "nolij-clients-container" },
    React.createElement(
      "div",
      { "class": "nolij-clients-component" },
      React.createElement(
        "div",
        { "class": "nolij-clients-header" },
        React.createElement(
          "h2",
          { "class": "nolij-clients-title" },
          "Our ",
          React.createElement(
            "strong",
            null,
            "Clients"
          )
        )
      ),
      React.createElement(
        "div",
        { "class": "nolij-clients-body" },
        React.createElement(
          "p",
          { "class": "nolij-clients-lead" },
          "Our mission is to understand the challenges and goals of our clients, address them with innovative business solutions, and work closely together to achieve project success."
        ),
        React.createElement(
          "div",
          { "class": "nolij-clients-card" },
          clients.map(function (client) {
            return React.createElement(ClientComponent, {
              image: client.image,
              label: client.label,
              acronym: client.acronym });
          })
        )
      )
    )
  );
}
