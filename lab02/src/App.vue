<template>
  <div id="app">
    {{ counter }}
    <br>
    <button @click="counter=counter+1">button1</button>
    <br>
    <button @click="clicked">button2</button>

    <h1>{{ message }}</h1>
    <span v-text="message"></span>
    <br>
    <input type="text" v-model="message">
    <hr>
    <h2 v-show="isShow">Hello</h2>
    <hr>
    <h2 :key="emp.id" v-for="emp in employee">
      <span v-bind:class="emp.salary >= 90000 ? 'high' : emp.salary >= 30000 ? 'medium' : 'low'">
        {{ emp.name }}
      </span>
      <span v-if="emp.salary >= 90000">***</span>
      <span v-else-if="emp.salary >= 30000">**</span>
      <span v-else>*</span>
    </h2>
    <br>
    <a v-bind:href="urlSKRU">SKRU</a>
    <br><br>
    <img v-bind:src="require('@/assets/'+ imagesName + '.jpg')" width="200px" height="200px">
    <br><br>
    <select v-model="message">
      <option value="brownie">brownie</option>
      <option value="cake">cake</option>
      <option value="chocolate">chocolate</option>
    </select><br><br>
    <textarea v-model="message"></textarea>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data(){
    return {
      counter: 0,
      imagesName: "cat", 
      urlSKRU: "https://www.skru.ac.th",
      message: "Hello World",
      isShow: true,
      employee: [
        {"id":1, "name":"Nang", "salary":90000},
        {"id":2, "name":"John", "salary":30000},
        {"id":3, "name":"David", "salary":10000},
      ],
    }
  },
  methods:{
    clicked: function(){
      this.counter+=2
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
.high {
  color: green;
}
.medium {
  color: orange;
}
.low {
  color: red;
}
</style>