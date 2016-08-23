define(['backbone', 'view/about-view', 'view/untilted-view', 'view/samples-view', 'view/links-view'],
		function (Backbone, AboutView, UntiltedView, SamplesView, LinksView) {

	var AppRouter = Backbone.Router.extend({

		initialize: function() {
			Backbone.history.start({ pushState: true, root: "/" });
		},

		routes:{
			'': 'homeV',
			'home': 'homeV',
			'untilted':'untiltedV',
			'links': 'linksV',
			'about': 'aboutV'
		},

		homeV:function () {
			new SamplesView({ root: $('#main') });
		},
		untiltedV:function () {
			new UntiltedView({ root: $('#main') });
		},
		linksV:function () {
			new LinksView({ root: $('#main') });
		},
		aboutV:function () {
			new AboutView({ root: $('#main') });
		}


	});

	return AppRouter;

});