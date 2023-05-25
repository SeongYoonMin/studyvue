<template>
	<div>
		<p>{{ refs }}</p>
		<button type="button" @click="refsHandler(refs, $event)">값 변경</button>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const refs = ref<number>(300);
type refsEvents = (args: number, event: Event) => void;
const refsHandler: refsEvents = (args: number, event: Event) => {
	refs.value++;
};
</script>

<style scoped></style>
