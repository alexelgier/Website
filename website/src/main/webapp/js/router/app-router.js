define(['backbone', 'view/about-view', 'view/untilted-view', 'view/samples-view', 'view/links-view'],
		function (Backbone, AboutView, UntiltedView, SamplesView, LinksView) {

	var AppRouter = Backbone.Router.extend({

		initialize: function() {
			Backbone.history.start({ pushState: false, root: "/" });
		},

		routes:{
			"": "home",
			"!/home": "home",
			"!/untilted":"untilted",
			"!/links": "links",
			"!/about": "about"
		},

		home:function () {
			new SamplesView({ root: $('#main') });
		},
		untilted:function () {
			new UntiltedView({ root: $('#main') });
		},
		links:function () {
			new LinksView({ root: $('#main') });
		},
		about:function () {
			new AboutView({ root: $('#main') });
		}


	});

	return AppRouter;

});