
export default class Solution {
	constructor (objectiveValue, status, reactions, fluxes, reducedCosts, metabolites, shadowPrices) {
		this.objectiveValue = objectiveValue
		this.status = status
		this.reactions = reactions
		this.fluxes = fluxes
		this.reducedCosts = reducedCosts
		this.metabolites = metabolites
		this.shadowPrices = shadowPrices
	}
}