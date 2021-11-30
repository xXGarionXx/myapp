import { createStore } from "vuex";

export default createStore({
	state: {
		DailyTodos: {
			list: [
				{listname: "test1", cache:[{Tasks: "Aufräumen", finished: false}]},
				{listname: "test2", cache:[{Tasks: "Saugen", finished: false}]},
				{listname: "test3", cache:[{Tasks: "lernen", finished: false}]},
				{listname: "test4", cache:[{Tasks: "Arbeiten", finished: false}]},
				{listname: "test5", cache:[{Tasks: "Schlafen", finished: false}]},
			]
		},

        listNumber: 0,
	},
	getters: {
        getListName(state) {
			var buffer = []; 
			for(var i=0; i<state.DailyTodos.list[state.listNumber].cache.length; i++) {
				buffer.push(state.DailyTodos.list[state.listNumber].cache[i]);
			}
			return buffer;
		}
	},

	mutations: {
		addNewList(state, newList) {
            // all lists are looked through
            for(var i=0; i<state.DailyTodos.list.length; i++)
            {
                // if this list already exists, a true is send back 
                if(newList == state.DailyTodos.list[i].listname)
                {
                    alert("stufe1" + true);
                }
                // otherwise a flase is send back and the list is added
                else 
                {
                    //alert("stufe1" + false);
                    // if there is no list yet, a structure is created
                    if((state.DailyTodos.list.length < 2) && (state.DailyTodos.list[0].listname == ""))
                    {
                        // new structure
                        state.DailyTodos = {list: [{listname: newList, cache:[]}]};
                        //this.selectListItem(newList);
                        //this.setDataAtBrowsercache();
                        return; 
                    }
                    // if the structure already exists the list is only added
                    else 
                    {
                        // add a new list 
                        state.DailyTodos.list.push({listname: newList, cache: []});
                        //this.setDataAtBrowsercache();
                        //this.selectListItem(newList);
                        return;
                    }
                }
            }
            //console.log(JSON.stringify("vor dem Speichern sehe ich so aus: " + this.todos));
		},

        selectListItem(state, listItem)
        {
            console.log(listItem);
            // all lists are looked through
            for(var i=0; i<state.DailyTodos.list.length; i++)
            {
                // if a match is found, item receives the index number
                if(listItem == state.DailyTodos.list[i].listname)
                {
                    state.listNumber = i;
                }
            }
            //this.setDataAtBrowsercache();
    
        },
    
        deleteList(state, currentList) {
            //console.log(currentList);
            var deleteListNumber = null;
            if((currentList == "") || (currentList == undefined)) {
                alert("an error occurred with saving the list")
            }
            else {
                if(state.DailyTodos.list.length < 2) {
                
                    state.DailyTodos = {list: [{listname: "", cache: []}]};
                }
                else {
                    for(var i=0; i<state.DailyTodos.list.length; i++) {
                        if(currentList == state.DailyTodos.list[i].listname) {
                            deleteListNumber = i;
                        }
                        
                    }
                    state.DailyTodos.list.splice(deleteListNumber, 1);
                }
                //this.setDataAtBrowsercache();
            }
        },

        setNewTask(state, newTask) {
            state.DailyTodos.list[state.listNumber].cache.push({Tasks: newTask, finished: false});
        },

        toggleListItem(state, item) {
            item.finished = !item.finished;
        },

        deleteItem(state, index) {
            state.DailyTodos.list[state.listNumber].cache.splice(index, 1);
        }
	},

	actions: {},

	modules: {},
});

