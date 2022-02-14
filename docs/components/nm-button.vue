<template>
  <button class="nm-button" :class="disabled?'nm--button--disabled nm--button--'+size:'nm--button--'+size" @click="handleClick" :disabled="disabled">
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: 'nm-button',
  data() {
    return {
    }
  },
  props: {
    size: {
      type: String,
      default: 'default' //small default large
    },
    disabled: {
      type: Boolean,
      default: false //false true
    }
  },
  methods: {
    handleClick(evt) {
      this.$emit('click', evt);
    }
  }
}
</script>

<style scoped>
.nm-button {
  box-shadow: -3px -3px 6px #ffffff, 3px 3px 6px #a9c5fb;
  border: none;
  cursor: pointer;
  background: linear-gradient(145deg, #ffffff, #e6e6e6);
}
.nm-button:active {
  background: linear-gradient(145deg, #e6e6e6, #ffffff);
  box-shadow: inset 3px 3px 6px #a9c5fb, -3px -3px 6px #ffffff;
}
.nm--button--default {
  padding: 8px 15px;
  height: 32px;
  font-size: 14px;
  border-radius: 10px;
}
.nm--button--small {
  padding: 5px 10px;
  height: 24px;
  font-size: 12px;
  border-radius: 10px;
}
.nm--button--large {
  padding: 10px 18px;
  height: 40px;
  font-size: 14px;
  border-radius: 10px;
}
.nm--button--disabled {
  cursor: not-allowed;
  pointer-events: none;
}
</style>