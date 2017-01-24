define([
    "dojo/_base/lang",
    "epi-cms/component/ContentContextMenuCommandProvider",
    "formsview-open/commands/treenode"
], function(
    lang,
    ContentContextMenuCommandProvider,
    OpenTreeNode
) {

    var originalMethod = ContentContextMenuCommandProvider.prototype.postscript;

    lang.mixin(ContentContextMenuCommandProvider.prototype, {

        postscript: function() {
            originalMethod.call(this);

            var openCommand = new OpenTreeNode(this._settings);

            this.commands.push(openCommand);
        }
    });

    ContentContextMenuCommandProvider.prototype.postscript.nom = "postscript";

});
