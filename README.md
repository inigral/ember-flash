ember-flash
===========

**ember-flash** is a simple flash message widget that is used to alert a user. A
message is simply given a type (notice, warning, error) and a message body and is
pushed into a queue. Once the message becomes the queue's latest message it will
display by animating a slide down pane from the top of the screen.

Please don't expect this to be an out of box experience, this is only an example,
I'm positive stylesheets and animations will need to be changed to match your app
needs. With that said, it should be fully working and operable for your EmberJS
applications.

Side note: This is also a great example of how EmberJS can be used to build widgets
for an already existing web application. The only prerequisite is EmberJS and jQuery.

Usage
-----

  1. Include all of the scripts under ``lib/``.

  2. Add the appropriate HTML and CSS, using the examples under ``share/``.

  3. Call the following when you are ready to flash a message to your users.

      Ember.flashQueue.pushFlash('notice', 'This is the message');

  4. I prefer to map this to my application namespace, as a helper.

      App.setFlash = function(type, mesg) {
        Ember.flashQueue.pushFlash('notice', 'This is the message');
      }

Tests
-----

To run the QUnit tests headless you'll need ``PhantomJS`` installed. You can also
open the `test/index.html` file in your web browser locally.

    $ brew install phantomjs
    $ cd test
    $ phantomjs runner.js file:///Users/you/Somewhere/ember-flash/test/index.html


