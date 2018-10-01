

<template>
  <label class="">
    <input type="radio" class="rdo"
           :name="name"
           :disabled="disabled"
           :checked="currentValue"
           @change="change">
    <slot></slot>
  </label>
</template>

<script>
  export default {
    name:'radio',
    props:{
      value: {
        type: [String, Number, Boolean],
        default: false
      },
      trueValue: {
        type: [String, Number, Boolean],
        default: true
      },
      falseValue: {
        type: [String, Number, Boolean],
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      name:{
        type:String
      }
    },
    data(){
      return {
        currentValue: this.value
      }
    },
    methods:{
      change (event) {
        if (this.disabled) {
          return false;
        }

        const checked = event.target.checked;
        this.currentValue = checked;

        const value = checked ? this.trueValue : this.falseValue;
        this.$emit('input', value);
        this.$emit('on-change', value);
//        this.dispatch('FormItem', 'on-form-change', value);

      },
      updateValue () {
        this.currentValue = this.value === this.trueValue;
      }
    },
    mounted () {
      this.updateValue();
    },
    watch:{
      value (val) {
        if (val === this.trueValue || val === this.falseValue) {
          this.updateValue();
        } else {
          throw 'Value should be trueValue or falseValue.';
        }
      }
    }
  }
</script>
