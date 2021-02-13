const { first } = require('../database/connection')
const database = require('../database/connection')

class TaskController{
    novaTarefa(request,response){
        const {tarefa,descricao,responsavel} = request.body

        console.log(tarefa,descricao,responsavel)

        database.insert({tarefa,descricao,responsavel}).table('tasks').then(data=>{
            console.log(data)
            response.json({message:'Tarefa criada com sucesso !'})
        }).catch(error=>{
            console.log(error)
        })

    }

    listarTarefas(request,response){
        
        database.select('*').table('tasks').then(tarefas=>{
            console.log(tarefas)
            response.json(tarefas)
        }).catch(error=>{
            console.log(error)
        })
    }

    listaUmaTarefa(request,response){        
        const idTarefa = request.params
        
        database.table('tasks').select("*").where('id',idTarefa).first().then(tarefa=>{
            console.log(tarefa)
            response.json(tarefa)
        }).catch(error=>{
            console.log(error)
        })
    }

    atualizarTarefa(request,response){
        const id = request.params
        const descricao = request.body

        database.where({id:id}).update({descricao:descricao}).table("tasks").then(tarefa=>{
            console.log(tarefa)
            response.json(tarefa)
        })
    }

 
}

module.exports = new TaskController()