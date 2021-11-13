import { createStore } from "vuex";
import router from "../router";

export default createStore({
	state: {
		tarea: {
			id: "",
			nombre: "",
			lenguaje: "",
			numero: "",
			importancia: "",
		},
		tareas: [],
	},
	mutations: {
		pushTarea(state, payload) {
			state.tareas.push(payload);
			console.log(state.tareas);
			localStorage.setItem("tareas", JSON.stringify(state.tareas));
		},
		deleteTarea(state, payload) {
			state.tareas = state.tareas.filter((item) => item.id !== payload);
			localStorage.setItem("tareas", JSON.stringify(state.tareas));
		},
		setTarea(state, payload) {
			state.tarea = state.tareas.find((item) => item.id === payload);
			console.log(state.tarea);
			localStorage.setItem("tareas", JSON.stringify(state.tareas));
		},
		updateTarea(state, payload) {
			state.tareas = state.tareas.map((item) => (item.id === payload.id ? payload : item));
			localStorage.setItem("tareas", JSON.stringify(state.tareas));
		},
		cargar(state, payload) {
			state.tareas = payload;
			localStorage.setItem("tareas1", JSON.stringify(state.tareas));
		},
	},
	actions: {
		pushTareas({ commit }, tarea) {
			commit("pushTarea", tarea);
		},
		deleteTareas({ commit }, id) {
			commit("deleteTarea", id);
		},
		setTareas({ commit }, id) {
			commit("setTarea", id);
		},
		updateTareas({ commit }, tarea) {
			commit("updateTarea", tarea);
			router.push("/");
		},
		cargarLocalStorage({ commit }) {
			if (localStorage.getItem("tareas")) {
				console.log("existe");
				const tareas = JSON.parse(localStorage.getItem("tareas"));
				commit("cargar", tareas);
			} else {
				localStorage.setItem("tareas", JSON.stringify([]));
			}
		},
	},
	modules: {},
});
