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
                                        <span style="cursor:pointer" class = "nav_button">info</span> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Resumé & contact info<br>\
                                        &nbsp <br>\
										<span style="cursor:pointer" class = "nav_button">social media</span> &nbsp Available social media<br>\
                                        &nbsp <br>\
                                        <span style="cursor:pointer" class = "nav_button">blog</span> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Navigate the blog<br>\
                                        &nbsp <br>\
                                        <span style="cursor:pointer" class = "nav_button">help</span> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp List of available commands<br>\
                                        &nbsp <br>\
                                        <span style="cursor:pointer" class = "nav_button">clear</span> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Clear the console<br>\
										 ';
                    break;

                    // case 'contact':
                    //     result = result + '<br>	25 Martiou str 112,Patras,Greece<br>\ ' +
                    //         'Tel: &nbsp&nbsp&nbsp(+30)6980950995<br>\
                    //     Skype: &nbspodys_lamtzidis<br>\
                    //     Mail: <a href="mailto:hi@odyslam.me">&nbsp&nbsphi@odyslam.me</a><br> ';


                    break;

                case 'info':
                    var birthday = +new Date('1996-05-15');
                    var age = ((Date.now() - birthday) / (31557600000));
                    result = result + '<br>	Surname:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspLamtzidis<br>\
										    Name:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspOdyssefs(Odysseas)<br>\
										    Age:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp' + age.toFixed() + '<br>\
										    Mail:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<a href="mailto:hi@odyslam.me">hi@odyslam.me</a><br> \
										    Resumé:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<a class = "link" id="cv" href="assets/cv.pdf" target = "_blank">pdf&larr;</a><br>';
                    break;

                case 'clear':
                    result = '';
                    break;

                case 'social media':
                    result = result + '&nbsp <br>\
                                        <br> <a href="https://gr.linkedin.com/in/odysseaslamtzidis" target = "_blank">LinkedIn &larr;</a><br>\
                                        &nbsp <br>\
										<a href="https://github.com/OdysLam" target = "_blank">GitHub &larr;</a><br>\
										&nbsp <br>\
										<a href="https://www.facebook.com/odysseas.lamtzidis" target = "_blank">facebook &larr;</a><br>\
										&nbsp <br>\
										<a href="https://www.instagram.com/odysseytomit/" target = "_blank">Instagram &larr;</a><br>\
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
                                           <span class="project_name"> Jfdo.it </span> || Founder,Website Design, 2018 | <a href = "https://jfdo.it" target = "_blank">Website&larr;</a> |<br>\
                                           &nbsp <br>\
                                           &nbsp <br>\
                                           <span class="project_name"> Algorithms in python </span> || CSMA, PIM1 packet scheduling, 2019 | <a href = "https://github.com/OdysLam/PIM1_packet_scheduling_sim" target = "_blank">PIM1 Github&larr;</a>, <a href = "https://github.com/OdysLam/csma_simulation" target = "_blank">CSMA Github&larr;</a> |<br>\
                                           &nbsp <br>\
                                           &nbsp <br>\
                                           <span class="project_name"> Research </span> || Blockchain, IoT, Edge Computing, 2017-  |  <a href = "https://www.researchgate.net/profile/Odysseas_Lamtzidis" target = "_blank">ResearchGate&larr;</a> |<br>\
                                           &nbsp <br>\
                                           &nbsp <br>\
                                           <span class="project_name"> Dimitra </span> || 1st Prize CruiseInn, 2018  | <a href = "/assets/dimitra_cruiseinn18.pdf" target = "_blank">Pitch-Deck(Greek)&larr;</a>, <a href = "https://getcruiseinn.com/" target = "_blank">Website&larr;</a> |<br>\
                                           &nbsp <br>\
                                           &nbsp <br>\
                                           <span class="project_name"> Pangea </span> || 1st Prize MIT Bootcamp on I&E, 2018  | <a href = "/assets/pangea_bootcamp18.pdf" target = "_blank">Pitch-Deck&larr;</a>, <a href = "http://bootcamp.mit.edu/entrepreneurship/" target = "_blank">Website&larr;</a> |<br>\
                                           &nbsp <br>\
                                           &nbsp <br>\
                                           <span class="project_name"> Odyssey to MIT </span> || A crowdfunding Campaign, 2018  | <a href = "https://www.giveandfund.com/giveandfund/project/odysseytomit" target = "_blank"> Website&larr;</a>, <a href ="https://www.facebook.com/odysseytomit" target = "_blank">Facebook Page&larr;</a> |</a><br>\
                                           &nbsp <br>\
                                           &nbsp <br>\
                                           <span class="project_name"> PCB Schematics</span> || Custom Hardware for Glados, 2017  | <a href = "/assets/pcb_schematics.jpg" target = "_blank">PCB schematics&larr;</a>, <a href="https://github.com/OdysLam/GLaDOS_v0.3/tree/master/esp8266" target = "_blank">Github&larr;</a> |<br>\
                                           &nbsp <br>\
                                           &nbsp <br>\
                                           <span class="project_name"> Business Card </span> || My business card\'s design in .ai, 2017-2018  | <a href = "/assets/biz_card.pdf" target = "_blank">Pdf&larr;</a>, <a href = "https://drive.google.com/file/d/1CX0Qs97vnFbP5KL7ZpTtoAbqrjVDQG9y/view?usp=sharing" target = "_blank">Google drive&larr;</a> |<br>\
                                           &nbsp <br>\
                                           &nbsp <br>\
                                           <span class="project_name"> Resume </span> || My Resume\'s design in .ai, 2017-  | <a href = "https://drive.google.com/file/d/1npfkuPQy-fsQYBuPj_dKJl22qTCMjxER/view?usp=sharing" target = "_blank">Google drive&larr;</a> |<br>\
                                           &nbsp <br>\
                                           &nbsp <br>\
                                           <span class="project_name"> Spotify API </span> || Control spotify via HTTP calls, 2017  | <a href = "https://github.com/OdysLam/spotify-local-http-api" target = "_blank">Github&larr;</a> |<br>\
                                           &nbsp <br>\
                                           &nbsp <br>\
                                           <span class="project_name"> odyslam.me </span> || Website design, 2016-  | <a href = "https://github.com/OdysLam/odyslam.github.io" target = "_blank">Github&larr;</a> |<br>\
                                           &nbsp <br>\
                                           &nbsp <br>\
                                           <span class="project_name"> Mindspace </span> || Founded Patras Chapter, 2016  | <a href = "https://www.mindspace.gr" target = "_blank">Mindspace&larr;</a> |<br>\
                                           &nbsp <br>\
                                           &nbsp <br>\
                                           <span class="project_name"> Glados V2 </span> || A DIY smart-home project, 2015-2017  | <a href = "/assets/glados_pres.pdf" target = "_blank">Presentation&larr;</a>, <a href="https://github.com/OdysLam/GLaDOS-project" target = "_blank">Github&larr;</a> |<br>\
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
                    window.open('https://medium.com/@odysseaslamtzidis', '_blank');
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
            $('#cv').unbind();
            $('#cv').click(function () {
                ga('send', {
                        hitType: 'event',
                        eventCategory: 'cv',
                        eventAction: 'Click',
                        eventLabel: "Clicked on PDF",
                        eventValue: 1
                    }
                );
                console.log("clicked on cv")

            })

            $('html, body').animate({
                scrollTop: $("#terminal").offset().top
            }, 1);
        }
        else if (e.keyCode == 38) {
            console.log("up arrow was pressed")
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
)
$(document).ready(
    function() {
        // $(".root").hide();
        $("#terminal").focus();
        if (window.matchMedia("(max-width: 767px)").matches) {
            $("#terminal").attr("placeholder", "< TAP HERE to type >");
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
            typeSpeed: 5,
            backDelay: 600,
            showCursor: false,
            callback: function () {
                $(".updates").typed({
                    strings: ["hello visitor, thank you for coming <br> \\ (•◡•) / ", "to navigate, click on the commands or type them in the field and press enter", "type (or tap/click on it) <span style=\"cursor:pointer\" class = \"nav_button\">help</span> for a command list <br> Click <<<a href=\"/assets/odysseasLamtzidis.vcf\" download>HERE<a/>>> to add me to your contacts. "],
                    typeSpeed: 5,
                    backDelay: 800,
                    showCursor: false,
                    callback: function () {
                        // $(".root").show();
                        $("#terminal").focus();
                        console.log("typed completed")
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

    })


/**
 * Created by Odys on 28/12/2016.
 */