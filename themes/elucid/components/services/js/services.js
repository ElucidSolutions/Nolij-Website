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
    _this.isSelected = _this.isSelected.bind(_this);
    return _this;
  }

  _createClass(ServicesMenuItemComponent, [{
    key: 'select',
    value: function select() {
      this.props.onSelect(this.props.serviceId);
    }
  }, {
    key: 'isSelected',
    value: function isSelected() {
      return this.props.selected === this.props.serviceId;
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
            src: this.isSelected() ? this.props.activeIcon : this.props.inactiveIcon
          })
        ),
        React.createElement(
          'div',
          { 'class': 'nolij-services-menu-item-label' },
          this.props.label
        ),
        React.createElement(
          'div',
          { 'class': 'nolij-services-menu-item-toggle-icon' },
          React.createElement('img', {
            'class': 'nolij-services-menu-item-toggle-icon-img',
            alt: 'Service toggle icon',
            src: this.isSelected() ? "/themes/elucid/components/services/images/close-icon.svg" : "/themes/elucid/components/services/images/expand-icon.svg"
          })
        )
      );
    }
  }]);

  return ServicesMenuItemComponent;
}(React.Component);

/*
*/


function OperationsServicesMenuItemComponent(props) {
  return React.createElement(ServicesMenuItemComponent, {
    selected: props.selected,
    serviceId: 'it-operations',
    label: 'IT Operations',
    activeIcon: '/themes/elucid/components/services/images/it-operations-icon-active.svg',
    inactiveIcon: '/themes/elucid/components/services/images/it-operations-icon-inactive.svg',
    onSelect: props.onSelect
  });
}

/*
*/
function DevelopmentServicesMenuItemComponent(props) {
  return React.createElement(ServicesMenuItemComponent, {
    selected: props.selected,
    serviceId: 'software-development',
    label: 'Software Development',
    activeIcon: '/themes/elucid/components/services/images/software-development-icon-active.svg',
    inactiveIcon: '/themes/elucid/components/services/images/software-development-icon-inactive.svg',
    onSelect: props.onSelect
  });
}

/*
*/
function ManagementServicesMenuItemComponent(props) {
  return React.createElement(ServicesMenuItemComponent, {
    selected: props.selected,
    serviceId: 'program-management',
    label: 'Program Management',
    activeIcon: '/themes/elucid/components/services/images/program-management-icon-active.svg',
    inactiveIcon: '/themes/elucid/components/services/images/program-management-icon-inactive.svg',
    onSelect: props.onSelect
  });
}

/*
*/
function SupportServicesMenuItemComponent(props) {
  return React.createElement(ServicesMenuItemComponent, {
    selected: props.selected,
    serviceId: 'acquisition-support',
    label: 'Acquisition Support',
    activeIcon: '/themes/elucid/components/services/images/acquisition-support-icon-active.svg',
    inactiveIcon: '/themes/elucid/components/services/images/acquisition-support-icon-inactive.svg',
    onSelect: props.onSelect
  });
}

/*
*/
function TrainingServicesMenuItemComponent(props) {
  return React.createElement(ServicesMenuItemComponent, {
    selected: props.selected,
    serviceId: 'training',
    label: 'Training',
    activeIcon: '/themes/elucid/components/services/images/training-icon-active.svg',
    inactiveIcon: '/themes/elucid/components/services/images/training-icon-inactive.svg',
    onSelect: props.onSelect
  });
}

