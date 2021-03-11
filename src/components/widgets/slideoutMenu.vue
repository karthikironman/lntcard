<template id="slideout-menu">
  
  <div class="c-slideout">
    <transition name="overlay">
    <div class="c-slideout__overlay" v-show="show" @click="$emit('close')">
      <transition name="slide">
        <div class="c-slideout__container u-px2 u-py2" v-if="show" @click.stop>
          <button type="button" class="c-close" aria-label="close" @click="$emit('close')">
            <span aria-hidden="true">&times;</span>
          </button>
          <ul @click="$emit('close')">
            <li>I'm Menu</li>
            <li>
              <a href="http://huleos.com" target="_blank">About Me</a>
            </li>
          </ul>
        </div>
      </transition>
    </div>
    </transition>
  </div>
  
  
</template>
<script>
export default {
    props:["show"],
    data(){
        return{

        }
    }
}
</script>

<style lang="sass" scoped>
// SLIDEOUT

.c-slideout {
  height: 100%;
  width: 100%;
  
  &__overlay {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1000;
    position: fixed;
    top: 0;
    left: 0;
  }
  
  &__container {
    height: 100%;
    width: 18.75rem;
    background-color: #fefefe;
    z-index: 10000;
    position: fixed;
    top: 0;
    left: 0;
    box-sizing: border-box;
  }
}

// CLOSE BUTTON

.c-close {
  position: absolute;
  background: 0 0;
  opacity: .5;
  right: .625rem;
  top: .4375rem;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1;
}

// TRANSITIONS

.overlay {
  &-enter-active,
  &-leave-active {
    transition: all 0.3s ease-out;
  }
  
  &-enter,
  &-leave-to {
    background-color: rgba(0, 0, 0, 0.5);
  }
}

.slide {
  &-enter-active,
  &-leave-active {
    transition: all 0.3s ease-out;
  }
  
  &-enter,
  &-leave-to {
    transform: translateX(-100%);
  }
}
</style>