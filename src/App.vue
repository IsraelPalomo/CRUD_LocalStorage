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
}
</style>
