define(['backbone', 'model/link'], function (Backbone, Link) {

    var Links = Backbone.Collection.extend({

        // Reference to this collection's model.
        model: Link,
        url:'api/link'

    });
    return Links;
});
