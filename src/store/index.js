import { createStore } from "vuex";

export default createStore({
	state: {
		DailyTodos: {
			list: [
				{listname: "test1", cache:[{Tasks: "Aufräumen", finished: false}]},
				{listname: "test2", cache:[{Tasks: "Aufräumen", finished: false}]},
				{listname: "test3", cache:[{Tasks: "Aufräumen", finished: false}]},
				{listname: "test4", cache:[{Tasks: "Aufräumen", finished: false}]},
				{listname: "test5", cache:[{Tasks: "Aufräumen", finished: false}]},
			]
		}
	},
	mutations: {},
	actions: {},
	modules: {},
});
