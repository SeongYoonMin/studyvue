<template>
	<header id="headers">
		<a href="/" class="homeItems">HOME</a>
		<nav class="menus">
			<RouterLink
				class="items"
				:to="items.route"
				:key="index"
				v-for="(items, index) in Menus"
				>{{ items.title }}</RouterLink
			>
		</nav>
	</header>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface IHeaderMenu {
	title: string;
	route: string;
}
[];

const Menus = ref<IHeaderMenu[]>([
	{
		title: "BOARD",
		route: "/board",
	},
	{
		title: "RESUME",
		route: "/resume",
	},
	{
		title: "CONTACT",
		route: "/contact",
	},
]);
</script>

<style scoped lang="scss">
#headers {
	position: sticky;
	top: 0;
	left: 0;
	width: 100%;
	padding: 10px 20px;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: space-between;
	.menus {
		display: flex;
		align-items: center;
		justify-content: space-between;
		column-gap: 20px;

		.items {
		}
	}
}
</style>
