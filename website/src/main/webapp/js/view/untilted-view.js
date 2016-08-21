define([ 'backbone', 'resthub', 'hbs!template/untilted'],
function (Backbone, Resthub, untiltedTemplate) {

    var UntiltedView = Resthub.View.extend({

        // Define view template
        template: untiltedTemplate,

        initialize:function () {
            // Render the view
            this.render();
        }

    });
    return UntiltedView;
});