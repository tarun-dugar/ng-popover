# angular-popover
Beautiful multidirectional popover directive with custom popover template content.

Description
-----------
A simple AngularJS(1.x) directive which renders a popover with:

  1. option for defining a custom template for the popover
  2. option for specifying the direction of the popover - top, bottom, left, right.
  3. box shadow and floating, wiggly effect.
  4. Currently, supports only click, but will include mouseover soon.
  
Installation
-----
```code
npm install ng-popover
```

Usage
-----
  1. Include angular-popover.js(or min.js) after loading AngularJS.
  2. Add the angular-popover module to your project:
  
    ```javascript
    var app = angular.module('yourModuleName', ['angular-popover'])
    ```
  3. Add the angular-popover directive along with attributes - 'direction' and 'template':
  
    ```html
    <div angular-popover direction="top" template="<your template path>">
    ```
  4. **IMPORTANT**: Keep in mind the element to which you are applying the directive has to be positioned - fixed, absolute or relative. This is a limitation currently. 
