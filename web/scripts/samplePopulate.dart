import 'package:web/web.dart';

main() {
  var sampleDiv = document.querySelector('#sample');

  var message = HTMLParagraphElement()..textContent = 'Hello from dart!';
  sampleDiv!.appendChild(message);
}
