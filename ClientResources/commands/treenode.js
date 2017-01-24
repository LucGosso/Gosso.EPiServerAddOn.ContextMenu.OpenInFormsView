define([
    "dojo/_base/declare",
    "dojo/topic",
    // Parent class and mixins
    "epi/shell/command/_Command",
    "epi/shell/command/_SelectionCommandMixin"
], function(
    declare,
    topic,
    // Parent class and mixins
    _Command,
    _SelectionCommandMixin
) {

    return declare([_Command, _SelectionCommandMixin], {

        label: "Open in forms view",

        iconClass: "epi-iconRename",

        _execute: function() {
            topic.publish("/epi/shell/context/request", { uri: this.get("selectionData").uri }, { viewName: "formedit" });
        },

        _onModelChange: function() {
            this.set("canExecute", !!this.get("selectionData"));
        }
    });
});
