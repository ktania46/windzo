<template>
  <!-- App -->
  <div class="flex bg-packed font-lexend dark:bg-gray-900">
    <div
      id="sidebar-scroll"
      class="flex-sidebar lg:flex-auto w-sidebar lg:block hidden bg-white dark:bg-gray-800 border-r-2 dark:border-gray-700 h-screen lg:z-0 z-40 overflow-auto lg:relative fixed"
    >
      <Sidebar />
    </div>
    <div class="flex-auto w-full overflow-auto h-screen" id="body-scroll">
      <Header />
      <router-view />
      <Footer />
    </div>
  </div>

  <div>
    <div class="output">Data: {{ value }}</div>
    <Slider v-model="value" />
  </div>
  
  <!-- end app -->
</template>

<script>
  // vue Components
  import Sidebar from "@/components/Sidebar";
  import Header from "@/components/Header";
  import Footer from "@/components/Footer";
  // npm-js
  import Scrollbar from "smooth-scrollbar";
  import Slider from '@vueform/slider'
  export default {
    name: "App",

    components: {
      Header,
      Footer,
      Sidebar,
      Slider
    },
    data(){
      return{
        value:20
      }
    },
    mounted() {
      Scrollbar.init(document.querySelector("#body-scroll"));

      setTimeout(() => {
        var projectmanagement_dis = document.querySelectorAll(".projectmanagement-dismiss");
        projectmanagement_dis.forEach((x) =>
          x.addEventListener("click", function () {
            x.parentElement.classList.add("hidden");
          })
        );
      }, 100);
    },
  };
</script>
<style src="@vueform/slider/themes/default.css"></style>

<style scoped>
.output {
  font-family: Courier, Courier New, Lucida Console, Monaco, Consolas;
  background: #000000;
  color: #ffffff;
  padding: 20px;
  margin-bottom: 50px;
  display: inline-block;
  width: 100%;
  box-sizing: border-box;
  font-size: 13px;
}
</style>