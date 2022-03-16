import { createStore } from "vuex";
import projects from "@/assets/projects.json";

export default createStore({
	state: {
		projects: projects,
	},
	mutations: {},
	actions: {},
	modules: {},
	getters: {
		projects(state) {
			return state.projects;
		},
	},
});
