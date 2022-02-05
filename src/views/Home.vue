<template>
  <div class="home">
    <section id="home">
      <div class="welcome">
        <div class="container mt-5 mb-5 text-center">
          <div class="row flex-lg-row flex-column-reverse bd-highlight">
            <div
              data-aos="zoom-in"
              data-aos-anchor-placement="top-center"
              class="col-lg-7 d-flex flex-column justify-content-end align-items-center"
            >
              <div class="home-konten">
                <h2
                  class="mt-5 lead text-white fw-normal"
                  style="font-size: 30px"
                >
                  Hi, Welcome to my Page
                </h2>
                <h1 class="text-white">
                  Anyway my name is <span>Tegar</span> !
                </h1>
                <p class="sub text-white">
                  This is my official Portfolio website to showcase my all works
                  related to <br class="responsive" />
                  web development
                </p>
                <div
                  class="container d-flex justify-content-center align-items-center"
                >
                  <div class="center">
                    <vs-button
                      success
                      class="text-pink fw-bold"
                      @click="active = !active"
                      size="large"
                    >
                      Hire Me
                    </vs-button>
                    <vs-dialog v-model="active">
                      <template #header>
                        <h4 class="not-margin">
                          Get my <b class="text-pink">Contact</b>
                        </h4>
                      </template>
                      <div class="con-content">
                        <div class="container">
                          <div class="row">
                            <div class="col-12 d-flex align-items-center mb-3">
                              <vs-button
                                href="mailto:tegarumarabdillah@gmail.com"
                                icon
                                target="_blank"
                                color="google-plus"
                              >
                                <i class="bx bxl-google-plus"></i>
                              </vs-button>

                              <a
                                target="_blank"
                                href="mailto:tegarumarabdillah@gmail.com"
                                class="ms-2 m-0 text-decoration-none"
                              >
                                tegarumarabdillah@gmail.com
                              </a>
                            </div>
                            <div class="col-12 d-flex align-items-center mb-3">
                              <vs-button
                                href="https://www.instagram.com/tegar.ua/"
                                blank
                                icon
                                color="#8a3ab9"
                              >
                                <i class="bx bxl-instagram"></i>
                              </vs-button>
                              <a
                                target="_blank"
                                href="https://www.instagram.com/tegar.ua/"
                                class="ms-2 m-0 text-decoration-none"
                                >@tegar.ua</a
                              >
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-12 d-flex align-items-center mb-3">
                              <vs-button
                                icon
                                blank
                                href="https://www.linkedin.com/in/tegar-umar-abdillah-b2b02b219/"
                                color="linkedin"
                              >
                                <i class="bx bxl-linkedin"></i>
                              </vs-button>
                              <a
                                target="_blank"
                                href="https://www.linkedin.com/in/tegar-umar-abdillah-b2b02b219/"
                                class="ms-2 m-0 text-decoration-none"
                                >Tegar Umar Abdillah</a
                              >
                            </div>
                            <div class="col-12 d-flex align-items-center mb-3">
                              <vs-button
                                icon
                                color="#000000"
                                href="https://github.com/tegarumar"
                                blank
                              >
                                <i class="bx bxl-github"></i>
                              </vs-button>
                              <a
                                target="_blank"
                                href="https://github.com/tegarumar"
                                class="ms-2 m-0 text-decoration-none"
                                >tegarumar</a
                              >
                            </div>
                          </div>
                          <div class="container d-flex justify-content-center">
                            <div
                              class="row d-flex justify-content-center align-items-center"
                            >
                              <p>
                                <b class="text-pink"> CV's</b> Made by
                                <a
                                  href="https://www.instagram.com/_naufalfzn/"
                                  target="_blank"
                                  class="text-decoration-none"
                                  >@_naufalfzn</a
                                >
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </vs-dialog>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-anchor-placement="top-center"
              class="col-lg-5 d-flex justify-content-center align-items-end"
            >
              <div class="home-img">
                <img
                  src="@/assets/img/man3.svg"
                  class="profile mt-5"
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            class="bg-white"
            fill-opacity="1"
            d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
    <section id="about">
      <div
        class="container about-"
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
      >
        <div class="mt-5 mb-4 text-center">
          <div class="container">
            <h1 class="mb-4">About <span> me </span></h1>
          </div>
          <section class="jumbotron text-center line">
            <h1 class="display-4">Tegar Umar <span> Abdillah </span></h1>
            <p class="lead job">
              Web Programmer | <span>Software Engineering</span>
            </p>
          </section>
        </div>
      </div>

      <div
        class="container"
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
      >
        <div class="line">
          <p class="lead text-lg-center caption">
            Hi, my name is Tegar Umar Abdillah. I have an interest in
            <span> software engineering</span> and until now I'm still learning
            more about <span> software engineering</span>. I am a person who
            focuses on learning about new things. Anyway i'm Web Progammer
            especially <span> Frontend Developer</span>, for Backend i'm still
            learning on it.
          </p>
        </div>
      </div>
    </section>
    <section id="project">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ffa8de"
          fill-opacity="1"
          d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <div class="project">
        <div class="container">
          <div class="d-flex justify-content-center">
            <h1 class="text-center text-white mb-5 line2">Projects</h1>
          </div>
          <div
            style="overflow-x: hidden"
            class="row align-items-center mb-md-0 mb-5"
          >
            <div
              data-aos="fade-right"
              class="col-lg-4 d-flex justify-content-start mb-4"
            >
              <a
                href="https://soca.ai/"
                class="text-decoration-none"
                target="_blank"
              >
                <vs-card>
                  <template #title>
                    <h3>Soca AI</h3>
                  </template>
                  <template #img>
                    <img src="@/assets/img/socaai.svg" alt="socaai" />
                  </template>
                  <template #text>
                    <p>Soca AI website it's Made by Me !</p>
                  </template>
                </vs-card>
              </a>
            </div>
            <div
              data-aos="fade-left"
              class="col d-flex align-items-start flex-column"
            >
              <div class="mb-2 d-flex">
                <img src="@/assets/img/soca-text.svg" alt="" class="" />
                <h4 class="m-0 ms-2 text-white">Website</h4>
              </div>
              <p class="text-white project-text">
                "Soca AI is an artificial intelligence platform with a specific
                use case that ready to use. Focus on computer vision for Facial
                Recognition, Object Detection, Product Counting, Quality
                Inspection, Proctoring Exam and many other services. Our current
                product is Soca Rupa & Soca Ganita."
              </p>
              <vs-button dark size="large" blank href="https://soca.ai/">
                <i class="bx bx-globe me-2"></i>
                Website
                <template #animate> Click it </template>
              </vs-button>
            </div>
          </div>
          <div
            style="overflow-x: hidden"
            class="row align-items-center mb-md-0 mb-5"
          >
            <div data-aos="fade-right" class="col-lg-4 mb-4">
              <a
                href="https://birutekno.com/"
                class="text-decoration-none"
                target="_blank"
              >
                <vs-card>
                  <template #title>
                    <h3>Birutekno Website</h3>
                  </template>
                  <template #img>
                    <img src="@/assets/img/birtek.svg" alt="birutekno" />
                  </template>
                  <template #text>
                    <p>Birutekno Website it's Made by Me !</p>
                  </template>
                </vs-card>
              </a>
            </div>
            <div
              data-aos="fade-left"
              class="col d-flex align-items-start flex-column"
            >
              <div class="d-flex justify-content-start mb-2">
                <img
                  src="@/assets/img/biru-logo.svg"
                  alt=""
                  class="biru-logo"
                />
                <div class="d-flex align-items-end ms-2">
                  <h4 class="m-0 ms-2 text-white">Website</h4>
                </div>
              </div>
              <p class="text-white project-text">
                "Birutekno Inc. is subsidiary of PT. Jimmy Group Technology.
                Birutekno is a Software Development Company, based in Bandung
                Indonesia. We provide AI Services, Web or Mobile Application,
                Design and Digital Multimedia."
              </p>
              <vs-button dark size="large" blank href="https://birutekno.com/">
                <i class="bx bx-globe me-2"></i>
                Website
                <template #animate> Click it </template>
              </vs-button>
            </div>
          </div>
          <div
            style="overflow-x: hidden"
            class="row align-items-center mb-md-0 mb-5"
          >
            <div data-aos="fade-right" class="col-lg-4 mb-4">
              <a href="#" class="text-decoration-none">
                <vs-card>
                  <template #title>
                    <h3>Marque NLP</h3>
                  </template>
                  <template #img>
                    <img src="@/assets/img/nlp.png" alt="nlp" />
                  </template>
                  <template #text>
                    <p>I'm part of NLP Marque frontend Team</p>
                  </template>
                </vs-card>
              </a>
            </div>
            <div
              data-aos="fade-left"
              class="col d-flex align-items-start flex-column"
            >
              <div class="mb-2 d-flex">
                <div class="d-flex align-items-end">
                  <img
                    src="@/assets/img/nlp-text.svg"
                    alt=""
                    class="nlp-text"
                  />
                </div>
                <h4 class="m-0 ms-2 text-white">Dashboard</h4>
              </div>
              <p class="text-white project-text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Facilis molestias, quibusdam labore natus quod perferendis optio
                ex ab ut sit, harum, rerum esse suscipit? Quasi nostrum expedita
                repellendus corrupti neque!
              </p>
            </div>
          </div>
          <div
            style="overflow-x: hidden"
            class="row align-items-center mb-md-0 mb-5"
          >
            <div data-aos="fade-right" class="col-lg-4 mb-4">
              <a href="#" class="text-decoration-none">
                <vs-card>
                  <template #title>
                    <h3>VROS Admin</h3>
                  </template>
                  <template #img>
                    <img src="@/assets/img/vros.png" alt="vros" />
                  </template>
                  <template #text>
                    <p>I'm part of VROS Admin Website Team</p>
                  </template>
                </vs-card>
              </a>
            </div>
            <div
              data-aos="fade-left"
              class="col d-flex align-items-start flex-column"
            >
              <div class="d-flex justify-content-start mb-2">
                <div class="d-flex align-items-end">
                  <img
                    src="@/assets/img/vros-logo.png"
                    alt=""
                    class="biru-logo"
                  />
                </div>
                <div class="d-flex align-items-center ms-2">
                  <h4 class="m-0 ms-2 text-white">
                    Website & Mobile (Android)
                  </h4>
                </div>
              </div>
              <p class="text-white project-text">
                "VROS (Virtual Office Solutions) is the first Indonesian Suite
                Application. To collaboration and increasing the productivity."
              </p>
              <p class="text-white project-text">Download the App :</p>
              <div class="d-flex">
                <vs-button
                  dark
                  blank
                  size="large"
                  class="me-2"
                  href="https://play.google.com/store/apps/details?id=org.vrosapp.meet"
                >
                  <i class="bx bxl-play-store me-2"></i> Google Play
                </vs-button>
                <vs-button
                  dark
                  blank
                  size="large"
                  href="https://apps.apple.com/us/app/id1532381007"
                >
                  <i class="bx bxl-apple me-2"></i> App Store
                </vs-button>
              </div>
            </div>
          </div>
          <div
            style="overflow-x: hidden"
            class="row align-items-center mb-md-0 mb-5"
          >
            <div data-aos="fade-right" class="col-lg-4 mb-4">
              <a href="#" class="text-decoration-none">
                <vs-card>
                  <template #title>
                    <h3>CekBumil App</h3>
                  </template>
                  <template #img>
                    <img src="@/assets/img/bumilapp.svg" alt="nlp" />
                  </template>
                  <template #text>
                    <p>My First case study of Android app</p>
                  </template>
                </vs-card>
              </a>
            </div>
            <div
              data-aos="fade-left"
              class="col d-flex align-items-start flex-column"
            >
              <div class="mb-2 d-flex align-items-center">
                <div class="d-flex align-items-end">
                  <img
                    src="@/assets/img/bumil-logo.png"
                    alt=""
                    class="bumil-logo"
                  />
                </div>
                <h4 class="m-0 ms-2 text-white">Android App</h4>
              </div>
              <p class="text-white project-text">
                My first case study was fun, this app is useful for checking
                pregnancy health by online using this app. it's a great app
                isn't it? unfortunately this app it's just an example :(
              </p>
            </div>
          </div>

          <a href="#" class="text-decoration-none"
            ><p class="m-0 text-center text-white mt-4 fw-bold">
              And many more
            </p></a
          >
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ffa8de"
          fill-opacity="1"
          d="M0,256L48,245.3C96,235,192,213,288,218.7C384,224,480,256,576,250.7C672,245,768,203,864,186.7C960,171,1056,181,1152,208C1248,235,1344,277,1392,298.7L1440,320L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
      <div class="skill">
        <div class="container">
          <div class="d-flex justify-content-center">
            <h1 class="text-center mt-5 mb-5 line3">My Skills</h1>
          </div>
          <div class="mb-3">
            <h2 class="line3">Using now :</h2>
          </div>
          <div
            class="row justify-content-center align-items-center mt-5"
            data-aos="fade-up"
          >
            <div class="col-lg-4 d-flex justify-content-center mb-lg-0 mb-5">
              <vs-tooltip left dark>
                <vs-button
                  success
                  @click="phpNotification('bottom-center', 'dark')"
                >
                  <img
                    src="https://www.php.net/images/logos/new-php-logo.png"
                    alt="php"
                    class="logo-php"
                  />
                </vs-button>

                <template #tooltip> PHP </template>
              </vs-tooltip>
            </div>
            <div class="col-lg-4 d-flex justify-content-center mb-lg-0 mb-5">
              <vs-tooltip dark>
                <vs-button
                  success
                  @click="gitNotification('bottom-center', 'dark')"
                >
                  <img
                    src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
                    alt="git"
                    class="logo-git"
                  />
                </vs-button>
                <template #tooltip> Git </template>
              </vs-tooltip>
            </div>
            <div class="col-lg-4 d-flex justify-content-center mb-lg-0">
              <vs-tooltip right dark>
                <vs-button
                  success
                  @click="jsNotification('bottom-center', 'dark')"
                >
                  <img
                    src="@/assets/img/javascript-logo.png"
                    alt="javascript"
                    class="logo-js"
                  />
                </vs-button>
                <template #tooltip> JavaScript </template>
              </vs-tooltip>
            </div>
          </div>
          <div
            class="row justify-content-center align-items-center mt-5 mb-5"
            data-aos="fade-up"
          >
            <div class="col-lg-4 d-flex justify-content-center mb-lg-0 mb-5">
              <vs-tooltip left dark>
                <vs-button
                  success
                  @click="bootstrapNotification('bottom-center', 'dark')"
                >
                  <img
                    src="@/assets/img/bootstrap.png"
                    alt="bootsrap"
                    class="logo-boot"
                  />
                </vs-button>
                <template #tooltip> Bootstrap </template>
              </vs-tooltip>
            </div>
            <div class="col-lg-4 d-flex justify-content-center mb-lg-0 mb-5">
              <vs-tooltip dark>
                <vs-button
                  success
                  @click="htmlcssNotification('bottom-center', 'dark')"
                >
                  <img
                    src="@/assets/img/html-css-logo.png"
                    alt="html&css"
                    class="logo-html"
                  />
                </vs-button>
                <template #tooltip> HTML & CSS </template>
              </vs-tooltip>
            </div>
            <div class="col-lg-4 d-flex justify-content-center mb-lg-0 mb-3">
              <vs-tooltip right dark>
                <vs-button
                  success
                  @click="vueNotification('bottom-center', 'dark')"
                >
                  <img src="@/assets/img/vue.png" alt="vue" class="logo-vue" />
                </vs-button>
                <template #tooltip> Vue JS </template>
              </vs-tooltip>
            </div>
          </div>
          <div class="mb-3">
            <h2 class="line3">Learning :</h2>
          </div>
          <div
            class="row justify-content-center align-items-center mt-5"
            data-aos="fade-up"
          >
            <div class="col d-flex justify-content-center mb-lg-0 mb-5">
              <vs-tooltip left dark>
                <vs-button
                  success
                  @click="laravelNotification('bottom-center', 'dark')"
                >
                  <img
                    src="@/assets/img/laravel.png"
                    alt="laravel"
                    class="logo-laravel"
                  />
                </vs-button>
                <template #tooltip> Laravel </template>
              </vs-tooltip>
            </div>
            <div class="col-lg-3 d-flex justify-content-center mb-lg-0 mb-5">
              <vs-tooltip dark>
                <vs-button
                  success
                  @click="reactNotification('bottom-center', 'dark')"
                >
                  <img
                    src="@/assets/img/react.png"
                    alt="react"
                    class="logo-react"
                  />
                </vs-button>
                <template #tooltip> React JS </template>
              </vs-tooltip>
            </div>
            <div class="col-lg-3 d-flex justify-content-center mb-lg-0 mb-5">
              <vs-tooltip dark>
                <vs-button
                  success
                  @click="postgreNotification('bottom-center', 'dark')"
                >
                  <img
                    src="@/assets/img/postgre.png"
                    alt="react"
                    class="logo-react"
                  />
                </vs-button>
                <template #tooltip> PostgreSQL </template>
              </vs-tooltip>
            </div>
            <div class="col-lg-3 d-flex justify-content-center mb-lg-0 mb-4">
              <vs-tooltip right dark>
                <vs-button
                  success
                  icon
                  @click="javaNotification('bottom-center', 'dark')"
                >
                  <img
                    src="@/assets/img/java.png"
                    alt="java"
                    class="logo-size"
                  />
                </vs-button>
                <template #tooltip> Java </template>
              </vs-tooltip>
            </div>
          </div>
        </div>
      </div>
    </section>

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#fa34af"
        fill-opacity="1"
        d="M0,96L48,85.3C96,75,192,53,288,58.7C384,64,480,96,576,112C672,128,768,128,864,112C960,96,1056,64,1152,64C1248,64,1344,96,1392,112L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      ></path>
    </svg>
    <div class="contact">
      <section id="contact">
        <div class="line2 container d-flex justify-content-center">
          <div class="container mb-5">
            <div data-aos="fade-up" data-aos-anchor-placement="top-center">
              <div class="row text-center mb-3">
                <div class="col">
                  <h2 class="text-white fw-bold">
                    Overcome ignorance and <br />
                    Fight for Equality
                  </h2>
                  <p class="text-white">
                    Let's get started guys, i can't wait to be your Web
                    Developer partner and to colaborate with you !. Anyway
                    thanks for visiting to my Website, Hope you guys Enjoy it !
                  </p>
                  <h3 class="text-white fw-bold">Contact Me</h3>
                </div>
              </div>
            </div>

            <div class="row justify-content-center">
              <div class="col-md-6">
                <div data-aos="fade-up" data-aos-anchor-placement="top-center">
                  <form @submit.prevent="submit" name="tegar-form-contact">
                    <div class="mb-3">
                      <label for="Name" class="form-label text-white"
                        >Full Name</label
                      >

                      <vs-input
                        autocomplete="off"
                        class="mb-2"
                        id="name"
                        aria-describedby="name"
                        name="name"
                        required
                        icon-after
                      >
                        <template #icon><i class="bx bx-user"></i></template>
                      </vs-input>
                    </div>
                    <div class="mb-3">
                      <label for="email" class="form-label text-white"
                        >Email</label
                      >
                      <vs-input
                        autocomplete="off"
                        type="email"
                        class="mb-2"
                        id="email"
                        aria-describedby="email"
                        name="email"
                        required
                        icon-after
                      >
                        <template #icon><i class="bx bx-at"></i></template>
                      </vs-input>
                    </div>
                    <div class="mb-3">
                      <label for="pesan" class="form-label text-white"
                        >Message</label
                      >
                      <textarea
                        class="form-control text-area"
                        id="message"
                        name="message"
                        rows="3"
                      ></textarea>
                      <!-- <vs-input
                        class="text-area"
                        id="message"
                        name="message"
                        required
                      /> -->
                    </div>
                    <div class="d-flex justify-content-center">
                      <vs-button
                        success
                        block
                        size="large"
                        type="submit"
                        class="text-pink"
                        >Submit</vs-button
                      >
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="container">
        <footer class="text-black text-center pb-5 mt-5">
          <div
            class="row flex-lg-row flex-column-reverse bd-highlight d-flex align-items-center"
          >
            <div
              class="col-lg-4 d-flex justify-content-start align-items-start logo-mobile"
            >
              <img src="@/assets/img/favicon-1.png" alt="" />
            </div>
            <div
              class="col-lg-4 col-sm-8 d-flex justify-content-md-end justify-content-center"
            >
              <p class="text-white">
                Created with
                <b-icon icon="heart-fill" variant="danger"></b-icon> By
                <a
                  target="_blank"
                  href="https://www.instagram.com/tegar.ua/"
                  class="text-white fw-bold"
                  >Tegar Umar Abdillah</a
                >
              </p>
            </div>
            <div
              class="col-lg-4 d-flex justify-content-md-end justify-content-center mb-md-0 mb-3"
            >
              <vs-button
                size="large"
                success
                border
                href="mailto:tegarumarabdillah@gmail.com"
                class="d-flex align-items-center"
              >
                <i class="bx bxl-google-plus"></i>
              </vs-button>
              <vs-button
                size="large"
                success
                blank
                border
                href="https://www.instagram.com/tegar.ua/"
                class="d-flex align-items-center"
              >
                <i class="bx bxl-instagram"></i>
              </vs-button>
              <vs-button
                size="large"
                success
                blank
                border
                href="https://www.linkedin.com/in/tegar-umar-abdillah-b2b02b219/"
                class="d-flex align-items-center"
              >
                <i class="bx bxl-linkedin"></i>
              </vs-button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>
<script>
// ES6 Modules or TypeScript
import Swal from "sweetalert2";

// CommonJS

export default {
  setup() {},
  data: () => ({
    active: false,
    input1: "",
    input2: "",
    checkbox1: false,
  }),
  methods: {
    phpNotification(position = null, color) {
      //eslint-disable-next-line no-unused-vars
      const noti = this.$vs.notification({
        color,
        flat: true,
        position,
        title: "PHP: Hypertext Preprocessor",
        text: `bahasa skrip dengan fungsi umum yang terutama digunakan untuk pengembangan web. Bahasa ini awalnya dibuat oleh pemrogram Denmark-Kanada Rasmus Lerdorf pada tahun 1994.`,
      });
    },
    gitNotification(position = null, color) {
      //eslint-disable-next-line no-unused-vars
      const noti = this.$vs.notification({
        color,
        position,
        title: "Git",
        text: `Git adalah perangkat lunak pengendali versi atau proyek manajemen kode perangkat lunak yang diciptakan oleh Linus Torvalds, yang pada awalnya ditujukan untuk pengembangan kernel Linux. Desain Git terinspirasi oleh BitKeeper dan Monotone.`,
      });
    },
    jsNotification(position = null, color) {
      //eslint-disable-next-line no-unused-vars
      const noti = this.$vs.notification({
        flat: true,
        color,
        position,
        title: "JavaScript",
        text: `avaScript adalah bahasa pemrograman tingkat tinggi dan dinamis. JavaScript populer di internet dan dapat bekerja di sebagian besar penjelajah web populer seperti Google Chrome, Internet Explorer, Mozilla Firefox, Netscape dan Opera. Kode JavaScript dapat disisipkan dalam halaman web menggunakan tag SCRIPT.`,
      });
    },
    bootstrapNotification(position = null, color) {
      //eslint-disable-next-line no-unused-vars
      const noti = this.$vs.notification({
        color,
        position,
        title: "Bootstrap",
        text: `Bootstrap adalah kerangka kerja CSS yang sumber terbuka dan bebas untuk merancang situs web dan aplikasi web. Kerangka kerja ini berisi templat desain berbasis HTML dan CSS untuk tipografi, formulir, tombol, navigasi, dan komponen antarmuka lainnya, serta juga ekstensi opsional JavaScript.`,
      });
    },
    htmlcssNotification(position = null, color) {
      //eslint-disable-next-line no-unused-vars
      const noti = this.$vs.notification({
        color,
        position,
        flat: true,
        title: "HTML & CSS",
        text: `Hypertext Markup Language adalah bahasa markah standar untuk dokumen yang dirancang untuk ditampilkan di peramban internet. Ini dapat dibantu oleh teknologi seperti Cascading Style Sheets dan bahasa scripting seperti JavaScript dan VBScript. Cascading Style Sheet merupakan aturan untuk mengatur beberapa komponen dalam sebuah web sehingga akan lebih terstruktur dan seragam. CSS bukan merupakan bahasa pemograman.`,
      });
    },
    vueNotification(position = null, color) {
      //eslint-disable-next-line no-unused-vars
      const noti = this.$vs.notification({
        color,
        position,
        title: "Vue.js",
        text: `Vue.js adalah kerangka kerja JavaScript yang bersifat progresif, bersumber terbuka untuk membangun antarmuka pengguna. Integrasi ke dalam proyek yang menggunakan pustaka JavaScript lainnya mudah dilakukan dengan Vue karena ia dirancang untuk bisa berjalan hanya di beberapa bagian halaman web.`,
      });
    },
    laravelNotification(position = null, color) {
      //eslint-disable-next-line no-unused-vars
      const noti = this.$vs.notification({
        color,
        position,
        title: "Laravel",
        text: `Laravel adalah kerangka kerja aplikasi web berbasis PHP yang sumber terbuka, menggunakan konsep Model-View-Controller. Laravel berada dibawah lisensi MIT, dengan menggunakan GitHub sebagai tempat berbagi kode. `,
      });
    },
    reactNotification(position = null, color) {
      //eslint-disable-next-line no-unused-vars
      const noti = this.$vs.notification({
        color,
        flat: true,
        position,
        title: "React",
        text: `React adalah pustaka JavaScript front-end sumber terbuka dan gratis untuk membangun antarmuka pengguna berdasarkan komponen UI. Itu dikelola oleh Meta dan komunitas pengembang individu dan perusahaan. React dapat digunakan sebagai basis dalam pengembangan aplikasi satu halaman atau mobile.`,
      });
    },
    postgreNotification(position = null, color) {
      //eslint-disable-next-line no-unused-vars
      const noti = this.$vs.notification({
        color,
        position,
        title: "PostgreSQL",
        text: `PostgreSQL adalah sebuah sistem basis data yang disebarluaskan secara bebas menurut Perjanjian lisensi BSD. Peranti lunak ini merupakan salah satu basis data yang paling banyak digunakan saat ini, selain MySQL dan Oracle. PostgreSQL menyediakan fitur yang berguna untuk replikasi basis data.`,
      });
    },
    javaNotification(position = null, color) {
      //eslint-disable-next-line no-unused-vars
      const noti = this.$vs.notification({
        color,
        flat: true,
        position,
        title: "Java",
        text: `Java adalah bahasa pemrograman yang dapat dijalankan di berbagai komputer termasuk telepon genggam. Bahasa ini awalnya dibuat oleh James Gosling saat masih bergabung di Sun Microsystems, yang saat ini merupakan bagian dari Oracle dan dirilis tahun 1995.`,
      });
    },
    submit() {
      const scriptURL =
        "https://script.google.com/macros/s/AKfycbyENiSOxPDsGdi-q2-Qo4GF-Hr1HVdz1Be5ZozidHmaWFgvwdlG43ZjRUdKdmCQK56Zaw/exec";
      const form = document.forms["tegar-form-contact"];

      fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then((response) => console.log("Success!", response))
        .then(
          Swal.fire({
            icon: "success",
            title: "Success !",
            text: "Thanks for contacting Me !",
            confirmButtonColor: "#fa34af",
            iconColor: "#fa34af",
          })
        )
        .catch((error) => console.error("Error!", error.message));
    },
  },
};
</script>
<style>
.bx-user,
.bx-at {
  color: #fa34af;
}
.vs-input {
  width: 100%;
}
.form-control {
  border-radius: 12px;
  background: rgba(var(--vs-gray-2), 1);
  color: rgba(var(--vs-text), 1);
}
/* .text-area .vs-input {
  height: 100px !important;
} */
.not-margin {
  margin: 0px;
  font-weight: normal;
  padding: 10px;
}
.con-form {
  width: 100%;
}
.con-form .flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.con-form .flex a {
  font-size: 0.8rem;
  opacity: 0.7;
}
.con-form .flex a:hover {
  opacity: 1;
}
.con-form .vs-checkbox-label {
  font-size: 0.8rem;
}
.con-form .vs-input-content {
  margin: 10px 0px;
  width: calc(100%);
}
.con-form .vs-input-content .vs-input {
  width: 100%;
}
.footer-dialog {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: calc(100%);
}
.footer-dialog .new {
  margin: 0px;
  margin-top: 20px;
  padding: 0px;
  font-size: 0.7rem;
}
.footer-dialog .new a {
  color: rgba(var(--vs-primary), 1) !important;
  margin-left: 6px;
}
.footer-dialog .new a:hover {
  text-decoration: underline;
}
.footer-dialog .vs-button {
  margin: 0px;
}

.responsive {
  display: inline;
}
.contact {
  background: #fa34af;
}
.text-pink {
  color: #fa34af;
}
.nlp-text {
  width: 150px;
}
.welcome {
  background: #fa34af;
}
.project {
  background: #ffa8de;
}
.profile {
  width: 300px;
  height: 300px;
}
.line {
  display: inline-block;
  padding-bottom: 5px;
  background: linear-gradient(to left, #fa34af, #fa34af);
  background-size: 100% 2px;
  background-position: bottom 0 left 0, bottom 5px left 0;
  background-repeat: no-repeat;
}
.line2 {
  display: inline-block;
  padding-bottom: 12px;
  background: linear-gradient(to left, #fff, #fff);
  background-size: 100% 3px;
  background-position: bottom 0 left 0, bottom 5px left 0;
  background-repeat: no-repeat;
}
.line3 {
  display: inline-block;
  padding-bottom: 12px;
  background: linear-gradient(to left, #ffa8de, #ffa8de);
  background-size: 100% 3px;
  background-position: bottom 0 left 0, bottom 5px left 0;
  background-repeat: no-repeat;
}
.logo-size {
  width: 120px;
  height: 150px;
}
.logo-git {
  width: 150px;
  height: 150px;
}
.logo-js {
  width: 150px;
  height: 150px;
}
.logo-boot {
  width: 150px;
  height: 130px;
}
.logo-html {
  height: 150px;
  width: 250px;
}
.logo-laravel {
  width: 150px;
  height: 150px;
}
.logo-react {
  height: 150px;
  width: 150px;
}
.logo-vue {
  height: 140px;
  width: 150px;
}
.bumil-logo {
  width: 50px;
  height: 50px;
}
/* .:hover {
  transition: 0.7s;
  transform: scale(1.1);
} */
.home-konten h1 {
  font-size: 45px;
}
.home-konten .sub {
  color: #555;
  line-height: 22px;
}
span {
  color: orange;
}
.not-margin {
  margin: 0px;
  font-weight: normal;
  padding: 10px;
}
.con-form {
  width: 100%;
}
.con-form .flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.con-form .flex a {
  font-size: 0.8rem;
  opacity: 0.7;
}
.con-form .flex a:hover {
  opacity: 1;
}
.con-form .vs-checkbox-label {
  font-size: 0.8rem;
}
.con-form .vs-input-content {
  margin: 10px 0px;
  width: calc(100%);
}
.con-form .vs-input-content .vs-input {
  width: 100%;
}
.footer-dialog {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: calc(100%);
}
.footer-dialog .new {
  margin: 0px;
  margin-top: 20px;
  padding: 0px;
  font-size: 0.7rem;
}
.footer-dialog .new a {
  color: rgba(var(--vs-primary), 1) !important;
  margin-left: 6px;
}
.footer-dialog .new a:hover {
  text-decoration: underline;
}
.footer-dialog .vs-button {
  margin: 0px;
}
.form-control:focus {
  border-color: white;
  background-color: var(--input-background-color);
  color: white;
  box-shadow: 0 0 0 0.1rem #0275d8;
}
.about- {
}
.biru-logo {
  height: 60px;
}
.project-text {
  font-size: 18px;
}
@media only screen and (max-width: 600px) {
  .home-img {
    display: none;
  }
  .responsive {
    display: none;
  }
  .home-konten h2 {
    font-size: 20px !important;
  }
  .home-konten h1 {
    font-size: 24px !important;
  }
  .home-konten p {
    font-size: 12px !important;
  }
  #about .caption {
    font-size: 14px !important;
  }
  #about .job {
    font-size: 18px !important;
  }
  #about h1 {
    font-size: 24px !important;
  }
  .project h3 {
    font-size: 14px !important;
  }
  .project p {
    font-size: 14px !important;
  }
  .project h1 {
    font-size: 24px !important;
  }
  .skill h1 {
    font-size: 24px !important;
  }
  .skill h2 {
    font-size: 20px !important;
  }
  .logo-size {
    width: 90px !important;
    height: 120px !important;
  }
  .logo-git {
    width: 100px;
    height: 100px;
  }
  .logo-js {
    width: 100px;
    height: 100px;
  }
  .logo-boot {
    width: 100px;
    height: 80px;
  }
  .logo-html {
    height: 100px;
    width: 200px;
  }
  .logo-laravel {
    width: 100px;
    height: 100px;
  }
  .logo-react {
    height: 100px;
    width: 100px;
  }
  .logo-vue {
    height: 90px;
    width: 100px;
  }
  .logo-php {
    height: 75px;
  }
  .contact h2 {
    font-size: 20px;
  }
  .contact h3 {
    font-size: 20px;
  }
  .contact p {
    font-size: 12px;
  }
  .logo-mobile {
    display: none !important;
  }
}
</style>
