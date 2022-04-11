<template>
  <button class="button" :class="eventButton" :type="type" @click="shootAction()">{{ label }}</button>
</template>
<script>
export default {
    props: {
       type: {
           type: String, 
           required: true
       },

       label: {
           type: String, 
           required: true
       },

       confirmation: Boolean,
       styleButton: String
   },
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
        eventButton(){
            if (this.styleButton == 'pattern' || !this.styleButton ) return 'button-pattern'
            if (this.styleButton == 'alert') return 'button-alert'
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
