<template>
  <div class="nm-switch" :class="disabled&&'nm-switch--disabled'" @click.prevent="switchValue">
    <input type="checkbox" ref="input" class="nm-switch--input" @change="handleChange">
    <div class="nm-switch-content" :style="activeStyle">
      <div class="nm-switch--action" :style="actionStyle"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: false
    }
  },
  props: {
    width: {
      type: Number,
      default: 40
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: [Number, String, Boolean],
      default: false
    }
  },
  computed: {
    activeStyle: function () {
      return [{ width: this.width + 'px' }, { background: this.active ? '#115de9' : '' }]
    },
    actionStyle:function(){
      //  active?'nm-switch--right':'nm-switch--left'
      if(this.active){
        return 'left:'+(this.width-18)+'px'
      }else{
        return 'left: 2px;'
      }
    }
  },
  mounted() {
    this.active = Boolean(this.value)
    this.$refs.input.checked = this.active;
  },
  methods: {
    handleChange(event) {
      this.active = !this.active
      this.$refs.input.checked = this.active;
      this.$emit('change', this.active);
    },
    switchValue() {
      !this.disabled && this.handleChange()
    }
  }
}
</script>
<style lang="scss">
.nm-switch {
  cursor: pointer;
  &.nm-switch--disabled {
    cursor: not-allowed;
    filter: grayscale(40%);
  }
  .nm-switch--input {
    display: none;
  }
  .nm-switch-content {
    height: 20px;
    border-radius: 15px;
    border: 1px solid #e1eef8;
    box-shadow: 1px 1px 4px #e1ebf4, -1px -1px 4px #fff,
      inset 2px 2px 6px #a9c5fb, -2px -2px 6px #ffffff;
    position: relative;
    transition: 0.5s ease;
    .nm-switch--action {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      position: absolute;
      border: 2px solid #ffffff;
      background-color: #e1eef8;
      top: 2px;
      box-shadow: 0 0 6px #a9c5fb;
      transition:all 0.5s ease;
    }
  }
}
</style>
