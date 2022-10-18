interface IMedic {
    qualification: string,
    education: string
}
interface IWorker {
    experience: number,
    age: number,
    qualification: string
}


const medicObj: IMedic = {
    qualification: "Surgeon", //Хирург
    education: 'Unifercity'
}
const workerObj: IWorker = {
    experience: 3,
    age: 29,
    qualification: 'worker'
}
// Pick - создает новый тип на основе свойств другого типа/интервейса с наследование типов этих свойств
type FireMan = Pick<IWorker, "experience" | "age">;

// Omit - создает новый тип на основе другого типа, исключив свойства переданные  в виде ключей
type Teacher = Omit<IWorker,  "age">;

// Partial - позволяет указать часть свойств определенных в интерфесе
function setSquad(worker: IWorker, medic: Partial<IMedic>, fireman: FireMan, teacher: Teacher ) {
    return {...worker, ...medic};
}
const newSquad = setSquad(workerObj, {education: "NY University"},{experience: 5, age: 34},
    {experience: 5, qualification: 'dsd'});
console.log(newSquad)
