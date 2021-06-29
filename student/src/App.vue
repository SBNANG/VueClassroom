<template>
  <div id="app">
    <Students v-bind:student1="studens"/>
  </div>
</template>

<script>
import Students from './components/Students.vue'

export default {
  name: 'App',
  components: {
    Students,
  },
  data(){
    return {
      studens: [
        {
          "studentId": "614234006",
          "FirstName": "Sineenard",
          "LastName": "Songsen",
          "NickName": "Kik",
          "weight": 52,
          "height": 156,
          "picture": "https://scontent.fbkk8-4.fna.fbcdn.net/v/t1.15752-9/141929231_440365733762165_6122013109882977927_n.jpg?_nc_cat=100&ccb=2&_nc_sid=ae9488&_nc_eui2=AeHh7rUBcQF4rfT53f2V7KWUkR9SGImOYqKRH1IYiY5iopNwkyLSDNYygSUsUp3y7Uk1QfKKtY2emZZ69AF9Rdpp&_nc_ohc=MFKljJfoGG0AX-Y9hq8&_nc_ht=scontent.fbkk8-4.fna&oh=25f8f35f84d540e857bf4be886f46077&oe=60314013",
        },
        {
          "studentId": "614234017",
          "FirstName": "Suratwadee",
          "LastName": "Polkong",
          "NickName": "Ploy",
          "weight": 53,
          "height": 160,
          "picture": "https://scontent.fbkk13-2.fna.fbcdn.net/v/t1.15752-9/142482337_1221834668218036_1612798734091002735_n.jpg?_nc_cat=106&ccb=2&_nc_sid=ae9488&_nc_eui2=AeHbPzSd1tOVtjUcfRkvI2B0OsG_84utk106wb_zi62TXRmfh-O2RV4FLMjcjq05_eD5KdkE1ngdq-sppFXa-qWK&_nc_ohc=WCOEgeOzX70AX8iVIPc&_nc_ht=scontent.fbkk13-2.fna&oh=f0e8da9da2022cfa6e792ffffeabd0df&oe=603297FA",
        },
        {
          "studentId": "614234020",
          "FirstName": "Wuttichai",
          "LastName": "Siriwat",
          "NickName": "Nueng",
          "weight": 65,
          "height": 172,
          "picture": "https://scontent.fbkk12-1.fna.fbcdn.net/v/t1.15752-9/141938221_418961409448050_3688817912144081020_n.jpg?_nc_cat=101&ccb=2&_nc_sid=ae9488&_nc_eui2=AeFMEobi6LJlXm3fTdeL9acuJZAbfU7ZgIklkBt9TtmAiWfi8wG6A76i4ZhWOSuPBD2aAMQG1JzaDoeZxcM2XNut&_nc_ohc=1v97ZCshtfgAX-H4UDQ&_nc_ht=scontent.fbkk12-1.fna&oh=a423b817042b05bbb76f7fc8ad43340c&oe=60336E18",
        },
        {
          "studentId": "614234018",
          "FirstName": "Jiraphon",
          "LastName": "Nopparat",
          "NickName": "Ji",
          "weight": 60,
          "height": 165,
          "picture": "https://scontent.fbkk8-4.fna.fbcdn.net/v/t1.15752-9/142729662_453057166099787_7350572099521615569_n.jpg?_nc_cat=100&ccb=2&_nc_sid=ae9488&_nc_eui2=AeFQ_s5iWpN0uEup453iXjs9f-FpOES0r59_4Wk4RLSvn4Q2vxSOmvojZnYC_6z3CPiByR35ONeLkysfnXttWXcn&_nc_ohc=7HfFNh1lw5UAX_a8olv&_nc_ht=scontent.fbkk8-4.fna&oh=ab2d26c94665c745650d376077b499ae&oe=6032B03A",
        },
        {
          "studentId": "614234011",
          "FirstName": "Phatcharida",
          "LastName": "Foithong",
          "NickName": "Benz",
          "weight": 56,
          "height": 160,
          "picture": "https://scontent.fbkk12-4.fna.fbcdn.net/v/t1.15752-9/142054777_2802422923358761_8957263926349785822_n.jpg?_nc_cat=110&ccb=2&_nc_sid=ae9488&_nc_eui2=AeF_wtc3Z5d3MuF7Md_ifTA_3k6Qq2p3M53eTpCrancznZdV6MhvlzFrxGWZ4YFsNofGI_o4_iIDHNBY9A3Bkm8A&_nc_ohc=BB9XU5Q-1nAAX8T1U5i&_nc_oc=AQkGQcvz1ZIgAEsoDqVHz5FpfcaNjNtDOsnMzvf6gWzhzWVN0ss0p20ln28MQBWDevs&_nc_ht=scontent.fbkk12-4.fna&oh=36689e1c61f0307f7b57fbfbb1ebdd40&oe=60321EE6",
        }
      ]
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
