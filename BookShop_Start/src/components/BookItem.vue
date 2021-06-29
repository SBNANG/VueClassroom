 <template>
<div class="book-item" v-bind:class="{'is-complete':book.completed}">

    <h2>{{book.title}}</h2>
    <img v-bind:src="book.thumbnailUrl" /><br />
    <b>Price:</b> {{book.price}}<br />
    <b>Author:</b> {{book.author}}<br />
    <b>Category:</b> {{book.category}}<br />
    <b>ISBN:</b> {{book.isbn}}<br />
    <b>Pages:</b> {{book.pageCount}}<br />
    <b>Description:</b>
    <p>{{book.shortDescription}}</p>
    <button class="btn btn-primary" v-on:click="AddtoCart(book.bookid, book.title, book.price)">Add to Cart</button>
    <br />
</div>
</template>

<script>
export default {
    name: "BookItem",
    props: ["book"],
    methods: {
        AddtoCart(bookId, bookTitle, bookPrice){
            this.$emit('add:bookitem', {
                "bookid": bookId,
                "title": bookTitle,
                "price": bookPrice
            })
        }
    },

}
</script>

<style scoped>
.book-item {
    background: #f4f4f4;
    padding: 10px;
    border-bottom: 1px #ccc dotted;
}
</style>
