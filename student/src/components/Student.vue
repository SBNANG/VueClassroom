<template>
    <div>
        <h1>{{ student.studentId }}</h1>
        <img :src="student.picture" height="150"><br>
        <b>Firstname:</b> {{ student.FirstName }}<br>
        <b>Lastname:</b> {{ student.LastName }}<br>
        <b>Nickname:</b> {{ student.NickName }}<br>
        <b>Weight:</b> {{ student.weight }}<br>
        <b>Height:</b> {{ student.height }}<br>
    </div>
</template>

<script>
export default {
    name: 'Student',
    components: {
        
    },
    props: ["student"]
}
</script>

<style>

</style>