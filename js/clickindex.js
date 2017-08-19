(function () {
    var one=document.querySelector(".one");
    var two=document.querySelector(".two");
    two.style.display="none";
    function lightOff() {
        var lightOff = document.querySelector(".lightOff");

        lightOff.onclick = function () {
         // one.style.display="none";
         // two.style.display="block";
            $(".one").fadeOut(1000);
             $(".two").fadeIn(1000);
        }
    }

    function init() {

        lightOff();

    }
    init()

})();

