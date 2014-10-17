// Deprecated values. Using the db now.
// var postsData = [
// 	{
// 		title: 'Introducing Telescope',
// 		author: 'Sacha Greif',
// 		url: 'http://sachagreif.com/introducing-telescope/'
// 	},
// 	{
// 		title: 'Meteor',
// 		author: 'Tom Coleman',
// 		url:    'http://meteor.com'
// 	},
// 	{
// 		title: 'The Meteor Book',
// 		author: 'Tom Coleman',
// 		url: 'http://themeteorbook.com'
// 	},	
// 	{
// 		title: 'More stuff',
// 		author: 'William Cobb',
// 		url: 'http://bigwilliam.com'
// 	}	
// ];

Template.postsList.helpers({
	// posts: postsData
	posts: function() {
		return Posts.find();
	}
});