<template>
  <button class="button button-alert" :type="type" @click="shootAction()">{{ label }}</button>
</template>
<script>
export default {
  props: [
      'type', 
      'label'
    ],
   methods: {       
    shootAction() {
        if(confirm('Confirma operacao?')) {
            this.$emit('buttonActivate');
        }
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
