<template>
<div class="container">
    <div class="calculator">
        <div class="answer">{{ answer }}</div>
        <div class="display">{{ logList+current }}</div>
        <div id="clear" @click="clear()" class="clear">Clear</div>
        <div id="divide" @click="addLog('/')" class="btn operator">
            /
        </div>
        <div id="n7" @click="append(7)" class="btn">7</div>
        <div id="n8" @click="append(8)" class="btn">8</div>
        <div id="n9" @click="append(9)" class="btn">9</div>
        <div id="times" @click="addLog('*')" class="btn operator">*</div>
        <div id="n4" @click="append(4)" class="btn">4</div>
        <div id="n5" @click="append(5)" class="btn">5</div>
        <div id="n6" @click="append(6)" class="btn">6</div>
        <div id="minus" @click="addLog('-')" class="btn operator">-</div>
        <div id="n1" @click="append(1)" class="btn">1</div>
        <div id="n2" @click="append(2)" class="btn">2</div>
        <div id="n3" @click="append(3)" class="btn">3</div>
        <div id="plus" @click="addLog('+')" class="btn operator">+</div>
        <div id="n0" @click="append(0)" class="zero">0</div>
        <div id="power" @click="addLog('**')" class="btn operator">**</div>
        <div id="equal" @click="equal()" class="btn operator">=</div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Calculator5',
    data() {
        return {
            logList: "",
            current: "",
            answer: "",
            operatorClicked: true
        };
    },
    methods: {
        append(number){
            if (this.operatorClicked) {
                this.current = ""
                this.operatorClicked = false
            }
            this.current = `${this.current}${number}`
        },
        addLog(operator){
            if (this.operatorClicked == false) {
                this.logList += `${this.current}${operator}`
                this.current = ""
                this.operatorClicked = true
            }
        },
        clear(){
            this.logList = ""
            this.current = ""
            this.answer = ""
            this.operatorClicked = true
        },
        equal(){
            if (this.operatorClicked == false) {
                this.answer = eval(this.logList + this.current)
            }else {
                this.answer = "???"
            }
        },

    },

}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Poppins:300,500&display=swap");

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

::selection {
    background: none;
}

body {
    background-color: #3fa9fc;
}

#app {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
}

.calculator {
    display: grid;
    grid-template-rows: repeat(7, minmax(60px, auto));
    grid-template-columns: repeat(4, 60px);
    grid-gap: 12px;
    padding: 35px;
    font-family: "Poppins";
    font-weight: 300;
    font-size: 18px;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0px 3px 80px -30px rgba(13, 81, 134, 1);
}

.btn,
.zero {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    outline: none;
    color: #484848;
    background-color: #f4faff;
    border-radius: 5px;
}

.clear {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    outline: none;
    background-color: #d9efff;
    color: #3fa9fc;
    border-radius: 5px;
}

.display,
.answer {
    grid-column: 1 / 5;
    display: flex;
    align-items: center;
}

.display {
    color: #a3a3a3;
    border-bottom: 1px solid #e1e1e1;
    margin-bottom: 15px;
    overflow: hidden;
    text-overflow: clip;
}

.answer {
    font-weight: 500;
    color: #146080;
    font-size: 55px;
    height: 65px;
}

.zero {
    grid-column: 1 / 3;
}

.clear {
    grid-column: 1 / 4;
}

.operator {
    background-color: #d9efff;
    color: #3fa9fc;
}
</style>
