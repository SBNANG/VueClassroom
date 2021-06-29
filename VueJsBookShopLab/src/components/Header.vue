<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light" style="height:70px">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Book</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarColor03">

        </div>
        <div class="navbar-nav mx-auto  justify-content-center w-50 order-1">
            <form class="form-inline">

                <input v-model="search" v-on:keydown.enter.prevent="SearchBook" class="form-control mr-sm-2 " type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-primary my-2 my-sm-0" type="button" v-on:click="SearchBook">Search</button>&nbsp;&nbsp;
                <button class="btn btn-outline-success my-2 my-sm-0" type="button" v-on:click="ClearSearch">Clear</button>&nbsp;&nbsp;

            </form>

        </div>
        <div class=" order-0 order-md-1 w-25" id="navbarColor01">
            <div class="navbar-nav mr-auto d-flex justify-content-end">
                <a class="btn btn-info my-2 my-sm-0" href="/addbook">Add New Book</a>&nbsp;&nbsp;
            </div>
        </div>
    </div>
</nav>
</template>

<script>
export default {
    name: "Header",
    methods: {
        SearchBook() {
            this.$emit('search:booktitle', this.search);

        },
        ClearSearch() {
            this.search = "";
            this.$emit('search:booktitle', this.search);

        }
    },
    data() {
        return {
            search: ''
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
