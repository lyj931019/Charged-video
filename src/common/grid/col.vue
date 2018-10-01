<template>
  <div class="col" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
  const prefixCls= 'col';
  export default {
    name:'myCol',
    props: ['xs','sm','md','lg','xl'],
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
            [`${prefixCls}-xs-${this.xs}`]: !!this.xs,
            [`${prefixCls}-sm-${this.sm}`]: !!this.sm,
            [`${prefixCls}-md-${this.md}`]: !!this.md,
            [`${prefixCls}-lg-${this.lg}`]: !!this.lg,
            [`${prefixCls}-xl-${this.xl}`]: !!this.xl,

          }
        ];
      }
    }

  }
</script>

