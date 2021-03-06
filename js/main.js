
$(document).ready(function() {


//===========================================
//  HOME PAGE NAV ITEMS
//===========================================

// hides the div where the nav item descriptions
// are, then creates the animated effect when
// you hover over those items

	var navItem = $(".hover-box")

	navItem.fadeTo(1, 0);

	function mouseOn() {
		$(this).fadeTo(500,1);
	}

	function mouseOff() {
		$(this).fadeTo(500, 0);
	}

	navItem.hover(mouseOn, mouseOff);

//===========================================
//  PORTFOLIO SCREENSHOTS
//===========================================

// creates lightbox for portfolio screenshots

	$("li.landing1 a").fancybox();
	$("li.landing2 a").fancybox();
	$("li.landing3 a").fancybox();

	$("li.ms-home a").fancybox();
	$("li.ms-products a").fancybox();
	$("li.ms-banner a").fancybox();

	$("li.quickbooks a").fancybox();
	$("li.remarketing1 a").fancybox();
	$("li.remarketing2 a").fancybox();

//==========================================
//  TWITTER FEED
//==========================================

	var TWITTER_PROFILE = "https://api.twitter.com/1/statuses/user_timeline.json?screen_name=reiko516";

	$.ajax({
		url: TWITTER_PROFILE,
		data: {
			q: "text"
			},
		dataType: "jsonp",
		success: function(data) {

			for (var i = 0; i < 5; i++) {

				var li = $("<li></li>")
					.addClass("tweet")
					.appendTo("#myTweets")

				var URL = "http://twitter.com/reiko516/status/"

				var tweet_link = $("<a></a>")		
					.attr({
						"href": URL + data[i].id_str,
						"target": "_blank"
					})
					.text(data[i].text)
					.prependTo(li);
			}
		}
	})
});