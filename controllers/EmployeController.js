const Employe = require("../models/EmployeModel");

class EmployeController {
    static createEmploye(){
        return async (request, response, next) => {
            const {name,email,picture,salary,phone,position} = request.body
            if(!name || !email || !salary || !phone || !position){
                return response.staus(422).json({error:"Veuillez saisir tous les champs"});
            }
            const employe = new Employe({name,email,picture,salary,phone,position});
            await employe.save()
            .then(res=>response.json({message:'succees'}))
            .catch(error=>console.log(error));
        }
    }
    static deleteEmploye(){
        return async(request, response, next) => {
            const {id} = request.body;
            await Employe.findByIdAndDelete(id)
            .then(res=>response.json({message:"deleted"}))
            .catch(error=>console.log(error));
        }
    }

    static updateEmploye(){
        return async (request, response, next) => {
            const {name,email,picture,salary,phone,position,id} = request.body
            await Employe.findByIdAndUpdate(id,{name,email,picture,salary,phone,position})
            .then(data=>response.json(data))
            .catch(error=>console.log(error));
        }
    }
    static getEmploye(){
        return async (request, response, next)=>{
            await Employe.find()
            .then(res=>response.json(res))
            .catch(error=>console.log(error));
        }
    }
}

module.exports = EmployeController