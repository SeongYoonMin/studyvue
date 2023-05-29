<template>
	<LayoutHeader></LayoutHeader>
	<div>
		<PropsStudy
			:title="titles"
			:content="true"
			:new="true"
			@newProps="titles = '바뀐 첫번째 프롭스'"
		></PropsStudy>
	</div>
</template>

<script setup lang="ts">
import PropsStudy from "./components/PropsStudy.vue";
import LayoutHeader from "./components/LayoutHeader.vue";
import { ref } from "vue";

const titles = ref<string>('첫번째 프롭스')
</script>

<style scoped></style>
