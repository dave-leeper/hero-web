Android
=======
To Build the Android Library 
------------------------
* **Ensure cargo.toml uses [lib] crate-type = ["cdylib"]**
* Type: . ./scripts/build_ios.sh

iOS
===
To Build the iOS Library 
------------------------
* **Ensure cargo.toml uses [lib] crate-type = ["staticlib"]**
* Open a terminal
* cd to the project root directory.
* First Time:
  * Type: cbindgen src/lib.rs -l c > hero_corelib.h
  * Currently, cbindgen will include some unneeded #defines. Open hero_corelib.h in the project root and delete ALL #defines. Do the same for ios/include/hero_corelib.h
* Every Time:
  * Type: . ./scripts/build_ios.sh

To Use the iOS Library 
----------------------
The library is already set up for use in the xcode project. Just open /ios/hero-designer-ios/hero-designer-ios.xcodeproj in xcode.

WWW
===
To Build the WWW Library 
------------------------
* **Ensure cargo.toml uses crate-type = ["cdylib", "rlib"]**
* Open a terminal
* cd to the project root directory.
* Type: . ./scripts/build_www.sh
* Type: cd www

Examples
========
To Build the Examples
------------------------
* **Ensure the [lib] section of cargo.toml has all entries commented out**
* Type: cargo run --example [example_name]

Deploy To Heroku
================
To deploy
---------
* **Ensure the [lib] section of cargo.toml has all entries commented out**
* **Ensure code is pushed to git**
* Type: git push heroku master
* uscomics@protonmail.com
* heroku git:remote -a gentle-dusk-67062

Resources
=========
Android Resources
-----------------
* [Rust on Android (blogpost)](https://medium.com/visly/rust-on-android-19f34a2fb43)
* [Rust once and share it with Android, iOS and Flutter (blogpost)](https://dev.to/robertohuertasm/rust-once-and-share-it-with-android-ios-and-flutter-286o)
* [An Overview of the Android Jetpack Navigation Architecture Component](https://www.techotopia.com/index.php/An_Overview_of_the_Android_Jetpack_Navigation_Architecture_Component)
* [Jetpack Compose basics](https://codelabs.developers.google.com/codelabs/jetpack-compose-basics/#0)
* [Pickers](https://developer.android.com/guide/topics/ui/controls/pickers)

iOS Resources
-------------
* [Rust once and share it with Android, iOS and Flutter (blogpost)](https://dev.to/robertohuertasm/rust-once-and-share-it-with-android-ios-and-flutter-286o)
* [Introduction to SwiftUI](https://developer.apple.com/videos/play/wwdc2020/10119/)

WASM Resources
--------------
* [Rust 🦀 and WebAssembly 🕸 (tutorial)](https://rustwasm.github.io/docs/book/game-of-life/introduction.html)
* [Up and Running with React + Rust + Wasm (blogpost)](https://prestonrichey.com/blog/react-rust-wasm/)

React Resources
---------------
* [Using WebAssembly with React](https://www.telerik.com/blogs/using-webassembly-with-react)
* [react-awesome-router](https://github.com/hryuk/react-awesome-router)
* [Semantic UI React](https://react.semantic-ui.com)
* *[@zeit-ui/react](https://react.zeit-ui.co/en-us/guide/introduction)

Tailwind Resources
------------------
* [Setting up Tailwind and PostCSS](https://tailwindcss.com/course/setting-up-tailwind-and-postcss)
* [Using Tailwind CSS with Create React App](https://daveceddia.com/tailwind-create-react-app/)

Rust Resources
--------------
[Add examples to your Rust libraries](http://xion.io/post/code/rust-examples.html)
[Heroku buildpack for Rust](https://elements.heroku.com/buildpacks/emk/heroku-buildpack-rust)
