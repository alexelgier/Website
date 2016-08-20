define(['backbone', 'view/about-view', 'view/samples-view'],
function (Backbone, AboutView, SamplesView) {

    var AppRouter = Backbone.Router.extend({

        initialize: function() {
            Backbone.history.start({ pushState: false, root: "/" });
        },

        routes:{
            '': 'home',
            'home': 'home',
            'links': 'links',
            'about': 'about'
        },

        home:function () {
            new SamplesView({ root: $('#main') });
        },
        about:function () {
            new AboutView({ root: $('#main') });
        },
        links:function () {
            new LinksView({ root: $('#main') });
        }
       
    });

    return AppRouter;

});