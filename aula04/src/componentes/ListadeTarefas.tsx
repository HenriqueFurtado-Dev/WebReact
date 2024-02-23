import React from "react";

import Tarefas from "./Tarefas/Tarefas";

interface ListaTarefasProps {
    tarefas: string[];
}

const ListadeTarefas: React.FC<ListaTarefasProps> = ({tarefas}) => {
    return (
        <ul>
            {tarefas.map((tarefa, index) => (
                <Tarefas key={index} texto={tarefa}/>
            ))}
        </ul>
    )
};


export default ListadeTarefas;
