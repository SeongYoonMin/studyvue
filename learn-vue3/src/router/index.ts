import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Resume from "@/views/resume/index.vue";
import Contact from "@/views/contact/index.vue";
import Board from "@/views/board/index.vue";

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
		props: true,
	},
	{
		path: "/resume",
		name: "Resume",
		component: Resume,
		props: true,
	},
	{
		path: "/contact",
		name: "Contact",
		component: Contact,
		props: true,
	},
	{
		path: "/board",
		name: "Board",
		component: Board,
		props: true,
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
