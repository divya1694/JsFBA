
export default class Model {
	constructor (id, name) {
		this.id = id
		this.name = name
        this.genes = []
        this.reactions = []
        this.metabolites = []
	}

	getReactionById (id) {
		const reaction = this.reactions.filter(reaction => reaction.id === id)
		return reaction[0]
	}

	getGeneById (id) {
		const gene = this.genes.filter(gene => gene.id === id)
		return gene[0]
	}

	getMetaboliteById (id) {
		const metabolite = this.metabolites.filter(metabolite => metabolite.id === id)
		return metabolite[0]
	}

	addReactions (reactions) {
		this.reactions = this.reactions.concat(reactions)
	}

	addMetabolites (metabolites) {
		this.metabolites = this.metabolites.concat(metabolites)
	}

	addGenes (genes) {
		this.genes = this.genes.concat(genes)
	}

}