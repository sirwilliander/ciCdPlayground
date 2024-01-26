import App from './App.svelte';

new App({
	target: document.body,
	props: {
		name: 'Máté Simon',
		
		// What do you associate with the term 'CI/CD'?
		associations: [
			'Maintenance of the pipelines. If something is red --> make it green'
		],
		// Which CI/CD tools do you use in your project?
		tools: 'Jenkins',
		// What do you want to learn in this workshop? 
		expectations: [
			'Get to know more about Jenkins and github actions'
		],
		// What do you like to do when you're not coding?
		hobbies: [
			'wall climbing', 
			'boardgaming', 
			'videogaming',
			'playing football'
		]
	}
});
