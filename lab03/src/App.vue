<template>
  <div id="app">
    <Books v-bind:books1="books"/>
  </div>
</template>

<script>
import Books from './components/Books.vue'
export default {
  name: 'App',
  components: {
    Books,
  },
  data(){
    return {
      books: [
        {
          "bookid": 0,
          "title": "Zend Framework in Action",
          "isbn": "1933988320",
          "pageCount": 432,
          "publishedDate": "2008-12-01T00:00:00.000-0800",
          "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/allen.jpg",
          "shortDescription": "Zend Framework in Action is a comprehensive tutorial that shows how to use the Zend Framework to create web-based applications and web services. This book takes you on an over-the-shoulder tour of the components of the Zend Framework as you build a high quality, real-world web application.",
          "author": "Rob Allen",
          "category": "Web Development"
        },
        {
          "bookid": 1,
          "title": "Flex on Java",
          "isbn": "1933988797",
          "pageCount": 265,
          "publishedDate": "2010-10-15T00:00:00.000-0700",
          "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/allmon.jpg",
          "shortDescription": "   A beautifully written book that is a must have for every Java Developer.       Ashish Kulkarni, Technical Director, E-Business Software Solutions Ltd.",
          "author": "Bernerd Allmon",
          "category": "Internet"
        },
        {
          "bookid": 2,
          "title": "Explorer's Guide to the Semantic Web",
          "isbn": "1932394206",
          "pageCount": 304,
          "publishedDate": "2004-06-01T00:00:00.000-0700",
          "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/passin.jpg",
          "shortDescription": "\"A thorough look at one vision of the Web's future ...particularly well written...Highly recommended.\" -- Choice Magazine",
          "author": "Thomas B. Passin",
          "category": "Internet"
        },
        {
          "bookid": 3,
          "title": "Magical A-Life Avatars",
          "isbn": "1884777589",
          "pageCount": 450,
          "publishedDate": "2000-12-01T00:00:00.000-0800",
          "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/small.jpg",
          "shortDescription": "\"Distinctive book explaining how to get intelligent software agents to work.\" --Clipcode.com",
          "author": "Peter Small",
          "category": "Internet"
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
