<template>
  <div class="center examplex">
    <vs-navbar center-collapsed v-model="active" class="fixed-top">
      <template #left>
        <img src="@/assets/img/tegar.svg" alt="Tegar" class="tegar-logo" />
      </template>
      <a href="#home" class="text-decoration-none">
        <vs-navbar-item :active="active == 'home'" id="home" class="text-pink">
          Home
        </vs-navbar-item>
      </a>

      <a href="#about">
        <vs-navbar-item
          :active="active == 'about'"
          id="about"
          class="text-pink"
        >
          About
        </vs-navbar-item>
      </a>
      <a href="#project">
        <vs-navbar-item
          :active="active == 'project'"
          id="project"
          class="text-pink"
        >
          Project
        </vs-navbar-item>
      </a>
      <a href="#contact">
        <vs-navbar-item
          :active="active == 'contact'"
          id="contact"
          class="text-pink"
        >
          Contact Me
        </vs-navbar-item>
      </a>
      <template #right>
        <div class="center">
          <vs-button dark border @click="aktif = !aktif">Sign-up</vs-button>
          <vs-dialog blur v-model="aktif">
            <template #header class="">
              <h4 class="not-margin">
                Welcome to <b class="text-pink">Tegar</b> Page !
              </h4>
            </template>

            <div class="con-form">
              <vs-input v-model="input1" placeholder="Username" class="mb-2">
                <template #icon><i class="bx bx-user"></i></template>
              </vs-input>
              <div class="center content-inputs">
                <vs-input
                  type="password"
                  v-model="value"
                  placeholder="Password"
                  :visiblePassword="hasVisiblePassword"
                  @click-icon="hasVisiblePassword = !hasVisiblePassword"
                >
                  <template #icon>
                    <i v-if="!hasVisiblePassword" class="bx bx-show-alt"></i>
                    <i v-else class="bx bx-hide"></i>
                  </template>
                </vs-input>
              </div>
              <div class="flex">
                <vs-checkbox v-model="checkbox1">Remember me</vs-checkbox>
                <a href="#">Forgot Password?</a>
              </div>
            </div>

            <template #footer>
              <div class="footer-dialog">
                <vs-button dark block> Sign In </vs-button>

                <div class="new">This login form it's just an example</div>
              </div>
            </template>
          </vs-dialog>
        </div>

        <vs-button dark @click="aktiv = !aktiv">See My CV</vs-button>
        <vs-dialog not-close auto-width not-padding v-model="aktiv">
          <div class="con-image">
            <img src="@/assets/img/cv-tegar.jpg" alt="" />
          </div>
        </vs-dialog>
      </template>
    </vs-navbar>
  </div>
</template>
<script>
export default {
  data: () => ({
    active: "home",
    aktiv: false,
    aktif: false,
    input1: "",
    input2: "",
    checkbox1: false,
    value: "",
    hasVisiblePassword: false,
    color: "dark",
  }),
  computed: {
    getProgress() {
      let progress = 0;

      // at least one number

      if (/\d/.test(this.value)) {
        progress += 20;
      }

      // at least one capital letter

      if (/(.*[A-Z].*)/.test(this.value)) {
        progress += 20;
      }

      // at menons a lowercase

      if (/(.*[a-z].*)/.test(this.value)) {
        progress += 20;
      }

      // more than 5 digits

      if (this.value.length >= 6) {
        progress += 20;
      }

      // at least one special character

      if (/[^A-Za-z0-9]/.test(this.value)) {
        progress += 20;
      }

      return progress;
    },
  },
};
</script>
<style scoped>
.text-pink {
  color: #fa34af;
}
.con-image {
  border-radius: inherit;
}
.con-image img {
  display: block;
  position: relative;
  border-radius: inherit;
  max-width: 350px;
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
  width: 100% !important;
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

@media only screen and (max-width: 600px) {
  .tegar-logo {
    height: 30px;
  }
}
</style>
