(function() {
	
	var app = angular.module('angular-popover', [])

	app.directive('angularPopover', [function() {
		return {
			restrict: 'A',
			scope: {
				direction: '@'
			},
			transclude: true,
			template: '<ng-transclude></ng-transclude><div class="angular-popover-container"><div class="angular-popover hide-popover-element" ng-include="getContentPopover()"></div><div class="angular-popover-triangle hide-popover-element" ng-class="getTriangleClass()"></div></div>',
			link: function(scope, element, attrs) {
				var popover_container = element[0].querySelector('.angular-popover-container'), 
					popover, parent_height, 
					parent_width, popover_height, 
					popover_width, triangle, 
					triangle_height, 
					triangle_diagonal, 
					triangle_div_side = 15, 
					triangle_rect_div_side = 30;

				triangle_height = Math.sqrt(triangle_div_side*triangle_div_side/2);
				triangle_diagonal = Math.sqrt(triangle_div_side*triangle_div_side*2);

				//function for returning the path of the popover template
				scope.getContentPopover = function() {
					return attrs.template;	
				}

				scope.getTriangleClass = function() {
					return 'angular-popover-triangle-' + scope.direction;
				}

				element[0].addEventListener('click', function() {
					popover = element[0].querySelector('.angular-popover');
					triangle = element[0].querySelector('.angular-popover-triangle');
					popover.classList.toggle('hide-popover-element');
					triangle.classList.toggle('hide-popover-element');
					popover_container.classList.toggle('popover-animation');
					parent_height = element[0].clientHeight;
					parent_width = element[0].clientWidth;
					popover_height = popover.clientHeight;
					popover_width = popover.clientWidth;
					//check direction and calculate position for appending popover
					switch(scope.direction) {
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