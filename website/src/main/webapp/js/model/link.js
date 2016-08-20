define(['backbone'], function(Backbone) {
    var LinkModel = Backbone.Model.extend({

        defaults: {
            name: "Google",
            href: "www.google.com"
        }

    });
    return LinkModel;
});