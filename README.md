brackets-wavelength
===================

A Brackets extension to add Music For Programmers to the editor.

##Introduction

This extension adds background music to Brackets (currently using
[Music for Programming](http://www.musicforprogramming.net/), but other
sources could be added). We created it in order to quickly learn how
extensions are built in Brackets.  We also like music :)

The extension adds a new button to the toolbar for starting and stopping the music.

##Testing/Debugging

You can either install this extension directly from GitHub
(`File > Extension Manger > Install from URL... >
https://github.com/cdot-brackets-extensions/brackets-wavelength/archive/master.zip`),
or put brackets-wavelength in your local extensions folder.
Some tips from https://github.com/adobe/brackets/wiki/How-to-write-extensions on how to do that:

* Open your extensions folder by selecting "Help > Show Extensions Folder" in Brackets
* Inside the `user` folder(*), create place the `brackets-5ialog folder`.

\* Note: Because it's easy to delete extensions from this location via Extension
Manager, in the long run it's _**safer** to develop inside the `src/extensions/dev`_
folder. You can do this by modifying the permissions of a regular installed build
to make that folder writable, or by [cloning the Brackets source](https://github.com/adobe/brackets/wiki/How-to-Hack-on-Brackets)
and using that copy.
