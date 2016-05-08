# ng-popover
Fully customizable and easy-to-use AngularJS 1.x directive for elegant multi-directional popovers. Independent of jQuery or any CSS framework.

![alt tag](https://raw.githubusercontent.com/tarun-dugar/ng-popover/gh-pages/angular-popover.png)

Installation
-----
```code
npm install ng-popover
```

Features
-----------
A simple AngularJS(1.x) directive which creates a simple but fully customizable popover. Options:

  1. Use an external template or just a string for the popover content.
  2. Open the popover using either a click or mouseover.
  3. Specify the direction of the popover - top, bottom, left, right.
  4. Decide whether you want to close the popover by click or when the mouse cursor leaves the popover area.
  5. Comes with a box shadow, a triangular tip and a floating effect.

Demo
--------
  http://tarun-dugar.github.io/ng-popover/

Usage
-----
  1. Include angular-popover.js(or min.js) after loading AngularJS.
  2. Include angular-popover.css. 
  3. Add the angular-popover module to your project:
  
    ```javascript
    var app = angular.module('yourModuleName', ['angular-popover'])
    ```
  4. Add the angular-popover directive along with multiple attributes:
  
    ```html
    <div angular-popover direction="top" template="hey there!">
    ```
  5. **IMPORTANT**: Keep in mind the element to which you are applying the directive has to be positioned - fixed, absolute or relative. This is a limitation currently. 
