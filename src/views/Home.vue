<template>
	<div class="home">
		<form @submit.prevent="procesarFormulario()">
			<h2>Crea tu tarea ✍️</h2>
			<Input :tarea="tarea" />
			<button type="submit" class="btn btn-primary">Procesar</button>
		</form>
		<ListaTareas class="tareas" />
	</div>
</template>

<script>
import Input from "../components/Input.vue";
import ListaTareas from "../components/ListaTareas.vue";
import { mapActions } from "vuex";
const shortid = require("shortid");

export default {
	name: "Home",
	components: { Input, ListaTareas },
	data() {
		return {
			tarea: {
				id: "",
				nombre: "",
				lenguaje: "",
				numero: "",
				importancia: "",
			},
		};
	},
	methods: {
		procesarFormulario() {
			this.tarea.id = shortid.generate();
			this.pushTareas(this.tarea);
			this.tarea = {
				id: "",
				nombre: "",
				lenguaje: "",
				numero: "",
				importancia: "",
			};
		},
		...mapActions(["pushTareas"]),
	},
};
</script>
<style scoped lang="scss">
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
.tareas {
	margin: 0;
	margin-top: 5rem;
	padding: 0 3rem;
}
a {
	color: black;
	text-decoration: none;
}
</style>
