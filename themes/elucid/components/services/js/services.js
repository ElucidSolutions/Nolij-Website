'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
  This module defines the React component that
  represents the homepage services block.
*/

/*
  A React component that accepts four
  properties:

  * selected, a service ID string
  * serviceId, a service ID string
  * label, a string
  * activeIcon, a URL string that references
    an SVG file
  * inactiveIcon, a URL string that references
    an SVG file
  * onSelect, a function that accepts a
    service ID

  and returns a JSX element that represents a
  service named label having ID serviceId.
*/
var ServicesMenuItemComponent = function (_React$Component) {
  _inherits(ServicesMenuItemComponent, _React$Component);

  function ServicesMenuItemComponent(props) {
    _classCallCheck(this, ServicesMenuItemComponent);

    var _this = _possibleConstructorReturn(this, (ServicesMenuItemComponent.__proto__ || Object.getPrototypeOf(ServicesMenuItemComponent)).call(this, props));

    _this.select = _this.select.bind(_this);
    return _this;
  }

  _createClass(ServicesMenuItemComponent, [{
    key: 'select',
    value: function select() {
      this.props.onSelect(this.props.serviceId);
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        {
          'class': 'nolij-services-menu-item' + (this.props.selected === this.props.serviceId ? ' nolij-services-menu-item-selected' : ''),
          'data-service-id': this.props.serviceId,
          onClick: this.select
        },
        React.createElement(
          'div',
          { 'class': 'nolij-services-menu-item-icon' },
          React.createElement('img', {
            'class': 'nolij-services-menu-item-icon-img',
            alt: 'Service icon',
            src: this.props.selected === this.props.serviceId ? this.props.activeIcon : this.props.inactiveIcon
          })
        ),
        React.createElement(
          'div',
          { 'class': 'nolij-services-menu-item-label' },
          this.props.label
        )
      );
    }
  }]);

  return ServicesMenuItemComponent;
}(React.Component);

/*
  A React component that accepts two properties:

    * selected, a service ID string
    * onSelect, a callback function that accepts
      a service ID; 

  and returns a JSX element that represents the
  services menu component.
*/


var ServicesMenuComponent = function (_React$Component2) {
  _inherits(ServicesMenuComponent, _React$Component2);

  function ServicesMenuComponent(props) {
    _classCallCheck(this, ServicesMenuComponent);

    return _possibleConstructorReturn(this, (ServicesMenuComponent.__proto__ || Object.getPrototypeOf(ServicesMenuComponent)).call(this, props));
  }

  _createClass(ServicesMenuComponent, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { 'class': 'nolij-services-menu-component' },
        React.createElement(ServicesMenuItemComponent, {
          selected: this.props.selected,
          serviceId: 'it-operations',
          label: 'IT Operations',
          activeIcon: '/themes/elucid/components/services/images/it-operations-icon-active.svg',
          inactiveIcon: '/themes/elucid/components/services/images/it-operations-icon-inactive.svg',
          onSelect: this.props.onSelect
        }),
        React.createElement(ServicesMenuItemComponent, {
          selected: this.props.selected,
          serviceId: 'software-development',
          label: 'Software Development',
          activeIcon: '/themes/elucid/components/services/images/software-development-icon-active.svg',
          inactiveIcon: '/themes/elucid/components/services/images/software-development-icon-inactive.svg',
          onSelect: this.props.onSelect
        }),
        React.createElement(ServicesMenuItemComponent, {
          selected: this.props.selected,
          serviceId: 'program-management',
          label: 'Program Management',
          activeIcon: '/themes/elucid/components/services/images/program-management-icon-active.svg',
          inactiveIcon: '/themes/elucid/components/services/images/program-management-icon-inactive.svg',
          onSelect: this.props.onSelect
        }),
        React.createElement(ServicesMenuItemComponent, {
          selected: this.props.selected,
          serviceId: 'acquisition-support',
          label: 'Acquisition Support',
          activeIcon: '/themes/elucid/components/services/images/acquisition-support-icon-active.svg',
          inactiveIcon: '/themes/elucid/components/services/images/acquisition-support-icon-inactive.svg',
          onSelect: this.props.onSelect
        }),
        React.createElement(ServicesMenuItemComponent, {
          selected: this.props.selected,
          serviceId: 'training',
          label: 'Training',
          activeIcon: '/themes/elucid/components/services/images/training-icon-active.svg',
          inactiveIcon: '/themes/elucid/components/services/images/training-icon-inactive.svg',
          onSelect: this.props.onSelect
        }),
        React.createElement(ServicesMenuItemComponent, {
          selected: this.props.selected,
          serviceId: 'human-resources',
          label: 'Human Capital and Human Resources',
          activeIcon: '/themes/elucid/components/services/images/human-capital-icon-active.svg',
          inactiveIcon: '/themes/elucid/components/services/images/human-capital-icon-inactive.svg',
          onSelect: this.props.onSelect
        })
      );
    }
  }]);

  return ServicesMenuComponent;
}(React.Component);

