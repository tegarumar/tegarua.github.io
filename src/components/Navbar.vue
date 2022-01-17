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
  }),
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
@media only screen and (max-width: 600px) {
  .tegar-logo {
    height: 30px;
  }
}
</style>
