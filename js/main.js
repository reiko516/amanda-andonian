
$(document).ready(function() {


	// var div = $("<div></div>")
	// 	.addClass("blog-hover")
	// 	.text("Blog Post")
	// 	.css({
	// 		"background": "#000000",
	// 		"left": "0px",
	// 		"height": "180px",
	// 		"opacity": 0.2,				
	// 		"position": "absolute",
	// 		"top": "50px",
	// 		"width": "180px",
	// 		"z-index": 2
	// 	})
	// 	.hide();	


	// $(".blog").on("mouseover", function(event) {
	// 	event.preventDefault();

	// 	div.insertBefore("a.blog")
	// 		.show(100);
	// })

	// var remove = $(".blog-hover").on("mouseout", function() {
	// 	console.log("delete!")
	// 	event.preventDefault();

	// 	// div.hide(100, function() {
	// 	// 	div.remove();
	// 	// });
	// })

//===========================================
//  PORTFOLIO SCREENSHOTS
//===========================================

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
//  TWITTER
//===========================================

	var TWITTER_PROFILE = "https://search.twitter.com/search.json";

	$.ajax({
		url: TWITTER_PROFILE,
		data: {
			q: "@reiko516"
		},
		dataType: "jsonp",
		success: function(data) {
			for (var i = 0; i < 5; i++) {
				var li = document.createElement("li");
				var li = $("<li></li>")
					.text(data.results[i].text)
					.addClass("tweet")
					.appendTo("#myTweets");
					
			}
		}
	})
});