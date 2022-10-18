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
type FireMan = Pick<IWorker, "experience" >;

// Partial - позволяет в качестве значения указать часть свойств определенных в интерфесе
function setSquad(worker: IWorker, medic: Partial<IMedic>, fireman: FireMan ) {
    return {...worker, ...medic};
}
const newSquad = setSquad(workerObj, {education: "NY University"}, {experience: 5});
console.log(newSquad)
