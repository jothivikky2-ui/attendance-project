import { createRouter, createWebHistory } from "vue-router";
import Attendance from "../views/Attendance.vue";

const routes = [
  { path: "/", component: Attendance }
];

export default createRouter({
  history: createWebHistory(),
  routes
});

