<template>
<div id="app">

    <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
            <div class="row">
                <div class="navbar col-4">
                    <img src="./assets/csbookshoplogo.png" class="rounded mx-auto d-block" width="80px" />
                </div>
                <div class="navbar col text-left">
                    <span class="navbar-brand">Computer Science<br />Book Shop</span>
                </div>
            </div>
        </div>
        <div class="mx-auto order-0">
        </div>
        <div class="collapse navbar-collapse" id="navbarColor01">

            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <router-link class="nav-link" to="/">Books <span class="sr-only">(current)</span></router-link> |
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/authors">Authors</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/publishers">Publishers</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/orders">Orders</router-link>
                </li>
            </ul>

        </div>
    </nav>
    <br /><br /><br /><br />
    <router-view />
    <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-bottom">

        <div class="container d-flex justify-content-center">
            <span class="navbar-text">© 2020 Computer Science, Faculty of Science and Technology, Songkhla Rajabhat University. All Rights Reserved</span>
        </div>

    </nav>

</div>
</template>

<script>
export default {

    name: "app",
    components: {

    }

}
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

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
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
