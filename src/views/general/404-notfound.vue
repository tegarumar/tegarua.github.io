<template>
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#fa34af"
        fill-opacity="1"
        d="M0,160L48,149.3C96,139,192,117,288,138.7C384,160,480,224,576,213.3C672,203,768,117,864,112C960,107,1056,181,1152,224C1248,267,1344,277,1392,282.7L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
      ></path>
    </svg>
    <!-- 404 Not Found -->
    <div class="backgound">
      <div class="container">
        <div id="notfound">
          <div class="notfound d-flex align-items-center flex-column">
            <h1 class="text-clr font-weight-bold text-pink">404</h1>
            <h2 class="text-pink">We are sorry, Page not found!</h2>
            <p class="text-pink">
              The page you are looking for might have been removed had its name
              changed or is temporarily unavailable.
            </p>
            <vs-button
              :to="{ name: 'home' }"
              class="text-center"
              dark
              @click="aktiv = !aktiv"
              >BACK TO HOME PAGE</vs-button
            >
          </div>
        </div>
      </div>
    </div>

    <!-- 404 Not Found -->
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#fa34af"
        fill-opacity="1"
        d="M0,96L48,85.3C96,75,192,53,288,58.7C384,64,480,96,576,112C672,128,768,128,864,112C960,96,1056,64,1152,64C1248,64,1344,96,1392,112L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      ></path>
    </svg>
  </div>
</template>
<script>
export default {
  setup() {},
};
</script>
<style scoped>
.text-pink {
  color: #fa34af;
}
.backgound {
  background: white;
}
body {
  padding: 0;
  margin: 0;
}

#notfound {
  position: relative;
  height: 100vh;
}

#notfound .notfound {
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.notfound {
  max-width: 920px;
  width: 100%;
  line-height: 1.4;
  text-align: center;
  padding-left: 15px;
  padding-right: 15px;
}
.notfound h1 {
  text-size: 200px;
}
h1,
.h1 {
  font-size: 9.5rem;
}

.notfound .notfound-404 {
  position: absolute;
  height: 100px;
  top: 0;
  left: 50%;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
  z-index: -1;
}

.notfound .notfound-404 h1 {
  font-weight: 900;
  font-size: 276px;
  margin: 0;
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.notfound h2 {
  font-size: 46px;
  font-weight: 900;
  text-transform: uppercase;
  margin: 0;
}

.notfound p {
  font-size: 16px;
  font-weight: 400;
  text-transform: uppercase;
  margin-top: 15px;
}

.notfound a {
  font-size: 14px;
  text-decoration: none;
  text-transform: uppercase;
  display: inline-block;
  padding: 16px 38px;
  border: 2px solid transparent;
  border-radius: 20px;
  font-weight: 400;
  -webkit-transition: 0.2s all;
  transition: 0.2s all;
}

.notfound a:hover {
  background-color: #fff;
  border-color: #189cf0;
  color: #189cf0;
}

@media only screen and (max-width: 480px) {
  .notfound .notfound-404 h1 {
    font-size: 162px;
  }
  .notfound h2 {
    font-size: 26px;
  }
}
</style>
