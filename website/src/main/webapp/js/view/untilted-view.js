define([ 'backbone', 'resthub', 'hbs!template/untilted'],
function (Backbone, Resthub, untiltedTemplate) {

    var UntiltedView = Resthub.View.extend({

        // Define view template
        template: untiltedTemplate,

        initialize: function() {
        	this.render();
        },

        render: function() {
        	this.$el.html(this.template());
        }

    });
    return UntiltedView;
});