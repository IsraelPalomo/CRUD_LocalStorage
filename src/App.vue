<template>
	<router-view />
</template>

<script>
import { mapActions } from "vuex";
export default {
	methods: {
		...mapActions(["cargarLocalStorage"]),
	},
	created() {
		this.cargarLocalStorage();
	},
};
</script>
<style lang="scss">
a {
	color: #000;
	text-decoration: none;
}
body {
	overflow-x: hidden;

	background: linear-gradient(139deg, #cd96d3, #13bbb2, #ab003c, #87b819, #6d26f4);
	background-size: 300% 300%;
	animation: gradient-animation 40s ease infinite;

	@keyframes gradient-animation {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
}
</style>
