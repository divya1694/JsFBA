
export default class Model {
	constructor (id, name) {
		this.id = id
		this.name = name
        this.genes = []
        this.reactions = []
        this.metabolites = []
	}
}