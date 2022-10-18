interface IMedic {
    qualification: string,
    education: string
}
interface IWorker {
   experience: number,
   age: number
}

const medicObj: IMedic = {
    qualification: "Surgeon", //Хирург
    education: 'Unifercity'
}
const workerObj: IWorker = {
    experience: 3,
    age: 29,

}

//Partial - позволяет в качестве значения указать часть свойств объекта
function setSquad(worker: IWorker, medic: Partial<IMedic>) {
    return {...worker, ...medic};
}
const newSquad = setSquad(workerObj, {education: "NY University"});
console.log(newSquad)
