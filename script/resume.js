var root = 'ip@raspberry ~ $ ';

$(document).keyup(
        function(e) {
            if (e.keyCode == 13) {
                console.log("event triggered");
                var result = $('#label').html();

                var tmp = $("#terminal").val().toLowerCase();
                tmp = tmp.replace(/</g, "&lt;").replace(/>/g, "&gt;"); /* prevent XSS attacks */
                var rootTemp = root + tmp;
                $('#terminal').val('');
                result = result + rootTemp;

                switch (tmp) {
                    case 'help':
                        result = result + ' &nbsp <br>\
                                        &nbsp <br>\
                                        <span style="cursor:pointer" class = "nav_button">help</span> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp List of available commands<br>\
										&nbsp <br>\
										<span style="cursor:pointer" class = "nav_button">info</span> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Odysseas Resumé<br>\
										&nbsp <br>\
										<span style="cursor:pointer" class = "nav_button">contact</span> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Contact information<br>\
										&nbsp <br>\
										<span style="cursor:pointer" class = "nav_button">social media</span> &nbsp List of available social media<br>\
                                        &nbsp <br>\
										<span style="cursor:pointer" class = "nav_button">projects</span> &nbsp&nbsp&nbsp&nbsp&nbsp Odysseas portofolio <br>\
                                        &nbsp <br>\
                                        <span style="cursor:pointer" class = "nav_button">blog</span> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Navigate the blog<br>\
                                        &nbsp <br>\
                                        <span style="cursor:pointer" class = "nav_button">about</span> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Info about this site <br>\
                                        &nbsp <br>\
                                        <span style="cursor:pointer" class = "nav_button">clear</span> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Clear the console<br>\
										 ';

                        break;

                    case 'contact':
                        result = result + '<br>	25 Martiou str 112,Patras,Greece<br>\ ' +
                            'Tel: &nbsp&nbsp&nbsp(+30)6980950995<br>\
                        Skype: &nbspodys_lamtzidis<br>\
                        Mail: <a href="mailto:hi@odyslam.me">&nbsp&nbsphi@odyslam.me</a><br> ';



                        break;

                    case 'info':
                        var birthday = +new Date('1996-05-15');
                        var age = ((Date.now() - birthday) / (31557600000));
                        result = result + '<br>	Surname:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspLamtzidis<br>\
										    Name:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspOdyssefs(Odysseas)<br>\
										    Age:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp' + age.toFixed() + '<br>\
										    Nationality:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspGreek<br>\
										    Driving permits:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspB<br>\
										    Resumé:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<a href="assets/cv.pdf" target = "_blank">pdf&larr;</a><br>';
                        break;

                    case 'clear':
                        result = '';
                        break;

                    case 'social media':
                        result = result + '&nbsp <br>\
                                        <br> <a href="https://gr.linkedin.com/in/lamtzidisodysseas" target = "_blank">LinkedIn &larr;</a><br>\
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
                                       <br>Glados: A DIY smart-home project | <a href = "/assets/glados_pres.pdf" target = "_blank">Presentation&larr;</a>, <a href ="/assets/glados_paper.pdf" target = "_blank">Paper&larr;</a>, <a href="https://github.com/OdysLam/GLaDOS-project" target = "_blank">Github&larr; |</a><br>\
                                           &nbsp <br>\
                                           Odyslam.me | <a href = "https://github.com/OdysLam/odyslam.github.io" target = "_blank">Github&larr; |</a><br>\
                                           &nbsp <br>\
                                           Business Card | <a href = "/assets/biz_card.pdf" target = "_blank">Pdf&larr; |</a><br>\
                                           &nbsp <br>\
                                           Spotify local RESTful API | <a href = "https://github.com/OdysLam/spotify-local-http-api" target = "_blank">Github&larr; |</a><br>\
                                           &nbsp <br>\
                                           Mindspace | <a href = "https://www.mindspace.gr" target = "_blank">Mindspace&larr; |</a><br>\
                                           &nbsp <br>\
                                           Odyssey to MIT: A crowdfunding Campaign  | <a href = "https://www.giveandfund.com/giveandfund/project/odysseytomit" target = "_blank"> Site&larr;, <a href ="https://www.facebook.com/odysseytomit" target = "_blank">Facebook Page&larr;</a> |</a><br>\
                                           &nbsp <br>\
                                           Research | <a href = "https://www.google.gr" target = "_blank">TBA&larr; |</a><br>\
                                           &nbsp <br>\
                                           Pangea | <a href = "https://www.google.gr" target = "_blank">TBA&larr; |</a><br>';

                        break;

                    case 'exit':
                        void window.close();
                        break;


                    case 'about':
                        result = result + '<br>This site was made with &hearts; by me, based on terminal resume by Kevin Grillet<br>\
                                           Typed.js is used,please leave a star @<a href="http://www.mattboldt.com/demos/typed-js/" target ="_blank">Mattboldt&larr;</a>';
                        break;
                    case 'blog':
                        window.open('/blog/', '_self');
                        break;

                    case '':
                        result = result;
                        break;
                    default:
                        result = result + '<br> -bash: ' + tmp + ' is not a known command, please type/click <span style="cursor:pointer" class = "nav_button">help</span> <br>';
                        break;''
                }

                result = result + '<br>';
                $('#label').html(result);
                //needed to clear older binds
                $('.nav_button').unbind();
                $(".nav_button").click(function(){
                    var value = $(this).text();
                    $('#terminal').val(value);
                    var e = jQuery.Event('keyup');
                    e.keyCode = 13;
                    $('.console').trigger(e);
                });
                $('html, body').animate({scrollTop: $("#terminal").offset().top
                }, 1);
            }
        }
    )
$(document).ready(
    function() {
        $("#terminal").focus();
        $.getJSON('https://ipinfo.io/json', function(data) {
            ip = data['ip'];
            root = ip + '@raspberry ~ $ ';
            $('#user').html(root);
        });
        result = '<br> ';
        $(".updates").typed({
            strings: ["hello visitor","to navigate, click/type the commands","type/click <span style=\"cursor:pointer\" class = \"nav_button\">help</span> for a Command List"],
            typeSpeed: 25,
            backDelay: 500,
            showCursor: false,
            callback : function(){
                console.log("typed completed")
                $(".nav_button").click(function(){
                    var value = $(this).text();
                    console.log(value);
                    $('#terminal').val(value);
                    var e = jQuery.Event('keyup');
                    e.keyCode = 13;
                    $('.console').trigger(e);
                });
            }
        });
    })




    /**
     * Created by Odys on 28/12/2016.
     */