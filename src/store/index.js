import { createStore } from "vuex";

export default createStore({
    state: {
        DailyTodos: { list: [] },

        listNumber: 0,
        WeatherData: {
            coord: {
                lon: 0,
                lat: 0,
            },
            weather: [
                {
                    id: 0,
                    main: "n.f.",
                    description: "n.f.",
                    icon: "04n",
                },
            ],
            base: "n.f.",
            main: {
                temp: 0,
                feels_like: 0,
                temp_min: 0,
                temp_max: 0,
                pressure: 0,
                humidity: 0,
                sea_level: 0,
                grnd_level: 0,
            },
            visibility: 0,
            wind: {
                speed: 0,
                deg: 0,
                gust: 0,
            },
            clouds: {
                all: 0,
            },
            dt: 0,
            sys: {
                type: 0,
                id: 0,
                country: "n.f.",
                sunrise: 0,
                sunset: 0,
            },
            timezone: 3600,
            id: 0,
            name: "n.f.",
            cod: 0,
        },
    },
    getters: {
        getListName(state) {
            var buffer = [];
            // Hier bitte noch einmal überarbeiten
            for (
                var i = 0;
                i < state.DailyTodos.list[state.listNumber].cache.length;
                i++
            ) {
                buffer.push(state.DailyTodos.list[state.listNumber].cache[i]);
            }
            return buffer;
        },
    },

    mutations: {
        addNewList(state, newList) {
            // all lists are looked through
            for (var i = 0; i < state.DailyTodos.list.length; i++) {
                // if this list already exists, a true is send back
                if (newList == state.DailyTodos.list[i].listname) {
                    alert("this list already exists");
                }
                // otherwise a flase is send back and the list is added
                else {
                    //alert("stufe1" + false);
                    // if there is no list yet, a structure is created
                    if (
                        state.DailyTodos.list.length < 2 &&
                        state.DailyTodos.list[0].listname == ""
                    ) {
                        // new structure
                        state.DailyTodos = {
                            list: [{ listname: newList, cache: [] }],
                        };
                        //this.selectListItem(newList);
                        this.commit("selectListItem", newList);
                        setBrowserData(state.DailyTodos);
                        return;
                    }
                    // if the structure already exists the list is only added
                    else {
                        // add a new list
                        state.DailyTodos.list.push({
                            listname: newList,
                            cache: [],
                        });
                        //this.setDataAtBrowsercache();
                        //this.selectListItem(newList);
                        this.commit("selectListItem", newList);
                        setBrowserData(state.DailyTodos);
                        return;
                    }
                }
            }
            //console.log(JSON.stringify("vor dem Speichern sehe ich so aus: " + this.todos));
            setBrowserData(state.DailyTodos);
        },

        selectListItem(state, listItem) {
            console.log(listItem);
            // all lists are looked through
            for (var i = 0; i < state.DailyTodos.list.length; i++) {
                // if a match is found, item receives the index number
                if (listItem == state.DailyTodos.list[i].listname) {
                    state.listNumber = i;
                }
            }
            //this.setDataAtBrowsercache();
            setBrowserData(state.DailyTodos);
        },

        deleteList(state, currentList) {
            //console.log(currentList);
            var deleteListNumber = null;
            if (currentList == "" || currentList == undefined) {
                alert("an error occurred with saving the list");
            } else {
                if (state.DailyTodos.list.length < 2) {
                    state.DailyTodos = { list: [{ listname: "", cache: [] }] };
                } else {
                    for (var i = 0; i < state.DailyTodos.list.length; i++) {
                        if (currentList == state.DailyTodos.list[i].listname) {
                            deleteListNumber = i;
                        }
                    }
                    state.DailyTodos.list.splice(deleteListNumber, 1);
                }
                setBrowserData(state.DailyTodos);
                //this.setDataAtBrowsercache();
            }
        },

        setNewTask(state, newTask) {
            state.DailyTodos.list[state.listNumber].cache.push({
                Tasks: newTask,
                finished: false,
            });
            setBrowserData(state.DailyTodos);
        },

        toggleListItem(state, item) {
            item.finished = !item.finished;
            setBrowserData(state.DailyTodos);
        },

        deleteItem(state, index) {
            state.DailyTodos.list[state.listNumber].cache.splice(index, 1);
            setBrowserData(state.DailyTodos);
        },

        getDataFromBrowsercache(state) {
            if (localStorage.getItem("DailyTodo") === null) {
                state.DailyTodos = { list: [{ listname: "", cache: [] }] };
            } else {
                var data = localStorage.getItem("DailyTodo");
                state.DailyTodos = JSON.parse(data);
            }
        },

        setWeatherData(state, data) {
            state.WeatherData = data;
        },
    },

    actions: {
        getWeather(context) {
            let GeoData = () => {
                return new Promise(function (resolve, reject) {
                    navigator.geolocation.getCurrentPosition(function (
                        position
                    ) {
                        var geodata = {
                            breite: position.coords.latitude,
                            lange: position.coords.longitude,
                        };
                        resolve(geodata);
                        reject("error");
                    });
                });
            };

            GeoData().then(async (result) => {
                console.log(result);

                const url =
                    "https://api.openweathermap.org/data/2.5/weather?lat=" +
                    result.breite +
                    "&lon=" +
                    result.lange +
                    "&appid=6b34e2f1daf416ca41b35ae4fb8999bb&units=metric";
                const response = await fetch(url);
                const data = await response.json();
                context.commit("setWeatherData", data);
            });
        },
    },

    modules: {},
});

function setBrowserData(setData) {
    var data = JSON.stringify(setData);
    console.log(data);
    localStorage.setItem("DailyTodo", data);
}