/*
*/
function ResourcesServicesMenuItemComponent(props) {
  return React.createElement(ServicesMenuItemComponent, {
    selected: props.selected,
    serviceId: 'human-resources',
    label: 'Human Capital and Human Resources',
    activeIcon: '/themes/elucid/components/services/images/human-capital-icon-active.svg',
    inactiveIcon: '/themes/elucid/components/services/images/human-capital-icon-inactive.svg',
    onSelect: props.onSelect
  });
}

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
        React.createElement(OperationsServicesMenuItemComponent, {
          selected: this.props.selected,
          onSelect: this.props.onSelect
        }),
        React.createElement(DevelopmentServicesMenuItemComponent, {
          selected: this.props.selected,
          onSelect: this.props.onSelect
        }),
        React.createElement(ManagementServicesMenuItemComponent, {
          selected: this.props.selected,
          onSelect: this.props.onSelect
        }),
        React.createElement(SupportServicesMenuItemComponent, {
          selected: this.props.selected,
          onSelect: this.props.onSelect
        }),
        React.createElement(TrainingServicesMenuItemComponent, {
          selected: this.props.selected,
          onSelect: this.props.onSelect
        }),
        React.createElement(ResourcesServicesMenuItemComponent, {
          selected: this.props.selected,
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

function OperationsServicesDetailComponent(props) {
  return React.createElement(
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
  );
}

function DevelopmentServicesDetailComponent(props) {
  return React.createElement(
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
  );
}

function ManagementServicesDetailComponent(props) {
  return React.createElement(
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
  );
}

function SupportServicesDetailComponent(props) {
  return React.createElement(
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
  );
}

function TrainingServicesDetailComponent(props) {
  return React.createElement(
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
  );
}

function ResourcesServicesDetailComponent(props) {
  return React.createElement(
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
    React.createElement(OperationsServicesDetailComponent, {
      selected: props.selected }),
    React.createElement(DevelopmentServicesDetailComponent, {
      selected: props.selected }),
    React.createElement(ManagementServicesDetailComponent, {
      selected: props.selected }),
    React.createElement(SupportServicesDetailComponent, {
      selected: props.selected }),
    React.createElement(TrainingServicesDetailComponent, {
      selected: props.selected }),
    React.createElement(ResourcesServicesDetailComponent, {
      selected: props.selected })
  );
}

/*
  A React component that accepts no properties
  and returns a JSX element that represents the
  mobile (accordion) homepage services block.
*/

var ServicesMobileComponent = function (_React$Component3) {
  _inherits(ServicesMobileComponent, _React$Component3);

  function ServicesMobileComponent(props) {
    _classCallCheck(this, ServicesMobileComponent);

    var _this3 = _possibleConstructorReturn(this, (ServicesMobileComponent.__proto__ || Object.getPrototypeOf(ServicesMobileComponent)).call(this, props));

    _this3.componentElement = React.createRef();
    _this3.getDetailElement = _this3.getDetailElement.bind(_this3);
    _this3.expand = _this3.expand.bind(_this3);
    _this3.select = _this3.select.bind(_this3);
    return _this3;
  }

  _createClass(ServicesMobileComponent, [{
    key: 'getDetailElements',
    value: function getDetailElements() {
      return jQuery('.nolij-services-detail', this.componentElement.current);
    }
  }, {
    key: 'getDetailElement',
    value: function getDetailElement(serviceId) {
      return jQuery('.nolij-services-detail[data-service-id="' + serviceId + '"]', this.componentElement.current);
    }
  }, {
    key: 'closeAll',
    value: function closeAll() {
      this.getDetailElements().slideUp();
    }
  }, {
    key: 'expand',
    value: function expand(serviceId) {
      this.getDetailElement(serviceId).slideDown();
    }
  }, {
    key: 'select',
    value: function select(serviceId) {
      this.props.onSelect(serviceId);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.closeAll();
      this.expand(this.props.selected);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (prevProps.selected === this.props.selected) {
        return;
      }
      this.closeAll();
      this.expand(this.props.selected);
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        {
          'class': 'nolij-services-mobile-component',
          ref: this.componentElement
        },
        React.createElement(OperationsServicesMenuItemComponent, {
          selected: this.props.selected,
          onSelect: this.select }),
        React.createElement(OperationsServicesDetailComponent, {
          selected: this.props.selected }),
        React.createElement(DevelopmentServicesMenuItemComponent, {
          selected: this.props.selected,
          onSelect: this.select }),
        React.createElement(DevelopmentServicesDetailComponent, {
          selected: this.props.selected }),
        React.createElement(ManagementServicesMenuItemComponent, {
          selected: this.props.selected,
          onSelect: this.select }),
        React.createElement(ManagementServicesDetailComponent, {
          selected: this.props.selected }),
        React.createElement(SupportServicesMenuItemComponent, {
          selected: this.props.selected,
          onSelect: this.select }),
        React.createElement(SupportServicesDetailComponent, {
          selected: this.props.selected }),
        React.createElement(TrainingServicesMenuItemComponent, {
          selected: this.props.selected,
          onSelect: this.select }),
        React.createElement(TrainingServicesDetailComponent, {
          selected: this.props.selected }),
        React.createElement(ResourcesServicesMenuItemComponent, {
          selected: this.props.selected,
          onSelect: this.select }),
        React.createElement(ResourcesServicesDetailComponent, {
          selected: this.props.selected })
      );
    }
  }]);

  return ServicesMobileComponent;
}(React.Component);

/*
  A React component that accepts no properties
  and returns a JSX element that represents the
  homepage services block.
*/


var ServicesComponent = function (_React$Component4) {
  _inherits(ServicesComponent, _React$Component4);

  function ServicesComponent(props) {
    _classCallCheck(this, ServicesComponent);

    var _this4 = _possibleConstructorReturn(this, (ServicesComponent.__proto__ || Object.getPrototypeOf(ServicesComponent)).call(this, props));

    _this4.state = {
      'selected': 'it-operations'
    };
    _this4.select = _this4.select.bind(_this4);
    return _this4;
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
        { 'data-nolij-id': 'services', 'class': 'nolij-services-container' },
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
            ),
            React.createElement(ServicesMobileComponent, {
              selected: this.state.selected,
              onSelect: this.select
            })
          )
        )
      );
    }
  }]);

  return ServicesComponent;
}(React.Component);
