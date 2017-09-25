$(document).keyup(
        function(e) {
            if (e.keyCode == 13) {
                console.log("event triggered");
                var result = $('#label').html();
                var root = "guest@raspberry ~ $ ";
                var tmp = $("#terminal").val().toLowerCase();
                tmp = tmp.replace(/</g, "&lt;").replace(/>/g, "&gt;"); /* prevent XSS attacks */

                root = root + tmp;
                $('#terminal').val('');
                result = result + root;

                switch (tmp) {
                    case 'help':
                        result = result + '<br>	<span class = "nav_button">help</span> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Show a list of available commands<br>\
										<span class = "nav_button">contact</span> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Show contact information<br>\
										<span class = "nav_button">skills</span> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Show a list available skills.<br>\
										<span class = "nav_button">education</span>  &nbsp&nbsp&nbsp&nbsp Show a list of available Degrees<br>\
										<span class = "nav_button">info</span> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Show general info about me<br>\
										<span class = "nav_button">experience</span> &nbsp&nbsp&nbsp Show a list of available experience<br>\
										<span class = "nav_button">clear</span> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Clear the console<br>\
										<span class = "nav_button">social</span> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Show a list of available social media<br>\
										<span class = "nav_button">projects</span> &nbsp&nbsp&nbsp&nbsp&nbsp Show a list of the available past projects<br>\
                                        <span class = "nav_button">blog</span> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Navigate my personal technology blog<br>\
										<span class = "nav_button">about</span> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Show info about this site ';

                        break;

                    case 'contact':
                        result = result + '<br>	25 Martiou str 112,Patras,Greece<br>\ ' +
                            'Tel: &nbsp&nbsp&nbsp(+30)6980950995<br>\
                        Skype: &nbspodys_lamtzidis<br>\
                        Mail: <a href="mailto:hi@odyslam.me">&nbsp&nbsphi@odyslam.me</a><br> ';



                        break;

                    case 'skills':
                        result = result + '<br>	Languages:<br>\
											&nbsp&nbspFrench:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspAdvanced (C1)<br>\
											&nbsp&nbspEnglish:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspProficient (C2)<br>\
											&nbsp&nbspGreek:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspNative <br>\
										Techical Skills:<br>\
											&nbsp&nbspPython:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|#######&nbsp&nbsp&nbsp|70%<br>\
											&nbsp&nbspC:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|#####&nbsp&nbsp&nbsp&nbsp&nbsp|40%<br>\
                                            &nbsp&nbspHTML&CSS:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|#####&nbsp&nbsp&nbsp&nbsp&nbsp|50%<br>\
                                            &nbsp&nbspJavascript:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|######&nbsp&nbsp&nbsp&nbsp|60%<br>\
                                            &nbsp&nbspPhotoshop/Illustrator|#####&nbsp&nbsp&nbsp&nbsp&nbsp|40%<br>\
                                            &nbsp&nbspJekyll&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|#####&nbsp&nbsp&nbsp&nbsp&nbsp|50%<br>\
                                            &nbsp&nbspAutodesk Eagle&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|#####&nbsp&nbsp&nbsp&nbsp&nbsp|50%<br>\
                                        Attributes:<br>\
                                            &nbsp&nbspInitiative:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|########&nbsp&nbsp|80%<br>\
                                            &nbsp&nbspLeadership:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|######&nbsp&nbsp&nbsp&nbsp|70%<br>\
                                            &nbsp&nbspManagement:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|#######&nbsp&nbsp&nbsp|70%<br>\
                                            &nbsp&nbspTeamwork:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|######&nbsp&nbsp&nbsp&nbsp|60%<br>\
                                            &nbsp&nbspCreativity:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|#########&nbsp|90%<br>\
                                            &nbsp&nbspCommunication:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|#######&nbsp&nbsp&nbsp|70%<br>\
                                            &nbsp&nbspLearning-Agility:&nbsp&nbsp&nbsp&nbsp|########&nbsp&nbsp|80%<br> ';
                        break;

                    case 'education':
                        result = result + '<br>	2014 - Current: Electrical Engineering & Computer Science, University of Patras,Greece<br>\
                                            &nbsp&nbsp GPA: 7.2/10<br>\
                                            &nbsp&nbsp Member of numerous student organisations (IEEE,BEST,EESTEC)<br>\
                                            &nbsp&nbsp Executive officer at Mindspace Patras, the first Entrepreneurship club in UoP<br>\
                                            2011-2014 High School Diploma, Experimental High School of Evangelic<br>\
                                            &nbsp&nbsp Grade: 19.5 | Panhellenic examinations for university entry: 18.706/20.000<br>';
                        break;

                    case 'info':
                        var birthday = +new Date('1996-05-15');
                        var age = ((Date.now() - birthday) / (31557600000));
                        result = result + '<br>	Surname:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspLamtzidis<br>\
										    Name:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspOdyssefs(Odysseas)<br>\
										    Profession:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspElectrical Engineering Student<br>\
										    Age:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp' + age.toFixed() + '<br>\
										    Nationality:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspGreek<br>\
										    Driving permits:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspB<br>\
										    Resumé:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<a href="assets/cv.pdf" target = "_blank">pdf&larr;</a><br>';
                        break;

                    case 'experience':
                        result = result + '<br>April 2016 - current<br>\
											&nbsp&nbspSocial Media Manager, PatrasIQ<br>\
												&nbsp&nbsp Managing the online brand/promotion of Patras IQ during, after the event and throughout the year <br>\
											April 2015 - 2015 April<br>\
												&nbsp&nbsp Online presence and promotion of Patras IQ Exhibition before and during the event<br>';
                        break;

                    case 'clear':
                        result = '';
                        break;

                    case 'social':
                        result = result + '<br> <a href="https://gr.linkedin.com/in/lamtzidisodysseas" target = "_blank">LinkedIn &larr;</a><br>\
										<a href="https://github.com/OdysLam" target = "_blank">GitHub &larr;</a><br>\
										<a href="https://www.facebook.com/odysseas.lamtzidis" target = "_blank">facebook &larr;</a><br>';
                        break;

                    case 'projects':
                        result = result + '<br>Glados: A personal smart-home project | <a href ="/assets/glados.pdf" target = "_blank">Presentation&larr;</a> , <a href="https://github.com/OdysLam/GLaDOS-project" target = "_blank">Github&larr; |</a><br>\
                                           This site | <a href = "https://github.com/OdysLam/odyslam.github.io" target = "_blank">Github&larr; |</a><br>\
                                           Spotify local RESTful API | <a href = "https://github.com/OdysLam/spotify-local-http-api" target = "_blank">Github&larr; |</a><br>';

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
                        result = result + '<br> -bash: ' + tmp + ' is not a known command, please type or click <span class = "nav_button">help</span> <br>';
                        break;''
                }

                result = result + '<br>';
                $('#label').html(result);
                $(".nav_button").click(function(){
                    var value = $(this).text();
                    console.log(value);
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
        result = '<br> ';
        $(".updates").typed({
            strings: ["hello visitor","to navigate, click or type the commands","use sk<span class = \"nav_button\">help</span> for a Command List"],
            typeSpeed: 50,
            backDelay: 800,
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