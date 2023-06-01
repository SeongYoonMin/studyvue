<template>
	<div id="app">
		<LayoutHeader />
		<router-view></router-view>
	</div>
</template>

<script setup lang="ts">
import LayoutHeader from "./components/LayoutHeader.vue";
</script>

<style scoped lang="scss">
</style>
