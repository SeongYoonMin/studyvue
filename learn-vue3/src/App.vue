<template>
	<LayoutHeader></LayoutHeader>

	<main class="boardList">
		<div class="list">
			<EmitStudy
				v-for="items in boardList"
				:key="items.id"
				:title="items.title"
				:description="items.description"
				:createAt="items.createAt"
			/>
		</div>
		<button type="button" class="addBoard">새글 추가</button>
	</main>
</template>

<script setup lang="ts">
import LayoutHeader from "./components/LayoutHeader.vue";
import EmitStudy from "./components/EmitStudy.vue";
import { ref } from "vue";
interface Board {
	id: number;
	title: string;
	description: string;
	createAt: string;
}

const boardList = ref<Board[]>([
	{
		id: 0,
		title: "제목",
		description: "이 부분은 설명이 들어가는 부분입니다.",
		createAt: "2023-05-30",
	},
]);
</script>

<style scoped lang="scss">
.boardList {
	padding: 20px;
	box-sizing: border-box;

	.list {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
		row-gap: 20px;
		column-gap: 12px;
	}
	.addBoard {
		border: 1px solid #ececec;
		border-radius: 4px;
		background-color: white;
		padding: 4px 8px;
		color: #616161;
		font-size: 14px;
		transition: 0.3s all;
		cursor: pointer;
		&:hover {
			border-color: rgb(255, 193, 181);
			color: rgb(255, 193, 181);
		}
	}
}
</style>
