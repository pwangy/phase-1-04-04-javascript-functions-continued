'use strict'

function saturdayFun(activity = 'roller-skate') {
	return `This Saturday, I want to ${activity}!`
}

function mondayWork(action = 'go to the office') {
	return `This Monday, I will ${action}.`
}

function wrapAdjective(flair = '*') {
	let adj = 'special'
	function withFlair(adj) {
		return `You are ${flair}${adj}${flair}!`
	}
	return withFlair
}