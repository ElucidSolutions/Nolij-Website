"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
  This module defines the React component that
  represents the homepage Connect block.

  Note: this module relies on the Contact
  Message REST module.
*/

/*
  A React component that accepts no properties
  and returns a JSX element that represents the
  Connect Form component.

  Note: the following HTML is copied from the
  HTML feedback from directly.

  <!-- <input class="js-text-full text-full form-text required" data-drupal-selector="edit-subject-0-value" id="edit-subject-0-value" name="subject[0][value]" value="" size="60" maxlength="100" placeholder="" required="required" aria-required="true" type="text"/> -->
*/
var ConnectFormComponent = function (_React$Component) {
  _inherits(ConnectFormComponent, _React$Component);

  function ConnectFormComponent(props) {
    _classCallCheck(this, ConnectFormComponent);

    var _this = _possibleConstructorReturn(this, (ConnectFormComponent.__proto__ || Object.getPrototypeOf(ConnectFormComponent)).call(this, props));

    _this.nameFieldElement = React.createRef();
    _this.emailFieldElement = React.createRef();
    _this.organizationFieldElement = React.createRef();
    _this.subjectFieldElement = React.createRef();
    _this.messageFieldElement = React.createRef();
    _this.submit = _this.submit.bind(_this);
    return _this;
  }

  /*
    Accepts no arguments and uses the Contact
    Message REST module to submit the Connect
    form.
  */


  _createClass(ConnectFormComponent, [{
    key: "submit",
    value: function submit() {
      /*
          jQuery.post (
            '/entity/contact_message',
            {
              'field_connect_name[0][value]': [{'value': this.nameFieldElement.current.value}],
              'field_connect_email[0][value]': [{'value': this.emailFieldElement.current.value}],
              'field_connect_organization[0][value]': [{'value': this.organizationFieldElement.current.value}],
              'subject[0][value]': [{'value': this.subjectFieldElement.current.value}],
              'message[0][value]': [{'value': this.messageFieldElement.current.value}]
            },
            function (data, status) {
              console.log ('message sent');
          });
      */
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { "class": "nolij-connect-form-container" },
        React.createElement(
          "div",
          { "class": "nolij-connect-right-header" },
          React.createElement(
            "h2",
            { "class": "nolij-connect-right-title" },
            "Your Message to ",
            React.createElement(
              "strong",
              null,
              "Nolij Consulting"
            )
          )
        ),
        React.createElement(
          "div",
          { "class": "nolij-connect-right-body" },
          React.createElement(
            "form",
            { onSubmit: this.submit, "class": "contact-message-feedback-form contact-message-form contact-form", "data-drupal-selector": "contact-message-feedback-form", action: "/contact/feedback", method: "post", id: "contact-message-feedback-form", "accept-charset": "UTF-8", "data-drupal-form-fields": "edit-field-connect-name-0-value,edit-field-connect-organization-0-value,edit-field-connect-email-0-value,edit-subject-0-value,edit-message-0-value,edit-submit,edit-preview" },
            React.createElement(
              "div",
              { "class": "field--type-string field--name-field-connect-name field--widget-string-textfield js-form-wrapper form-wrapper", "data-drupal-selector": "edit-field-connect-name-wrapper", id: "edit-field-connect-name-wrapper" },
              React.createElement(
                "div",
                { "class": "js-form-item form-item js-form-type-textfield form-item-field-connect-name-0-value js-form-item-field-connect-name-0-value elucid_textfield" },
                React.createElement(
                  "label",
                  { "for": "edit-field-connect-name-0-value", "class": "js-form-required form-required" },
                  "Your Name"
                ),
                React.createElement("input", { ref: this.nameFieldElement, "class": "js-text-full text-full form-text required", "data-drupal-selector": "edit-field-connect-name-0-value", id: "edit-field-connect-name-0-value", name: "field_connect_name[0][value]", size: "60", maxlength: "255", placeholder: "", required: "required", "aria-required": "true", type: "text" }),
                React.createElement("div", { "class": "elucid-error-messages" })
              )
            ),
            React.createElement("input", { autocomplete: "off", "data-drupal-selector": "form-7dchn-5i07xosrd2wqwsexvgbl8ioxkrsruxarqin9e", name: "form_build_id", value: "form-7dchn_5i07xOSrD2WqWseXvgBl8iOxkrSrUxARQIn9E", type: "hidden" }),
            React.createElement("input", { "data-drupal-selector": "edit-contact-message-feedback-form-form-token", name: "form_token", value: "ZfwzZG_-74dxiskL60HXMxTE0yq2LVpMwTq5_b2Ugo8", type: "hidden" }),
            React.createElement("input", { "data-drupal-selector": "edit-contact-message-feedback-form", name: "form_id", value: "contact_message_feedback_form", type: "hidden" }),
            React.createElement(
              "div",
              { "class": "field--type-string field--name-field-connect-organization field--widget-string-textfield js-form-wrapper form-wrapper", "data-drupal-selector": "edit-field-connect-organization-wrapper", id: "edit-field-connect-organization-wrapper" },
              React.createElement(
                "div",
                { "class": "js-form-item form-item js-form-type-textfield form-item-field-connect-organization-0-value js-form-item-field-connect-organization-0-value elucid_textfield" },
                React.createElement(
                  "label",
                  { "for": "edit-field-connect-organization-0-value", "class": "js-form-required form-required" },
                  "Your Organization"
                ),
                React.createElement("input", { ref: this.orgnizationFieldElement, "class": "js-text-full text-full form-text required", "data-drupal-selector": "edit-field-connect-organization-0-value", id: "edit-field-connect-organization-0-value", name: "field_connect_organization[0][value]", size: "60", maxlength: "255", placeholder: "", required: "required", "aria-required": "true", type: "text" }),
                React.createElement("div", { "class": "elucid-error-messages" })
              )
            ),
            React.createElement(
              "div",
              { "class": "field--type-email field--name-field-connect-email field--widget-email-default js-form-wrapper form-wrapper", "data-drupal-selector": "edit-field-connect-email-wrapper", id: "edit-field-connect-email-wrapper" },
              React.createElement(
                "div",
                { "class": "js-form-item form-item js-form-type-email form-item-field-connect-email-0-value js-form-item-field-connect-email-0-value elucid_textfield" },
                React.createElement(
                  "label",
                  { "for": "edit-field-connect-email-0-value", "class": "js-form-required form-required" },
                  "Email Address"
                ),
                React.createElement("input", { ref: this.emailFieldElement, "data-drupal-selector": "edit-field-connect-email-0-value", id: "edit-field-connect-email-0-value", name: "field_connect_email[0][value]", size: "60", maxlength: "254", placeholder: "", "class": "form-email required", required: "required", "aria-required": "true", type: "email" }),
                React.createElement("div", { "class": "elucid-error-messages" })
              )
            ),
            React.createElement("div", { "class": "field--type-language field--name-langcode field--widget-language-select js-form-wrapper form-wrapper", "data-drupal-selector": "edit-langcode-wrapper", id: "edit-langcode-wrapper" }),
            React.createElement(
              "div",
              { "class": "field--type-string field--name-subject field--widget-string-textfield js-form-wrapper form-wrapper", "data-drupal-selector": "edit-subject-wrapper", id: "edit-subject-wrapper" },
              React.createElement(
                "div",
                { "class": "js-form-item form-item js-form-type-textfield form-item-subject-0-value js-form-item-subject-0-value elucid_textfield" },
                React.createElement(
                  "label",
                  { "for": "edit-subject-0-value", "class": "js-form-required form-required" },
                  "Subject"
                ),
                React.createElement("input", { ref: this.subjectFieldElement, "class": "js-text-full text-full form-text required", "data-drupal-selector": "edit-subject-0-value", id: "edit-subject-0-value", name: "subject[0][value]", size: "60", maxlength: "100", placeholder: "", required: "required", "aria-required": "true", type: "text" }),
                React.createElement("div", { "class": "elucid-error-messages" })
              )
            ),
            React.createElement(
              "div",
              { "class": "field--type-string-long field--name-message field--widget-string-textarea js-form-wrapper form-wrapper", "data-drupal-selector": "edit-message-wrapper", id: "edit-message-wrapper" },
              React.createElement(
                "div",
                { "class": "js-form-item form-item js-form-type-textarea form-item-message-0-value js-form-item-message-0-value elucid_textfield" },
                React.createElement(
                  "label",
                  { "for": "edit-message-0-value" },
                  "Please send us a brief message and we will get back to you soon."
                ),
                React.createElement(
                  "div",
                  null,
                  React.createElement("textarea", { ref: this.messageFieldElement, "class": "js-text-full text-full form-textarea", "data-drupal-selector": "edit-message-0-value", id: "edit-message-0-value", name: "message[0][value]", rows: "12", cols: "60", placeholder: "" })
                ),
                React.createElement("div", { "class": "elucid-error-messages" })
              )
            ),
            React.createElement(
              "div",
              { "data-drupal-selector": "edit-actions", "class": "form-actions js-form-wrapper form-wrapper", id: "edit-actions" },
              React.createElement("input", { "data-drupal-selector": "edit-submit", id: "edit-submit", name: "op", value: "Send", "class": "button button--primary js-form-submit form-submit", type: "submit" })
            )
          )
        )
      );
    }
  }]);

  return ConnectFormComponent;
}(React.Component);

/*
  A React component that accepts no properties
  and returns a JSX element that represents the
  Connect block.
*/


function ConnectBlockComponent() {
  return React.createElement(
    "div",
    { "data-nolij-id": "connect", "class": "nolij-connect-container" },
    React.createElement(
      "div",
      { "class": "nolij-connect-component" },
      React.createElement(
        "div",
        { "class": "nolij-connect-left" },
        React.createElement(
          "div",
          { "class": "nolij-connect-left-header" },
          React.createElement(
            "h2",
            { "class": "nolij-connect-left-title" },
            "Ready to Get ",
            React.createElement(
              "strong",
              null,
              "Started?"
            )
          )
        ),
        React.createElement(
          "div",
          { "class": "nolij-connect-left-body" },
          React.createElement(
            "p",
            { "class": "nolij-connect-left-lead" },
            "Let's connect."
          )
        )
      ),
      React.createElement(
        "div",
        { "class": "nolij-connect-right" },
        React.createElement(ConnectFormComponent, null)
      )
    )
  );
}
