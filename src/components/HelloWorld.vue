<template>
    <div class="hello">
        <h3>{{ msg }}</h3>
        <img alt="Vue logo" src="../assets/images/vue.png" />
        <img alt="Kpc logo" src="../assets/images/kpc.png" />
        <p>
            脚手架工具：<a
                href="https://github.com/ksc-fe/kscfe-cli"
                target="_blank"
                rel="noopener"
                >kscfe-cli</a
            >.
        </p>
        <p>
            本项目工程：<a
                href="https://github.com/ksc-fe/ksc-feproject-vue3"
                target="_blank"
                rel="noopener"
                >ksc-feproject-vue3</a
            >.
        </p>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    props: {
        msg: String
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
img
    width: 120px;
    height: 100px;

h3
  margin 40px 0 0;

ul
  padding 0;
  list-style-type none

li
  display inline-block
  margin 0 10px;

a
  color #42b983;
</style>
