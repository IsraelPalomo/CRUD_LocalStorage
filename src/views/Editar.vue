<template>
	<div class="con">
		<form @submit.prevent="updateTareas(tarea)">
			<h2>Edita tu tarea ✍️</h2>
			<Input :tarea="tarea" />
			<button class="btn btn-primary mt-2">Procesar</button>
		</form>
	</div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Input from "../components/Input.vue";
export default {
	components: {
		Input,
	},
	computed: {
		...mapState(["tarea"]),
	},
	methods: {
		...mapActions(["setTareas", "updateTareas"]),
	},
	created() {
		this.setTareas(this.$route.params.id);
	},
};
</script>

<style scoped lang="scss">
.con {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	form {
		max-width: 30rem;
		margin: 5rem auto 0 auto;
		background-color: #323232;
		padding: 2rem;

		color: white;

		h2 {
			margin-bottom: 3rem;
		}
		button {
			margin: 0 auto;
			display: block;
		}
	}
}
</style>
