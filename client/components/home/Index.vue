<template lang="html">
  <div class="">

    <!--.preloader-->
      <div class="preloader"> <i class="fa fa-circle-o-notch fa-spin"></i></div>
      <!--/.preloader-->

      <header id="home">
        <div id="home-slider" class="carousel slide carousel-fade" data-ride="carousel">
          <div class="carousel-inner">
            <div class="item active" style="background-image: url(images/slider/1.jpg)">
              <div class="caption">
                <h1 class="animated fadeInLeftBig">Welcome to <span>Oxygen</span></h1>
                <p class="animated fadeInRightBig">Bootstrap - Responsive Design - Retina Ready - Parallax</p>
                <a data-scroll class="btn btn-start animated fadeInUpBig" href="#services">Start now</a>
              </div>
            </div>
            <div class="item" style="background-image: url(images/slider/2.jpg)">
              <div class="caption">
                <h1 class="animated fadeInLeftBig">Say Hello to <span>Oxygen</span></h1>
                <p class="animated fadeInRightBig">Bootstrap - Responsive Design - Retina Ready - Parallax</p>
                <a data-scroll class="btn btn-start animated fadeInUpBig" href="#services">Start now</a>
              </div>
            </div>
            <div class="item" style="background-image: url(images/slider/3.jpg)">
              <div class="caption">
                <h1 class="animated fadeInLeftBig">We are <span>Creative</span></h1>
                <p class="animated fadeInRightBig">Bootstrap - Responsive Design - Retina Ready - Parallax</p>
                <a data-scroll class="btn btn-start animated fadeInUpBig" href="#services">Start now</a>
              </div>
            </div>
          </div>
          <a class="left-control" href="#home-slider" data-slide="prev"><i class="fa fa-angle-left"></i></a>
          <a class="right-control" href="#home-slider" data-slide="next"><i class="fa fa-angle-right"></i></a>

          <a id="tohash" href="#services"><i class="fa fa-angle-down"></i></a>

        </div><!--/#home-slider-->
        <div class="main-nav">
          <div class="container">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="index.html">
                <h1><img class="img-responsive" src="images/logo.png" alt="logo"></h1>
              </a>
            </div>
            <div class="collapse navbar-collapse">
              <ul class="nav navbar-nav navbar-right">
                <li class="scroll active"><a href="#home">Home</a></li>
                <li class="scroll"><a href="#services">Service</a></li>
                <li class="scroll"><a href="#about-us">About Us</a></li>
                <li class="scroll"><a href="#portfolio">Portfolio</a></li>
                <li class="scroll"><a href="#team">Team</a></li>
                <li class="scroll"><a href="#blog">Blog</a></li>
                <li class="scroll"><a href="#contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </div><!--/#main-nav-->
      </header><!--/#home-->
      <section id="services">
        <div class="container">
          <div class="heading wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="300ms">
            <div class="row">
              <div class="text-center col-sm-8 col-sm-offset-2">
                <h2>Our Services</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam</p>
              </div>
            </div>
          </div>
          <div class="text-center our-services">
            <div class="row">
              <div class="col-sm-4 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms">
                <div class="service-icon">
                  <i class="fa fa-flask"></i>
                </div>
                <div class="service-info">
                  <h3>Brand Identity</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                </div>
              </div>
              <div class="col-sm-4 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="450ms">
                <div class="service-icon">
                  <i class="fa fa-umbrella"></i>
                </div>
                <div class="service-info">
                  <h3>Creative Idea</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                </div>
              </div>
              <div class="col-sm-4 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="550ms">
                <div class="service-icon">
                  <i class="fa fa-cloud"></i>
                </div>
                <div class="service-info">
                  <h3>Awesome Support</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                </div>
              </div>
              <div class="col-sm-4 wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="650ms">
                <div class="service-icon">
                  <i class="fa fa-coffee"></i>
                </div>
                <div class="service-info">
                  <h3>Professional Design</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                </div>
              </div>
              <div class="col-sm-4 wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="750ms">
                <div class="service-icon">
                  <i class="fa fa-bitbucket"></i>
                </div>
                <div class="service-info">
                  <h3>App Development</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                </div>
              </div>
              <div class="col-sm-4 wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="850ms">
                <div class="service-icon">
                  <i class="fa fa-gift"></i>
                </div>
                <div class="service-info">
                  <h3>Clean Code</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section><!--/#services-->




  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
</style>
