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
<style lang="scss"></style>
