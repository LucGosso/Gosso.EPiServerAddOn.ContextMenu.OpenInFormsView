define([
    "dojo/_base/declare",
    'dojo/_base/lang',
    "dojo/topic",
    // Parent class and mixins
    "epi/shell/command/_Command",
    "epi/shell/command/_SelectionCommandMixin",
     // Resources
    'epi/i18n!epi/cms/nls/addon.formsview-open'
], function (
    declare,
    lang,
    topic,
    // Parent class and mixins
    _Command,
    _SelectionCommandMixin,
    resources
) {

    return declare([_Command, _SelectionCommandMixin], {

        label: resources.command.label,
        tooltip: resources.command.tooltip,
        iconClass: "epi-iconRename",

        _execute: function () {
            topic.publish("/epi/shell/context/request", { uri: this.get("selectionData").uri }, { viewName: "formedit" });
        },

        _onModelChange: function () {
            this.set("canExecute", !!this.get("selectionData"));
        }
    });
});
