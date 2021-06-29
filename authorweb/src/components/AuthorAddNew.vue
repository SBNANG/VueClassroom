<template>
  <div class="container">
    <br /><br />
    <div class="row">
      <div>
        <h2>เพิ่มนักเขียน</h2>
        <br />
      </div>
    </div>
    <div class="container">
      <div class="form-group row">
        <div class="col-4">
          <div class="form-group">
            <label for="firstname">ชื่อ :</label>
            <input
              type="text"
              v-model="author.authorFirstName"
              class="form-control"
              id="authorFirstName"
              placeholder="Enter FirstName"
              name="authorFirstName"
            />
          </div>
          <div class="form-group">
            <label for="lastname">นามสกุล :</label>
            <input
              type="text"
              v-model="author.authorLastName"
              class="form-control"
              id="authorLastName"
              placeholder="Enter LastName"
              name="authorLastName"
            />
          </div>
          <button class="btn btn-primary btn-block" @click="SaveAuthor">
            เพิ่ม</button
          >&nbsp;
        </div>
      </div>
    </div>
    <br /><br />
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'AuthorAddNew',
  data() {
    return {
      author: {
        authorFirstName: '',
        authorLastName: '',
      },
    }
  },
  methods: {
    async SaveAuthor() {
      await axios
        .post('http://localhost:3000/api/v1/author', this.author)
        .then((res) => {
          console.log(res)
        })
        .catch(function(error) {
          console.log(error)
        })
    },
  },
}
</script>

<style scoped>
label {
  text-align: right;
  clear: both;
  float: left;
  margin-right: 15px;
}
</style>
