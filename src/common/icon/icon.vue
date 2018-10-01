<template>
  <i :class="classes"></i>
</template>
<script>
  const prefixCls= 'ion';
  export default {
    name:'myIcon',
    props: ['type'],
    data(){
      return {
        sizes:[]
      }
    },
    computed: {
      classes () {
        return [
          `${prefixCls}`,
          {
            [`${prefixCls}-${this.type}`]: !!this.type,
          }
        ];
      }
    }

  }
</script>
