<template>
  <button class="button" :class="styleButton" :type="type" @click="shootAction()">{{ label }}</button>
</template>
<script>
export default {
  props: [
      'type', 
      'label',
      'confirmation',
      'eventButton'
    ],
    methods: {       
        shootAction() {
            if(this.confirmation){
                if(confirm('Confirma operacao?')) {
                    this.$emit('buttonActivate');
                }
                return;
            }
            this.$emit('buttonActivate');
        }
    },
    computed: {
        styleButton(){
            if (this.eventButton == 'pattern' || !this.eventButton ) return 'button-pattern'
            if (this.eventButton == 'alert') return 'button-alert'
        }
    }
}
</script>
<style scoped>
    .button {
        display: inline-block;
        padding: 10px;
        border-radius: 3px;
        margin: 10px;
        font-size: 1.2em;
    }

    .button-alert {
        background: firebrick;
        color: white;
    }

    .button-pattern {
        background: darkcyan;
        color: white;
    }

</style>
