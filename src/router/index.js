import { createRouter, createWebHistory } from "vue-router";

// Default Pages
import Dashboard from "../views/Dashboard.vue";
// Component Pages
import Vprojectmanagement from "../views/components/projectmanagement.vue";
import Vaccrodion from "../views/components/accordion.vue";
import Vbadges from "../views/components/badges.vue";
import Vevaluation from "../views/components/evaluation.vue";
import Vbutton from "../views/components/button.vue";
import Vcard from "../views/components/card.vue";
import Vexamination from "../views/components/examination.vue";
import Vstudents from "../views/components/students.vue";
var appname = "Human Machine Interaction";

const routes = [
  // Routes
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
    meta: { title: "Dashboard " + appname },
  },

  // Components based Routes
  {
    path: "/component/projectmanagement",
    name: "Vprojectmanagement",
    component: Vprojectmanagement,
    meta: { title: "Project Management" + appname },
  },
  {
    path: "/component/accordion",
    name: "Vaccordion",
    component: Vaccrodion,
    meta: { title: "Accordion" + appname },
  },
  {
    path: "/component/badge",
    name: "Vbadge",
    component: Vbadges,
    meta: { title: "Badge" + appname },
  },
  {
    path: "/component/evaluation",
    name: "Vevaluation",
    component: Vevaluation,
    meta: { title: "Evaluation" + appname },
  },
  {
    path: "/component/students",
    name: "Vstudents",
    component: Vstudents,
    meta: { title: "Students" + appname },
  },
    {
    path: "/component/examination",
    name: "Vexamination",
    component: Vexamination,
    meta: { title: "Examination" + appname },
  },
  {
    path: "/component/button",
    name: "Vbutton",
    component: Vbutton,
    meta: { title: "Button" + appname },
  },
  {
    path: "/component/card",
    name: "Vcard",
    component: Vcard,
    meta: { title: "Card" + appname },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,

  linkExactActiveClass: "exact-active",
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;