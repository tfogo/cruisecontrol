angular.module('cruisecontrolApp').directive('friendSideBar', function(){


	return function(scope, element, attrs){
		var friends = $(element).find(".friends");

		friends.draggable({
			cursor: "move",
			stop: function() {
            	var copy = $(this);
            	var parent = $('<div class="list-group ng-scope" ng-repeat="friend in friends" friend-side-bar=""><a href="#" class="list-group-item friends ui-draggable">' + copy.html() + '</a></div>');	
            	$(this).remove();
            	angular.element('.header').append(parent);

    //         	//get id and stick it in data
    //         	var data = 1;
 			// 	$http.post('/api/addtofeed', data).success(function(feed) {
				//   	//get result and append to feed $('.feed').append(feed);
				// });



			   
            }
		});



		// angular.element(".friends").on('mouseover'(function(event) {
		// 	alert("awdwadwadwad");
		// }));
	};
});