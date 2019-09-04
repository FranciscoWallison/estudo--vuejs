<template>
    <div>
        <h2>{{ title }}</h2>

        <div class="row">
            <div class="col">
                <form class="form form-inline">
                    <input type="text" class="form-control"  placeholder="Filtrar" v-model="filter" name="" id="">
                </form>
            </div>
            <div class="col">
                <form class="form form-inline" @submit.prevent="onSubmit">
                    <input type="text" placeholder="Nome Tarefa" class="form-control" v-model="task.name">
                    <button type="submit" class="btn btn-primary"> Enviar </button>
                </form>
            </div>
        </div>

        <table class="table table-dark">
            <thead>
                <tr>
                    <th>Id.</th>
                    <th>Nome</th>
                    <th width="180px">Ações</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(task, index) in filteredItems" :key="index">
                    <td>{{ task.id }}</td>
                    <td>{{ task.name }}</td>
                    <td>
                        <a href="#" @click.prevent="edit(index)" class="btn btn-info">Editar</a>
                        <a href="#" @click.prevent="deleteTesk(index)" class="btn btn-danger">Deletar</a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'Lista de Tarefas',
            tasks: [],
            task: {
                id: '',
                name: '',
            },
            updating: false,
            updateIdex: '',
            filter: ''
        }
    },
    methods: {
        onSubmit (){
            if(this.updating){
                this.update()
                return
            }

            this.save()
        },
        save(){
            this.task.id = this.tasks.length + 1            

            this.tasks.push(this.task)

            this.clearForm()
        },
        edit (index) {
            this.task = this.tasks[index]

            this.updateIdex = index
            this.updating = true
        },
        update(){
            this.tasks[this.updateIdex] = this.task

            this.updateIdex = ''
            this.updating = false
            
            this.clearForm()
        },
        deleteTesk (index) {
            this.tasks.splice(index, 1)
        },
        clearForm () {
            this.task = {
                id: '',
                name: '',
            }
        }
    },
    computed: {
        filteredItems () {

            if(this.filter === '')
                return this.tasks
            
            let vm = this
            /*
            return this.tasks.filter(task => {
                return task.name.toLowerCase().indexOf(vm.filter.toLowerCase()) > -1
            })
            */
           return this.tasks.filter(task => {
                return task['name'].toLowerCase().includes(vm.filter.toLowerCase())
            })
        }
    },
}
</script>

<style scoped>
form{
    margin: 20px 0;
}
</style>