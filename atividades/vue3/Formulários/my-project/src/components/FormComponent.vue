<template>
    <div>
        <form>
            <input type="text" placeholder="Nome">
            <hr>
            <input type="text" placeholder="E-mail">
            <hr>
            <input type="text" placeholder="Idade">
            <hr>
            <input type="radio" name="sex" value="M"> Masculino |
            <input type="radio" name="sex" value="F"> Feminino
            <hr>
            <select>
                <option value="">Selecione o Estado</option>
                <option value="SP">São Paulo</option>
                <option value="RJ">Rio de Janeiro</option>
                <option value="MG">Minas Gerais</option>
            </select>
            <hr>
            <label for="agree">Concordo com os termos de uso</label>
            <input type="checkbox" id="agree">
            <hr>
            <textarea cols="30" rows="10"></textarea>
            <hr>
            <button type="submit">Enviar</button>
        </form>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>
