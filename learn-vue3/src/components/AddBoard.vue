<template>
	<section class="addBoard">
		<article class="addBoardBackground" @click="closeEmits"></article>
		<div class="popup">
			<form @submit.prevent="addEmits" class="formBox">
				<legend>새글 추가</legend>
				<label for="title"
					>제목 : <input type="text" id="title" name="title" v-model="titleRef"
				/></label>
				<label for="desc"
					>설명 : <input type="text" id="desc" name="desc" v-model="descRef"
				/></label>
				<div class="formEventBox">
					<button type="submit">추가</button>
					<button type="button" @click="closeEmits">취소</button>
				</div>
			</form>
		</div>
	</section>
</template>

<script setup lang="ts">
import { ref } from "vue";

const emits = defineEmits(["closeEmits", "addEmits"]);
const titleRef = ref<string>("");
const descRef = ref<string>("");
const closeEmits = () => {
	emits("closeEmits");
};
const addEmits = () => {
	if (titleRef.value === "") {
		alert("제목을 입력해주세요.");
		return;
	} else if (descRef.value === "") {
		alert("설명을 입력해주세요.");
		return;
	}
	const date = new Date();
	const nowDate = `${date.getFullYear()}-${
		date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1
	}-${date.getDate()}`;
	console.log(titleRef.value, descRef.value, nowDate);
	emits("addEmits", titleRef.value, descRef.value, nowDate);
};
</script>

<style scoped lang="scss">
.addBoard {
	display: flex;
	align-items: center;
	justify-content: center;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 10;
	.addBoardBackground {
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.7);
	}
	.popup {
		border: 1px solid #c9c9c9;
		border-radius: 4px;
		background-color: white;
		padding: 20px;
		position: relative;
		z-index: 1;
		.formBox {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			justify-content: center;
			row-gap: 12px;

			legend {
				display: block;
				width: 100%;
				text-align: center;
				font-size: 24px;
				font-weight: 600;
				margin-bottom: 24px;
			}
			.formEventBox {
				display: flex;
				align-items: center;
				justify-content: center;
				width: 100%;
				column-gap: 12px;
				button {
					width: 100%;
					background-color: white;
					border: 1px solid #616161;
					border-radius: 4px;
					font-size: 14px;
					padding: 2px 8px;
					box-sizing: border-box;
					transition: 0.3s all;
          cursor: pointer;
					&:hover {
						border-color: rgb(255, 193, 181);
						color: rgb(255, 193, 181);
					}
				}
			}
		}
	}
}
</style>
