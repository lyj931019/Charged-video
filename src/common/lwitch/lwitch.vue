<style lang="scss" scoped>

</style>

<template>
  <span :class="classes" @click="toggle">
    <span class="round-dot" :class="{open:isOpen}"></span>
    <!-- 想要支持已定义输入,未完成 ,字太小，意义不大 -->
  </span>
</template>

<script>
  import _ from '@/utils/lyj.js';
  const prefixCls = 'lwitch';
  export default {
    name : 'l-switch',
    props:{
      size: {
        validator (value) {
          return _.oneOf(value, ['small','large']);
        }
      },
      open:{
        type:Boolean,
        default:false
      }
    },
    data(){
      return {
        isOpen:false
      }
    },
    methods:{
      toggle(){
        this.isOpen = !this.isOpen;
        this.$emit('change', this.isOpen);
      }
    },
    computed: {
      classes () {
        return [
          `${prefixCls}`,
          {
            [`${this.size}`]: !!this.size,
            'open':this.isOpen
          }
        ];
      }
    },
    beforeMount(){
      this.isOpen = this.open;
    }
  }
</script>

<style lang="scss" scoped>

</style>
