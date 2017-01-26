# Gosso.EPiServerAddOn.ContextMenu.OpenInFormsView

[![Platform](https://img.shields.io/badge/Episerver-%207.6+-orange.svg?style=flat)](http://world.episerver.com/cms/) [![Platform](https://img.shields.io/badge/Episerver-%2010.0-green.svg?style=flat)](http://world.episerver.com/cms/)

An Episerver addon that adds a command to the page tree that opens the content in forms view.

![alt text](https://raw.githubusercontent.com/Lucstar/Gosso.EPiServerAddOn.ContextMenu.OpenInFormsView/master/OpenInFormsView.png "This is the Context menu on the tree")

Also check out these AddOn on same theme:
https://github.com/episerver/AddOn.ReloadChildren
https://github.com/mariajemaria/ContextMenuOpenInNewTab

# Installation

There is a nuget package available under the releases tab. This can be installed via the package manager console in Visual Studio.

Put it in your local nuget feed, Run "install-package Gosso.EPiServerAddOn.ContextMenu.OpenInFormsView" in package manager console.

The files will be saved into your module and modulesbin folders. And not referenced, not needed.

Troubleshooting with TFS: Remember to check in files under "modules" and "modulesbin". If you have problems in build server with local packages, just remove the row in packages.config.

