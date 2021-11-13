<template>
	<div class="row mb-3 table-responsive">
		<table class="table table-dark table-striped">
			<thead>
				<tr>
					<th scope="col">#</th>
					<th scope="col">ID</th>
					<th scope="col">NOMBRE</th>
					<th scope="col">LENGUAJE</th>
					<th scope="col">NUMERO</th>
					<th scope="col">IMPORTANCIA</th>
					<th scope="col">ACCION</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="item in tareas" :key="item.id">
					<th scope="row">1</th>
					<td>{{ item.id }}</td>
					<td>{{ item.nombre }}</td>
					<td>{{ item.lenguaje }}</td>
					<td>{{ item.numero }}</td>
					<td>{{ item.importancia }}</td>
					<td class="flex">
						<button @click="deleteTareas(item.id)" class="btn btn-danger me-2">Eliminar</button>
						<button class="btn btn-warning">
							<router-link
								id="link"
								:to="{
									name: 'Editar',
									params: {
										id: item.id,
									},
								}"
								>Editar</router-link
							>
						</button>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
	computed: {
		...mapState(["tareas"]),
	},
	methods: {
		...mapActions(["deleteTareas"]),
	},
};
</script>

<style>
.flex {
	display: flex;
	justify-content: center;
	gap: 1rem;
	flex-wrap: nowrap;
}
</style>
