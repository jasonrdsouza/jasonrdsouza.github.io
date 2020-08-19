import 'dart:html';

// Github Pages is smart enough to intuit `/page` from a `page.html` file, but won't do the same
// for trailing slashes, so `/page/` results in a 404. This script attempts to remove the trailing
// slash and redirect in order to make existing links work.
//
// Google has indexed a bunch of posts with the trailing slash, so at the very least this will ensure
// that those links don't break, but I'm sure there are other trailing slash links scattered around
// the web.
void main() {
  var currentLocation = window.location.href;
  if (currentLocation.endsWith("/")) {
    window.location.replace(currentLocation.substring(0, currentLocation.length - 1));
  }
}
