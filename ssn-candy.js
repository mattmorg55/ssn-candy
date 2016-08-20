(function (ssn) {
    (function (candy, $, undefined) {

        candy.saySomething = function () {
            return "hello.";
        };

        candy.updateInnerHtml = function (elementId, innerHtml) {
            var fieldNameElement = document.getElementById(elementId);
            while (fieldNameElement.childNodes.length >= 1) {
                fieldNameElement.removeChild(fieldNameElement.firstChild);
            }
            fieldNameElement.appendChild(fieldNameElement.ownerDocument.createTextNode(innerHtml));
        }

        candy.ssnFocus = function () {
             //var ssn = $('#ssn');
                //Retrieve value
                var value = $(this).data('value');
                if (value) {
                    $(this).val(value);
                }
                //Mask
                $(this).inputmask({
                    "mask": "999-99-9999",
                    "placeholder": " ",
                    jitMasking: true
                });
        }

        candy.ssnBlur = function ssnBlur() {
            //var ssn = $(childSelector);
            var ssnWrapper = $(this).parent();
            if (ssnWrapper) {
                //Unmask
                var maskedValue = $(this).val();
                var newNode = $(this).clone();
                $(this).inputmask('remove');
                $(this).remove();
                //var newNode = $('<input type="text" class="form-control ssn-mask" id="ssn" maxlength="60">');
                ssnWrapper.append(newNode);
                //Obscure value
                newNode.data('value', maskedValue);
                var obscuredValue = maskedValue.replace(/^\d{3}-\d{2}/, 'XXX-XX');
                newNode.val(obscuredValue);
                newNode.each(candy.ssnMask);
            }
        }

        candy.ssnValue = function() {
          var value = $(this).data('value');
          return value ? value : '';
        }

        candy.ssnClear = function() {
          $(this).data('value', '');
          $(this).val('');
        }

        candy.ssnMask = function() {
            $(this).focus(candy.ssnFocus);
            $(this).blur(candy.ssnBlur);
            $(this).attr('ssnmask', true);
            $(this).init.prototype.ssnValue = candy.ssnValue;
            $(this).init.prototype.ssnClear = candy.ssnClear;
        }

        $(document).ready(function() {
           $('.ssn-mask').each(candy.ssnMask); 
        });

    }(window.ssn.candy = window.ssn.candy || {}, jQuery));
}(window.ssn = window.ssn || {}));