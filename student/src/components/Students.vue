<template>
  <div>
      <div v-bind:key="student.studentId" v-for="student in student1">
        <Student :student="student"/>
      </div>
  </div>
</template>

<script>
import Student from './Student.vue'
export default {
  name: 'Students',
  components: {
    Student,
  },
  props:["student1"]
}
</script>

<style>

</style>