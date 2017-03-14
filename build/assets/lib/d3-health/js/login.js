<script type="text/javascript">
    (function($) {
        $(document).ready(function() {
            $('.list-inline li > a').click(function() {
                var activeForm = $(this).attr('href') + ' > form';
                //console.log(activeForm);
                $(activeForm).addClass('animated fadeIn');
                //set timer to 1 seconds, after that, unload the animate animation
                setTimeout(function() {
                    $(activeForm).removeClass('animated fadeIn');
                }, 1000);
            });
        });
    })(jQuery);
    function processForm(e) {
      if (e.preventDefault) e.preventDefault();

      /* do what you want with the form */
      //alert('Need to add logic here');
      handleLogin();
      //Add Username via Session Key


      //Modal if Patient is new, to enter in info
      //Handle Patient Flow
      window.location.replace("d3-patient-data-sharing.html");
      //Handle EHR Flow

      //Handle Payer-Healthplan flow

      // You must return false to prevent the default form behavior
      //return false;
    }

    var form = document.getElementById('login-form');
    if (form.attachEvent) {
        form.attachEvent("submit", processForm);
    } else {
        form.addEventListener("submit", processForm);
    }
</script>
// $(function () {
//     $("#loginBtn").click(function () {
//         // Set Cookie for (Provider, Patient, Payer)
//         //TODO: Connect with Login from
//         alert('login clicked')
//         var userName, pwd;
//         userName = document.getElementById("loginEmailUserName").value;
//         pwd = document.getElementById("loginPwd").value;
//         alert('Username:' + userName);
//         alert('pwd:' + pwd);
//
//         if (userName == 'patient@gmail.com') {
//             document.cookie = "username=patient";
//         }
//         else if (userName == 'payer@gmail.com') {
//             document.cookie = "username=payer";
//         }
//         else if (userName == 'provider@gmail.com') {
//             document.cookie = "username=provider";
//         }
//
//     }
//     );
// })(jQuery, Metis || {});
// 'use strict';
