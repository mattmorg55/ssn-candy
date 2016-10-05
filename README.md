# ssn.candy

Masked input for SSN and masks value in UI as XXX-XX-1234.

Masked input depends on jQuery and jquery.inputmask.

If you are going to attach any event handlers to the focus
or blur events:
  * attach to the parent of the masked element
  * attach to a custom event "ssn-candy-mask:blur" or "ssn-candy-mask:focus"
  * attach using jQuery--inline or DOM attachment will not work

<p id="p1"></p>
<p><input id="ssn" class="ssn-candy-mask" type="text"></p>
<p><input id="ssn2" class="ssn-candy-mask" type="text"></p>

var sayHello = function () {
    $("#p1").text($("#p1").text() + 'Hello 1.');
}

var sayHello2 = function () {
    $("#p1").text($("#p1").text() + 'Hello 2.');
}

$(document).ready(function () {
    $("#ssn").parent().on("ssn-candy-mask:blur", sayHello);
    $("#ssn2").parent().on("ssn-candy-mask:focus", sayHello2);
});
