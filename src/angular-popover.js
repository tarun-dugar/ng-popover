(function() {

	var app = angular.module('angular-popover', [])

	app.directive('angularPopover', [function() {
		return {
			restrict: 'A',
			transclude: true,
			scope: true,
			template: '<div class="angular-popover-container"><div class="angular-popover hide-popover-element" ng-include="getContentPopover()"></div><div class="angular-popover-triangle hide-popover-element" ng-class="getTriangleClass()"></div></div><ng-transclude></ng-transclude>',
			link: function(scope, element, attrs) {
				//the root div of the popup template
				var popover_container = element[0].querySelector('.angular-popover-container'), 
					popover, //the popover element
					parent_height, //height of the element to which the directive is attached
					parent_width, //width of the element to which the directive is attached
					popover_height, //height of the popover
					popover_width, //width of the popover
					triangle, //the small triangle attached with the popover
					triangle_height, //vertical height of the triangle
					triangle_diagonal, //base of the triangle
					triangle_div_side = 15, //side of the triangle
					triangle_rect_div_side = 30; //the div which has been rotated to make a triangle using the after pseudo class

				triangle_height = Math.sqrt(triangle_div_side*triangle_div_side/2);
				triangle_diagonal = Math.sqrt(triangle_div_side*triangle_div_side*2);

				//return the path of the popover template
				scope.getContentPopover = function() {
					return attrs.template;	
				}

				//depending upon the direction specified, attached the appropriate class to the popover 
				scope.getTriangleClass = function() {
					return 'angular-popover-triangle-' + attrs.direction;
				}

				//listen for click on the directive element
				element[0].addEventListener('click', function() {
					//get height of the directive element
					parent_height = element[0].clientHeight;

					//move the popover container to the bottom of the directive element
					popover_container.style.top = parent_height + 'px';

					//get height of the directive element
					parent_width = element[0].clientWidth;

					//get the popover element
					popover = element[0].querySelector('.angular-popover');

					//get the triangle element
					triangle = element[0].querySelector('.angular-popover-triangle');

					//hide/show popover
					popover.classList.toggle('hide-popover-element');

					//hide/show triangle
					triangle.classList.toggle('hide-popover-element');

					//when visible add animation to popup parent container
					popover_container.classList.toggle('popover-animation');

					//when visible add animation to popup parent container
					popover_container.classList.toggle('popover-floating-animation-' + attrs.direction);

					//get height of popover
					popover_height = popover.clientHeight;

					//get width of popover
					popover_width = popover.clientWidth;

					//check direction and calculate position for appending popover and triangle
					switch(attrs.direction) {
						case 'top' : 
									popover.style.top = (-parent_height - popover_height - triangle_height) + 'px';
									popover.style.left = ((parent_width - popover_width)/2) + 'px';
									triangle.style.top = (-parent_height - triangle_height) + 'px';
									triangle.style.left = ((parent_width - triangle_rect_div_side)/2) + 'px';
									break; 

						case 'bottom': 
									popover.style.top = triangle_height + 'px';
									popover.style.left = ((parent_width - popover_width)/2) + 'px';
									triangle.style.top = -(triangle_rect_div_side - triangle_height) + 'px';
									triangle.style.left = ((parent_width - triangle_rect_div_side)/2) + 'px';
									break;

						case 'right': 
									popover.style.top = ((parent_height - popover_height)/2 - parent_height) + 'px';
									popover.style.left = parent_width + triangle_height + 'px';
									triangle.style.top = ((parent_height - triangle_rect_div_side)/2 - parent_height) + 'px';
									triangle.style.left = (parent_width - (triangle_rect_div_side - triangle_height)) + 'px';
									break;

						case 'left': 
									popover.style.top = ((parent_height - popover_height)/2 - parent_height) + 'px';
									popover.style.right = triangle_height + 'px';
									triangle.style.top = ((parent_height - triangle_rect_div_side)/2 - parent_height) + 'px';
									triangle.style.left = -triangle_height + 'px'; 
									break;
					}
				})
			}
		}
	}])
})();