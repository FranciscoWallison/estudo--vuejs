<template>
    <div>
        <form>
            <input type="text" placeholder="Nome" v-model="userData.name">
            {{ userData.name }}
            <hr>
            <div :class="errors.has('email') ? 'is-danger' : 'is-sucess'" >
                <input type="text" v-validate="'required|email'" placeholder="E-mail" name="email" v-model="userData.email">
                <br>
                <i v-show="errors.has('email')" class="fa fa-warning"></i> 
                <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
            </div>
            <hr>
            <input type="text" placeholder="Idade" v-model.number="userData.age">
            {{ userData.age }}
            <hr>
            <input type="radio" name="sex" value="M" v-model="userData.sex"> Masculino |
            <input type="radio" name="sex" value="F" v-model="userData.sex"> Feminino
            <p v-if="userData.sex"> Sexo selecionado: {{ userData.sex }}</p>
            <hr>
            <select  v-model="userData.state">
                <option value="">Selecione o Estado</option>
                <option value="SP">São Paulo</option>
                <option value="RJ">Rio de Janeiro</option>
                <option value="MG">Minas Gerais</option>
            </select>
            <div v-if="userData.state">Estado Selecionado: {{userData.state}}</div>
            <hr>
            <label for="agree">Concordo com os termos de uso</label>
            <input type="checkbox" id="agree" v-model="terms">
            <hr>
            <textarea cols="30" rows="10" v-model="description"></textarea>
            <div>
                <pre v-html="description"></pre>
            </div>
            <hr>
            <button type="submit">Enviar</button>
        </form>
    </div>
</template>

<script>
export default {
    data(){
        return {
            userData: {
                name: '',
                email: '',
                age: '',
                sex: 'M',
                state: ''
            },
            terms: false,
            description: ''
            
        }
    }
}
</script>

<style scoped>
.is-danger input{
    border: 1px solid red;
}
.is-danger p{
    color: red;
}
.is-sucess input{
    border: 1px solid green;
}
</style>
