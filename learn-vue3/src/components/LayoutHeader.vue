<template>
	<header id="headers">
		<a href="/" class="homeItems">HOME</a>
		<nav class="menus">
			<a
				class="items"
				:href="items.route"
				:key="items.id"
				v-for="items in Menus"
				>{{ items.title }}</a
			>
		</nav>
	</header>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface IHeaderMenu {
	id: number;
	title: string;
	route: string;
}
[];

const Menus = ref<IHeaderMenu[]>([
	{
		id: 0,
		title: "INFORMATION",
		route: "/",
	},
	{
		id: 1,
		title: "CONTACT",
		route: "/",
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
