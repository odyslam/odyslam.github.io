$(document).ready(
    function() {
        $("#terminal").focus();
        result = '<br>';
        $(".updates").typed({
                strings: ["hello visitor", "my name is odysseas","i will be your guide","please feel free to read about my projects","see you later","type help for a command list"],
                typeSpeed: 20,
                backDelay: 700,
                showCursor:false,
            });
    })

$(document).keyup(
    function(e) {
        if (e.keyCode == 13) {
            var result = $('#label').html();
            var root = "guest@raspberry ~ $ ";
            var tmp = $("#terminal").val().toLowerCase();
            root = root + tmp;
            $('#terminal').val('');
            result = result + root;

            switch (tmp) {
                case 'help':
                    result = result + '<br>	help &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Show a list of available commands<br>\
										contact &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Show contact information<br>\
										skills &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Show a list available skills.<br>\
										education  &nbsp&nbsp&nbsp&nbsp Show a list of available Degrees<br>\
										info &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Show general info about the creator<br>\
										experience &nbsp&nbsp&nbsp Show a list of available experience<br>\
										clear &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Clear the console<br>\
										social &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Show a list of available social media accounts<br>\
										projects &nbsp&nbsp&nbsp&nbsp&nbsp Show a list of the available past projects<br>\
										about &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Show info about this site ';
                    break;

                case 'contact':
                    result = result + '<br>	25 Martiou str 112,Patras,Greece<br>\ ' +
                       'Tel: &nbsp&nbsp&nbsp(+30)6980950995<br>\
                        Skype: &nbspodys_lamtzidis<br>\
                        Mail: <a href="mailto:odyslam@gmail.com">&nbsp&nbspodyslam@gmail.com</a><br> ';



                    break;

                case 'skills':
                    result = result + '<br>	Languages:<br>\
											&nbsp&nbspFrench:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspConversational (B2)<br>\
											&nbsp&nbspEnglish:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspProfficient (C2)<br>\
											&nbsp&nbspGreek:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspNative <br>\
										Techical Skills:<br>\
											&nbsp&nbspPython:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|########&nbsp&nbsp|80%<br>\
											&nbsp&nbspC:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|######&nbsp&nbsp&nbsp&nbsp|50%<br>\
                                            &nbsp&nbspHTML&CSS:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|#####&nbsp&nbsp&nbsp&nbsp&nbsp|50%<br>\
                                            &nbsp&nbspJavascript:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|######&nbsp&nbsp&nbsp&nbsp|60%<br>\
                                            &nbsp&nbspPhotoshop/Illustrator|#####&nbsp&nbsp&nbsp&nbsp&nbsp|40%<br>\
                                            &nbsp&nbspJekyll&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|#####&nbsp&nbsp&nbsp&nbsp&nbsp|50%<br>\
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
                                            &nbsp&nbsp GPA: 7.42/10<br>\
                                            &nbsp&nbsp Member of numerous student organisations (IEEE,BEST,EESTEC)<br>\
                                            &nbsp&nbsp Executive officer at Mindspace Patras, the first Entrepreneurship club in UoP<br>\
                                            2011-2014 High School Diploma, Experimental High School of Evangelic<br>\
                                            &nbsp&nbsp Grade: 19.5 | Panhellenic examinations for university entry: 18.706/20.000<br>';
                    break;

                case 'info':
                    var birthday = +new Date('1996-05-15');
                    var age = ((Date.now() - birthday) / (31557600000));
                    result = result + '<br>	Surname:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspOdyssefs(Odysseas)<br>\
										    Name:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspLamtzidis<br>\
										    Profession:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspElectrical Engineering Student<br>\
										    Age:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp' + age.toFixed() + '<br>\
										    Nationality:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspGreek<br>\
										    Permits:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspB<br>\
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
                    result = result + '<br>&nbsp&nbspGlados: A personal smart-home project | <a href ="/assets/glados.pdf" target = "_blank">Presentation&larr;</a> , <a href="https://github.com/OdysLam/GLaDOS-project" target = "_blank">Github&larr; |</a><br>\
                                           &nbsp&nbspThis site | <a href = "https://github.com/OdysLam/odyslam.github.io" target = "_blank">Github&larr;</a><br>';

                    break;

                case 'exit':
                    void window.close();
                    break;


                case 'about':
                    result = result + '<br>&nbspThis site was made with &hearts; by me, based on terminal resume by Kevin Grillet<br>\
                                           &nbspTyped.js is used,please leave a star @<a href="http://www.mattboldt.com/demos/typed-js/" target ="_blank">Mattboldt&larr;</a>';

                case '':
                    result = result;
                    break;


                default:
                    result = result + '<br>' + tmp + ' is not a known command, please type -help.<br>';
                    break;
            }

            result = result + '<br>';
            $('#label').html(result);
            $('html, body').animate({
                scrollTop: $("#terminal").offset().top
            }, 1);
        }
    }
)/**
 * Created by Odys on 28/12/2016.
 */
