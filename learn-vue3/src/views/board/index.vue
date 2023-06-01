<template>
	<main class="boardList">
		<div class="list">
			<EmitStudy
				v-for="(items, index) in boardList"
				:key="index"
				:title="items.title"
				:description="items.description"
				:createAt="items.createAt"
			/>
		</div>
		<button type="button" class="addBoard" @click="boardPopupState">
			새글 추가
		</button>
	</main>
	<Teleport to="body">
		<AddBoard
			v-if="addBoardRef"
			@closeEmits="boardPopupState"
			@addEmits="addBoardList"
		></AddBoard>
	</Teleport>
</template>

<script setup lang="ts">
import LayoutHeader from "@/components/LayoutHeader.vue";
import EmitStudy from "@/components/EmitStudy.vue";
import AddBoard from "@/components/AddBoard.vue";
import { ref } from "vue";
interface Board {
	title: string;
	description: string;
	createAt: string;
}

const addBoardRef = ref<boolean>(false);
const boardList = ref<Board[]>([
	{
		title: "제목",
		description: "이 부분은 설명이 들어가는 부분입니다.",
		createAt: "2023-05-30",
	},
]);
const boardPopupState = () => {
	addBoardRef.value = !addBoardRef.value;
};
const addBoardList = (title: string, desc: string, date: string) => {
	const newBoard: Board = {
		title: title,
		description: desc,
		createAt: date,
	};
	boardList.value.push(newBoard);
	addBoardRef.value = !addBoardRef.value;
};
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
		margin-top: 40px;
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