/*
  A React component accepts three properties:

  * selected, a service ID string
  * serviceId, a service ID string
  * label, a service title string

  and returns a JSX element that represents
  a service that contains the content.
*/


function ServicesDetailComponent(props) {
  return React.createElement(
    'div',
    {
      'class': 'nolij-services-detail' + (props.selected === props.serviceId ? ' nolij-services-detail-selected' : ''),
      'data-service-id': props.serviceId
    },
    React.createElement(
      'div',
      { 'class': 'nolij-services-detail-header' },
      React.createElement(
        'h2',
        { 'class': 'nolij-services-detail-title' },
        props.label
      )
    ),
    React.createElement(
      'div',
      { 'class': 'nolij-services-detail-body' },
      props.children
    )
  );
}

/*
  A React component accepts one property:
  selected, a service ID string; and returns
  a JSX element that represents the services
  details component.
*/
function ServicesDetailsComponent(props) {
  return React.createElement(
    'div',
    { 'class': 'nolij-services-details' },
    React.createElement(
      ServicesDetailComponent,
      {
        selected: props.selected,
        serviceId: 'it-operations',
        label: 'IT Operations'
      },
      React.createElement(
        'p',
        { 'class': 'nolij-services-detail-lead' },
        'This is a placeholder for IT operations.'
      ),
      React.createElement(
        'ul',
        { 'class': 'nolij-services-detail-list' },
        React.createElement(
          'li',
          { 'class': 'nolij-services-detail-list-item' },
          'IV&V'
        )
      )
    ),
    React.createElement(
      ServicesDetailComponent,
      {
        selected: props.selected,
        serviceId: 'software-development',
        label: 'Software Development'
      },
      React.createElement(
        'p',
        { 'class': 'nolij-services-detail-lead' },
        'This is a placeholder for Software Development.'
      )
    ),
    React.createElement(
      ServicesDetailComponent,
      {
        selected: props.selected,
        serviceId: 'program-management',
        label: 'Program Management'
      },
      React.createElement(
        'p',
        { 'class': 'nolij-services-detail-lead' },
        'This is a placeholder for Program Management.'
      )
    ),
    React.createElement(
      ServicesDetailComponent,
      {
        selected: props.selected,
        serviceId: 'acquisition-support',
        label: 'Acquisition Support'
      },
      React.createElement(
        'p',
        { 'class': 'nolij-services-detail-lead' },
        'This is a placeholder for Acquisition Support.'
      )
    ),
    React.createElement(
      ServicesDetailComponent,
      {
        selected: props.selected,
        serviceId: 'training',
        label: 'Training'
      },
      React.createElement(
        'p',
        { 'class': 'nolij-services-detail-lead' },
        'This is a placeholder for Training.'
      )
    ),
    React.createElement(
      ServicesDetailComponent,
      {
        selected: props.selected,
        serviceId: 'human-resources',
        label: 'Human Capital and Human Resources'
      },
      React.createElement(
        'p',
        { 'class': 'nolij-services-detail-lead' },
        'This is a placeholder for Human Capital and Human Resources.'
      )
    )
  );
}

/*
  A React component that accepts no properties
  and returns a JSX element that represents the
  homepage services block.
*/

var ServicesComponent = function (_React$Component3) {
  _inherits(ServicesComponent, _React$Component3);

  function ServicesComponent(props) {
    _classCallCheck(this, ServicesComponent);

    var _this3 = _possibleConstructorReturn(this, (ServicesComponent.__proto__ || Object.getPrototypeOf(ServicesComponent)).call(this, props));

    _this3.state = {
      'selected': 'it-operations'
    };
    _this3.select = _this3.select.bind(_this3);
    return _this3;
  }

  _createClass(ServicesComponent, [{
    key: 'select',
    value: function select(serviceId) {
      this.setState({
        'selected': serviceId
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { 'class': 'nolij-services-container' },
        React.createElement(
          'div',
          { 'class': 'nolij-services-component' },
          React.createElement(
            'div',
            { 'class': 'nolij-services-header' },
            React.createElement(
              'h2',
              { 'class': 'nolij-services-title' },
              'Our Services'
            )
          ),
          React.createElement(
            'div',
            { 'class': 'nolij-services-body' },
            React.createElement(
              'p',
              { 'class': 'nolij-services-lead' },
              'Nolij Consulting LLC is an ',
              React.createElement(
                'strong',
                null,
                'Economically Disadvantaged Woman Owned Small Business (EDWOSB)'
              ),
              ' with a focus on health care, technology, training, and marketing. We work closely with our clients to achieve project success.'
            ),
            React.createElement(
              'div',
              { 'class': 'nolij-services-table' },
              React.createElement(
                'div',
                { 'class': 'nolij-services-table-left' },
                React.createElement(ServicesMenuComponent, {
                  selected: this.state.selected,
                  onSelect: this.select
                })
              ),
              React.createElement(
                'div',
                { 'class': 'nolij-services-table-right' },
                React.createElement(ServicesDetailsComponent, {
                  selected: this.state.selected
                })
              )
            )
          )
        )
      );
    }
  }]);

  return ServicesComponent;
}(React.Component);
