var root = 'ip@raspberry ~ $ ';
var ip;
var commandHistory = [];
var commandHistoryCounter = 1;


(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
            (i[r].q = i[r].q || []).push(arguments)
        }, i[r].l = 1 * new Date();
    a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-90109813-1', 'auto');
ga(function (tracker) {
    var clientId = tracker.get('clientId');
    console.log(clientId);
});
ga('send', 'pageview');

/// fetch appropriate analytics object ///

///
$(document).keyup(
    function (e) {
        if (e.keyCode == 13) {
            console.log("event triggered");
            var result = $('#label').html();
            var tmp = $("#terminal").val().toLowerCase();
            tmp = tmp.replace(/</g, "&lt;").replace(/>/g, "&gt;");
            /* prevent XSS attacks */
            var rootTemp = root + tmp;
            $('#terminal').val('');
            result = result + rootTemp;
            ga('send', {
                    hitType: 'event',
                eventCategory: 'terminal',
                eventAction: 'keystroke',
                    eventLabel: tmp,
                    eventValue: 1
                }
            );
            commandHistory.push(tmp);
            commandHistoryCounter = commandHistory.length;
            window.location.hash = tmp;
            switch (tmp) {
                case 'help':
                    result = result + ' &nbsp <br>\
                                        &nbsp <br>\
                                        <span style="cursor:pointer" class = "nav_button">projects</span> &nbsp&nbsp&nbsp&nbsp&nbsp My portfolio <br>\
                                        &nbsp <br>\
                                        <span style="cursor:pointer" class = "nav_button">cv</span> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Resumé <br>\
                                        &nbsp <br>\
										<span style="cursor:pointer" class = "nav_button">contact</span> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Get in touch & social media<br>\
                                        &nbsp <br>\
                                        <span style="cursor:pointer" class = "nav_button">blog</span> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspMy personal blog, mainly about tech<br>\
                                        &nbsp <br>\
                                        <span style="cursor:pointer" class = "nav_button">help</span> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp List of available commands<br>\
                                        &nbsp <br>\
                                        <span style="cursor:pointer" class = "nav_button">clear</span> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Clear the console<br>\
                                        &nbsp <br>\
                                        <span style="cursor:pointer" class = "nav_button">about</span> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp About<br>\
										 ';
                    break;

                    case 'about':
                        result = result + '<br>	This website was made with <3 by Odysseas Lamtzidis  (ODYSLAM IKE P.C). <br>\
                        Address1: Vasilissis Sofias 20, 17121. Nea Smyrni, Athens, Greece <br>\
                        Address2: The Internet <br>\
                        Mail: <a href="mailto:hi@odyslam.me">hi@odyslam.me</a><br>';
                    break;

                // case 'resume':
                //     var birthday = +new Date('1996-05-15');
                //     var age = ((Date.now() - birthday) / (31557600000));
                //     result = result + '<br>	Surname:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspLamtzidis<br>\
                // 					    Name:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspOdyssefs(Odysseas)<br>\
                // 					    Age:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp' + age.toFixed() + '<br>\
                // 					    Mail:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<a href="mailto:hi@odyslam.me">hi@odyslam.me</a><br> \
                // 					    Resumé:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<a class = "link" id="cv" href="assets/cv.pdf" target = "_blank">pdf&larr;</a><br>';
                //     break;
                case 'resume':
                case 'resumé':
                case 'cv':
                    window.open('https://drive.google.com/file/d/1Ad030jSUuEujH-eXrscouJFlQ4EuMXZc/view?usp=sharing');
                    break;

                case 'clear':
                    result = '';
                    break;
                case 'social media':
                case 'contact':
                    result = result + '&nbsp <br>\
                                        <br><a href="mailto:hi@odyslam.me">hi@odyslam.me</a><br> \
                                        <br> <a href="https://gr.linkedin.com/in/odysseaslamtzidis" target = "_blank">LinkedIn &larr;</a><br>\
                                        &nbsp <br>\
										<a href="https://github.com/OdysLam" target = "_blank">GitHub &larr;</a><br>\
										&nbsp <br>\
										<a href="https://www.facebook.com/odysseas.lamtzidis" target = "_blank">Facebook &larr;</a><br>\
										&nbsp <br>\
										<a href="https://twitter.com/" target = "_blank">Twitter &larr;</a><br>\
										&nbsp <br>\
										<a href="https://www.facebook.com/odysseas.lamtzidis" target = "_blank">Odyssey to MIT facebook &larr;</a><br>';

                    break;

                case 'projects':
                    result = result + '&nbsp <br>\
                                        &nbsp <br>\
                                          <span class="project_name"> Diploma Thesis </span> ||  An IoT Edge-as-a-service (Eaas) Distributed Architecture & Reference Implementation, 2019 | <a href = "https://www.researchgate.net/publication/336564357_An_IoT_Edge-as-a-service_Eaas_Distributed_Architecture_Reference_Implementation" target = "_blank">Thesis&larr;</a>, <a href = "https://github.com/OdysLam/thesis-eaas" target = "_blank">Github&larr;</a> |<br>\
                                           &nbsp <br>\
                                           &nbsp <br>\
                                           <span class="project_name"> TedX talk </span> || Speaker: "I am not making a Project, I am making my Future", 2019 | <a href = "https://www.youtube.com/watch?v=yn1NsY7LVxM" target = "_blank">Youtube&larr;</a> |<br>\
                                           &nbsp <br>\
                                           &nbsp <br>\
                                           <span class="project_name"> Tech portfolio</span> || Algorithms, Tools/Scripts, IoT projects, 2017- | <a href = "https://github.com/OdysLam/" target = "_blank">Github&larr;</a>|<br>\
                                           &nbsp <br>\
                                           &nbsp <br>\
                                           <span class="project_name"> Research </span> || Blockchain, IoT, 2017-2019  |  <a href = "https://www.researchgate.net/profile/Odysseas_Lamtzidis" target = "_blank">ResearchGate&larr;</a> |<br>\
                                           &nbsp <br>\
                                           &nbsp <br>\
                                           <span class="project_name"> Pangea </span> || 1st Prize MIT Bootcamp on I&E, 2018  | <a href = "https://drive.google.com/file/d/1pU9GHVVFZK68aqKAz8XOdzhSWiTlT76s/view?usp=sharing" target = "_blank">Pitch-Deck&larr;</a>, <a href = "http://bootcamp.mit.edu/entrepreneurship/" target = "_blank">Website&larr;</a> |<br>\
                                           &nbsp <br>\
                                           &nbsp <br>\
                                           <span class="project_name"> Odyssey to MIT </span> || A Crowdfunding Campaign, 2018  | <a href = "https://www.giveandfund.com/giveandfund/project/odysseytomit" target = "_blank"> Website&larr;</a>, <a href ="https://www.facebook.com/odysseytomit" target = "_blank">Facebook Page&larr;</a> |</a><br>\
                                           &nbsp <br>\
                                           &nbsp <br>\
                                           <span class="project_name"> Design </span> || Business Card, Resumé in Illustrator, 2017-2018  | <a href = "https://drive.google.com/file/d/1RDQpPyf1z4UmsFrdnLf-f936VHfds-ha/view?usp=sharing" target = "_blank">Business Card&larr;</a>, <a href = "https://drive.google.com/file/d/1npfkuPQy-fsQYBuPj_dKJl22qTCMjxER/view?usp=sharing" target = "_blank">Resumé&larr;</a> |<br>\
                                           &nbsp <br>\
                                           &nbsp <br>\
                                           <span class="project_name"> odyslam.me </span> || Website design (plain html, css, js), 2016-  | <a href = "https://github.com/OdysLam/odyslam.github.io" target = "_blank">Github&larr;</a> |<br>\
                                           &nbsp <br>\
                                           &nbsp <br>\
                                           <span class="project_name"> Mindspace </span> || Founded Patras Chapter, 2016  | <a href = "https://www.mindspace.gr" target = "_blank">Mindspace&larr;</a> |<br>\
                                           &nbsp <br>\
                                           &nbsp <br>\
                                           <span class="project_name"> PCB Schematics</span> || Custom Hardware for Glados, 2017  | <a href = "https://drive.google.com/file/d/1mzLk7mwVpM66uxjkNKU4dKOvCRD8OlQh/view?usp=sharing" target = "_blank">PCB schematics&larr;</a>, <a href="https://github.com/OdysLam/GLaDOS_v0.3/tree/master/esp8266" target = "_blank">Github&larr;</a> |<br>\
                                           &nbsp <br>\
                                           &nbsp <br>\
                                           <span class="project_name"> Glados V2 </span> || A DIY smart-home project, 2015-2017  | <a href = "https://drive.google.com/file/d/1LHQ19l1VnQlL7C01QMgR19Y691zYDgHe/view?usp=sharing" target = "_blank">Presentation&larr;</a>, <a href="https://github.com/OdysLam/GLaDOS-project" target = "_blank">Github&larr;</a> |<br>\
                                           &nbsp <br>';

                    break;
                // case 'exit':
                //     window.open('https://www.google.gr', '_self');
                //     break;
                // case 'about':
                //     result = result + '<br>This site was made with &hearts; by me, based on terminal resume by Kevin Grillet<br>\
                //                            Typed.js is used,please leave a star @<a href="http://www.mattboldt.com/demos/typed-js/" target ="_blank">Mattboldt&larr;</a>';
                //     break;
                case 'blog':
                    window.location.href="/blog/";;
                    break;

                case '':
                    result = result;
                    break;
                default:
                    result = result + '<br> -bash: "' + tmp + '" is incorrect or forbidden for IP:<' + ip + '>, please type or click <span style="cursor:pointer" class = "nav_button">help</span> <br>';
                    break;
                    ''
            }

            result = result + '<br>';
            $('#label').html(result);
            //needed to clear older binds
            $('.nav_button').unbind();
            $(".nav_button").click(function () {
                var value = $(this).text();
                $('#terminal').val(value);
                var e = jQuery.Event('keyup');
                e.keyCode = 13;
                $('.console').trigger(e);
            });

            $('html, body').animate({
                scrollTop: $("#terminal").offset().top
            }, 1);
        }
        else if (e.keyCode == 38) {
            console.log("up arrow was pressed");
            commandHistoryCounter -= 1;
            if (commandHistoryCounter < 0) {
                commandHistoryCounter = 0;
            }
            htmp = commandHistory[commandHistoryCounter];
            $('#terminal').val(htmp);
        }
        else if (e.keyCode == 40) {
            commandHistoryCounter += 1;
            if (commandHistoryCounter > commandHistory.length - 1) {
                commandHistoryCounter = commandHistory.length;
                $('#terminal').val("");
                return ""

            }
            htmp = commandHistory[commandHistoryCounter];
            $('#terminal').val(htmp);
            $("#terminal").focus();

        }
    }
);
$(document).ready(
    function() {
        // $(".root").hide();
        $("#terminal").focus();
        if (window.matchMedia("(max-width: 767px)").matches) {
            $("#terminal").attr("placeholder", "tap here, type command, tap RETURN");
        }
        else{
            $("#terminal").attr("placeholder", "click here, type command, press ENTER");
        }
        $.getJSON('https://ipinfo.io/json', function(data) {
            ip = data['ip'];
            root = ip + '@raspberry ~ $ ';
            $('#user').html(root);
        });
        result = '<br> ';
        var command = window.location.hash.substr(1);
        if (command != "") {
            $('#terminal').val(command);
            e = $.Event('keyup');
            e.keyCode = 13; // enter
            $(document).trigger(e);
        }
        // $.getJSON('/announcement.json', function (data) {
        //     read = data['read'];
        //     if (read) {
        //         $('#announcement').html(data['text']);
        //         $("#announcement").show();
        //     }
        //     else {
        //         $("#announcement").hide();
        //     }
        //
        // });
        $('#user').html(root);
        // Add cv tracking//
        $(".version").typed({
            strings: ["$python site_terminal.py <br>...<br>..."],
            typeSpeed: 1,
            backDelay: 600,
            showCursor: false,
            callback: function () {
                $(".updates").typed({
                    strings: ["hello visitor, thank you for coming <br> \\ (•◡•) / " , "type help or tap on <span style=\"cursor:pointer\" class = \"nav_button\">help</span> for a command list"],
                    typeSpeed: 1,
                    backDelay: 1000,
                    showCursor: false,
                    callback: function () {
                        // $(".root").show();
                        $("#terminal").focus();
                        console.log("typed completed");
                        // register click event
                        $(".nav_button").click(function () {
                            var value = $(this).text();
                            console.log(value);
                            $('#terminal').val(value);
                            var e = jQuery.Event('keyup');
                            e.keyCode = 13;
                            $('.console').trigger(e);
                        });

                    }
                });
            }
        });

    });


/**
 * Created by Odys on 28/12/2016.
 */
