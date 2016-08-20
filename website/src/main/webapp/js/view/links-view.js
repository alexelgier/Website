define([ 'backbone', 'resthub', 'collection/links', 'hbs!template/links' ],
function (Backbone, Resthub, Links, linksTemplate) {

    var LinksView = Resthub.View.extend({

        // Define view template
        template: linksTemplate,

        initialize:function () {
            // Initialize the collection
            this.collection = new Links();

            // Render the view when the collection is retreived from the server
            this.listenTo(this.collection, 'sync', this.render);

            // Request unpaginated URL
            this.collection.fetch({ data: { page: 'no'} });
        }

    });
    return LinksView;
});