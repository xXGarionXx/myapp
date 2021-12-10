<template>
    <section class="Date">
        <div class="timeWeatherInfo">
            <h4>Info</h4>

            <table>
                <tr>
                    <td>
                        <p>time: {{currentTime}}</p>
                    </td>

                    <td>
                        <p>date: {{currentDate}}</p>
                    </td>
                </tr>

                <tr>
                    <td>
                        <p>temp: {{ Weather.main.temp }}</p>
                    </td>

                    <td>
                        <p>Bewölkung: {{Weather.clouds.all }} %</p>
                    </td>
                </tr>

                <tr>
                    <td>
                        City: {{Weather.name}}
                    </td>

                    <td>

                    </td>
                </tr>


            </table>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            
            DateAusgabe: ''
        }
    },

    computed: {
        currentDate() {
            var date = new Date;
            var ausgabe = date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();
            return ausgabe;
        },

        currentTime() {
            var date = new Date; 
            var ausgabe = date.getHours() + ":" + date.getMinutes();
            return ausgabe;
        },

        Weather() {
            return this.$store.state.WeatherData;
        }
    },

    beforeMount() {
        console.log("test");
        this.$store.dispatch('getWeather');
    }
}
</script>

<style lang="less" scoped>

.Date {
    margin: 1rem;
}

.timeWeatherInfo {
    background-color: gray;
    width: 100%;
    border-radius: 0.5rem;
    border: .2rem solid black;
    box-shadow: 0px 0px 10px black;

    h4 {
        margin-top: 1rem;
    }

    table {
        margin: 0rem;
        padding: 0;
        text-align: left;
        td {
            padding: .5rem;
        }

        p {
            margin: 0;
            padding: 0;
        }
    }
}

</style>