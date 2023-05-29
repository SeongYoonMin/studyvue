<template>
	<div v-if="content">
		<span v-if="props.new">{{ newAble }}</span>
		<p>{{ title }}</p>
		<button type="button" @click="titleChange">클릭</button>
	</div>
</template>

<script setup lang="ts">
import { computed } from "vue";

export interface StudyProps {
	title: string;
	content: string;
	new?: boolean;
}
const props = defineProps<StudyProps>();
const emit = defineEmits(["newProps"]);

const titleChange = () => {
	emit("newProps");
};
const newAble = computed(() => {
	return props.new ? "신규" : "";
});
</script>

<style scoped></style>
