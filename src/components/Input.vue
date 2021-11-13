<template>
	<div class="row mb-3">
		<label for="inputEmail3" class="col-sm-2 col-form-label">Nombre</label>
		<div class="col-sm-10">
			<input type="text" class="form-control w-2" id="inputEmail3" v-model="tarea.nombre" />
		</div>
	</div>
	<div class="row mb-3">
		<label for="exampleDataList" class="col-form-label col-sm-2">Lenguajes</label>
		<div class="col-sm-10">
			<input
				class="form-control w-2"
				list="datalistOptions"
				multiple
				id="exampleDataList"
				placeholder="Type to search..."
				v-model="tarea.lenguaje"
			/>
		</div>
		<datalist id="datalistOptions">
			<option value="Node.js"></option>
			<option value="PHP"></option>
			<option value="Python"></option>
			<option value="Ruby"></option>
			<option value="Go"></option>
		</datalist>
	</div>
	<div class="row mb-3">
		<label for="exampleColorInput" class="col-form-label col-sm-2">Personas</label>
		<div class="col-sm-10">
			<input
				type="number"
				class="form-control form-control-color w-2"
				id="exampleColorInput"
				title="Choose your color"
				v-model="tarea.numero"
			/>
		</div>
	</div>
	<div class="row mb-3">
		<label class="form-check-label col-form-label col-sm-2" for="flexSwitchCheckDefault"
			>Importante</label
		>
		<div class="col-sm-10">
			<input
				class="form-check-input form-control w-2 importante"
				type="checkbox"
				role="switch"
				id="flexSwitchCheckDefault"
				v-model="tarea.importancia"
			/>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		tarea: Object,
	},
};
</script>

<style scoped>
input {
	width: 90%;
	max-width: 30rem;
	margin-left: 1rem;
}
.importante {
	height: 2.3rem;
}
</style>
