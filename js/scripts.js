$(document).ready(function() {
  $("a#link0").on("click", function() {
    var $container = $("div.content").replaceWith(function() {
      $(this).replaceWith(
        $("<div class='content'></div>"))
    })
  })
  $("a#link1").on("click", function() {
    var $container = $("div.content").replaceWith(function() {
      $(this).replaceWith(
        $("<div id='about' class='content animated fadeInUpBig'> <p style='text-align: center;'><img id='about' src='img/colorfactory.gif'></p><p>Estela is an <em>experimentally-minded designer</em> and <em>front-end web developer</em>.</p><p>With a background in scientific research and communications, she strives to tell your story through a clean, minimalist frame and data-supported best practices for you to achieve your desired outcomes: conversions in the form of page views, social media engagement, product purchases, and more.</p><p>Estela describes herself as an extroverted generalist; since graduating from the University of California, Santa Barbara, in 2015, she found that her passions extended far beyond the life sciences she had been trained to research. The common thread in her interests was each topic's need for a web presence.</p><p>She is very well-versed in <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong> and its front-end frameworks, but is eager to add Python, Ruby, and more to her skillset.</p><p>When not online, she can be found playing her ukulele in the sunshine or frolicking the streets of San Francisco, CA. She finds happiness in cultivating new friendships and experiences.</p></div>"))
    })
  })
  $("a#link2").on("click", function() {
    var $container = $("div.content").replaceWith(function() {
      $(this).replaceWith(
        $("<div id='about' class='content animated fadeInUpBig'><h1># work</h1><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>"))
    })
  })
  $("a#link3").on("click", function() {
    var $container = $("div.content").replaceWith(function() {
      $(this).replaceWith(
        $("<div class='content animated fadeInUpBig'> <h1>download - resume (pdf)</h1> <h2> Web Content &amp; Optimization Developer </h2> <h3> Zenfolio, Inc. (Menlo Park, CA) </h3> <h4> March 2017 - Present </h4> <ul> <li>responsibility</li><li>responsibility</li><li>responsibility</li><li>responsibility</li><li>responsibility</li><li>responsibility</li><li>responsibility</li></ul> <h2> Communications Specialist </h2> <h3> Howard Hughes Medical Insitute (Chevy Chase, MD) </h3> <h4>May 2016 - January 2017</h4> <ul> <li>responsibility</li><li>responsibility</li><li>responsibility</li><li>responsibility</li><li>responsibility</li><li>responsibility</li><li>responsibility</li></ul> <h2> Lab Associate </h2> <h3> HHMI Janelia Research Campus (Ashburn, VA) </h3> <h4>October 2015 - April 2016</h4> <ul> <li>responsibility</li><li>responsibility</li><li>responsibility</li><li>responsibility</li><li>responsibility</li><li>responsibility</li><li>responsibility</li></ul></div>"))
    })
  })
});
