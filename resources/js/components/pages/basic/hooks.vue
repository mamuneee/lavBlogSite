<template>
    <div>
        <h1 ref="myref">This is hook!!!</h1>
        <p>My name is : {{name}}</p>
    </div>
</template>

<script>
export default {
    data(){
        return {
            name: 'abdullah'
        }
    },

    beforeCreate(){
        console.log(this.name)
    },

    created(){
        console.log('This is', this.name)
    },

    mounted(){
        console.log(this.$refs.myref.innerHTML)
    }

}
</script>