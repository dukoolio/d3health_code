$(function () {
    $("#loginBtn").click(function () {
        // Set Cookie for (Provider, Patient, Payer)
        //TODO: Connect with Login from
        alert('login clicked')
        var userName, pwd;
        userName = document.getElementById("loginEmailUserName").value;
        pwd = document.getElementById("loginPwd").value;
        alert('Username:' + userName);
        alert('pwd:' + pwd);

        if (userName == 'patient@gmail.com') {
            document.cookie = "username=patient";
        }
        else if (userName == 'payer@gmail.com') {
            document.cookie = "username=payer";
        }
        else if (userName == 'provider@gmail.com') {
            document.cookie = "username=provider";
        }

    }
    );
})(jQuery, Metis || {});
'use strict';
