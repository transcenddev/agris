var $body = $('body');
var $background = $('.background-overlay');
var $menu = $('.static-menu-wrapper');
var $menuItems = $(document).find('.menu-item-static');
var $searchWrapper = $('.search-wrapper');
var $searchFormWrapper = $('.search-form-wrapper');
var $searchSuggestionList = $('.search-suggestions-list');
var $searchSuggestionItems = $searchSuggestionList.children('li');

			function displaySearch() {
				if(! $body.hasClass('search-on')) {
					$body.addClass('search-on');
					// Fade out the menu items
					$menu.velocity({
						opacity: 0
					}, {
						duration:195,
						easing: [20]
					});
					$menuItems.velocity({
						opacity: 0,
						scale: 0.70
					}, {
						duration: 210, 
						easing: [20]
					});
					// Display background overlay
					$background.velocity({
						opacity: 1
					}, {
						duration: 50, 
						easing: "easeInQuad",
						display: "block"
					});
					// Display the search
					$searchWrapper.addClass('search-displayed');
					$searchWrapper.velocity({
						opacity: 1
					}, {
						duration: 200
					});
					$searchFormWrapper.velocity({
						left: '10px',
						opacity:1
					}, {
						duration: 600,
						easing: 'easeOutSine',
      					delay: 175
					});
				  $searchSuggestionItems.velocity('transition.expandIn', {
						duration: 200,
						stagger: 25
					});
          // Change search icon to x
          $('#search').html('<i class="fa fa-close"></i>');
				} else {
					$body.removeClass('search-on');
					$searchWrapper.removeClass('search-displayed');
					$menu.velocity('reverse');
					$menuItems.velocity({opacity: 1, scale: 1}, {
						duration: 200,
						easing: [20],
						stagger: 100
					});
					$background.velocity('reverse');
					$searchFormWrapper.velocity('reverse');
					$searchWrapper.add($searchSuggestionItems).velocity('reverse');
          $('#search').html('<i class="fa fa-search"></i>');
        }

			}

			$("#search").on('click', function(){
				console.log("clicked search");
				displaySearch();
			});