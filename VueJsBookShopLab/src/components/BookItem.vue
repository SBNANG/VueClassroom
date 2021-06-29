<template>
  <div class="book-item">
    <br />

    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <img v-bind:src="book.thumbnailUrl" width="200px" /><br />
        </div>
        <div class="col-lg-8">
          <div class="row">
            <div>
              <h2>{{ book.title }}</h2>
            </div>
          </div>
          <div class="row">
            <div class="col-2 d-flex justify-content-start"><b>Price:</b></div>
            <div>{{ book.price }}</div>
          </div>
          <div class="row">
            <div class="col-2 d-flex justify-content-start"><b>Author:</b></div>
            <div>{{ book.author }}</div>
          </div>
          <div class="row">
            <div class="col-2 d-flex justify-content-start">
              <b>Category:</b>
            </div>
            <div>{{ book.category }}</div>
          </div>
          <div class="row">
            <div class="col-2 d-flex justify-content-start"><b>ISBN:</b></div>
            <div>{{ book.isbn }}</div>
          </div>
          <div class="row">
            <div class="col-2 d-flex justify-content-start"><b>Pages:</b></div>
            <div>{{ book.pageCount }}</div>
          </div>
          <div class="row">
            <div class="col-2 d-flex justify-content-start">
              <b>Description:</b>
            </div>
            <div class="col-9">
              <p class="text-justify">{{ book.shortDescription }}</p>
            </div>
          </div>
          <button class="btn btn-primary btn-sm" @click="EditBook(book.bookid)">
            Edit Book</button
          >&nbsp;
          <button
            class="btn btn-danger btn-sm"
            @click="DeleteBook(book.bookid)"
          >
            Delete Book
          </button>
          <br />
        </div>
      </div>
    </div>
    <br />
  </div>
</template>

<script>
export default {
  name: "BookItem",
  props: ["book"],
  methods: {
    EditBook(bookid) {
      this.$router.push({
        name: "EditBook",
        params: {
          bookid: bookid,
        },
      });
    },
    async DeleteBook(bookid) {
      if (confirm("Do you want to delete this book?")) {
        this.$emit("deleteBook", bookid);
      }
    },
  },
};
</script>

<style scoped>
.book-item {
  padding: 10px;
  border-bottom: 1px #ccc dotted;
}
</style>
