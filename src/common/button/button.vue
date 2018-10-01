

<template>
  <button :class="classes" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script>
  import _ from '@/utils/lyj.js'
  const prefixCls = 'btn';
  export default {
    name:'btn',
    props:{
      type: {
        validator (value) {
          return _.oneOf(value, ['primary', 'text', 'info', 'success', 'warning', 'danger']);
        }
      },
      size: {
        validator (value) {
          return _.oneOf(value, ['small','large']);
        }
      },
      shape: {
        validator (value) {
          return _.oneOf(value, ['half','circle']);
        }
      },
      long: {
        type: Boolean,
        default: false
      }
    },
    data(){
      return {
      }
    },
    computed: {
      classes () {
        return [
          `${prefixCls}`,
          {
            [`${prefixCls}-${this.type}`]: !!this.type,
            [`${prefixCls}-long`]: this.long,
            [`${prefixCls}-${this.shape}`]: !!this.shape,
            [`${prefixCls}-${this.size}`]: !!this.size,
          }
        ];
      }
    },
    /*
    * 放弃这种写法了( ▼-▼ )，留个纪念
    created(){
      !this._.isUndefined(this.type) && this.classes.push('btn-'+this.type);// 是否定义了type
      !this._.isUndefined(this.long) && this.classes.push('btn-'+this.long);// 是否定义了long
      !this._.isUndefined(this.size) && this.classes.push('btn-'+this.size);// 是否定义了size
      !this._.isUndefined(this.shape) && this.classes.push('btn-'+this.shape);// 是否定义了shape
    },
    */
    methods:{
      handleClick (event) {
        this.$emit('click', event);
      }
    }

  }
</script>
