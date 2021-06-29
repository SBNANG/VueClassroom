<template>
  <div>
    <Header v-on:search:booktitle="SearchBook" />
    <br /><br />
    <div class="container">
      <div class="row">
        <div v-bind:key="book.bookid" v-for="book in BookInSearch">
          <BookItem v-bind:book="book" v-on:deleteBook="DeleteBook" />
        </div>
      </div>
    </div>
    <br /><br />
  </div>
</template>

<script>
import BookItem from "./BookItem";
import Header from "./Header";
import axios from "axios";

export default {
  name: "Books",
  components: {
    BookItem,
    Header,
  },
  data() {
    return {
      search: "",
      books: [],
    };
  },
  async created() {},
  async mounted() {
    axios.get("http://localhost:3000/api/v1/books").then((response) => {
      this.books = response.data.data;
    });
  },
  methods: {
    SearchBook: function (searchvalue) {
      this.search = searchvalue;
    },
    async DeleteBook(bookid) {
      console.log(bookid);
      await axios
        .delete("http://localhost:3000/api/v1/book/" + bookid)
        .then(() => {
          let bookIndex = this.books.findIndex((x) => x.bookid);
          this.books.splice(bookIndex, 1);
        });
    },
  },
  computed: {
    BookInSearch: function () {
      if (this.search != "") {
        return this.books.filter((book) => {
          return book.title.toLowerCase().includes(this.search.toLowerCase());
        });
      } else {
        return this.books;
      }
    },
  },
  filters: {},
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
