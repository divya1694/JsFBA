import Species from './species'


export default class Metabolite extends Species {
	constructor (id, formula, name, charge, compartment) {
		this.id = id
		this.formula = formula
		this.name = name
		this.charge = charge
		this.compartment = compartment
	}
}