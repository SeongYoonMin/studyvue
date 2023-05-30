<template>
	<div class="items">
		<h1 class="title">{{ title }}</h1>
		<p class="desc">{{ description }}</p>
		<p class="create">{{ createAt }}</p>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
	title: string;
	description: string;
	createAt: string;
}>();
</script>

<style scoped lang="scss">
.items {
	border: 1px solid #f5f5f5;
	border-radius: 8px;
	padding: 12px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	line-height: 1.25;
	color: #333;
	row-gap: 8px;
	word-break: keep-all;
	.title {
		font-size: 24px;
		font-weight: 600;
	}

	.create {
		font-size: 12px;
		color: #919191;
	}
}
</style>
