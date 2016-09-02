var postsData = [
	{
		title: '好基友一辈子',
		url: 'http://www.baidu.com'
	},
	{
	    title: 'The Meteor Book',
	    url: 'http://themeteorbook.com'
	},
	{
	    title: 'Introducing Telescope',
	    url: 'http://sachagreif.com/introducing-telescope/'
	}, 
	{
	    title: 'Meteor',
	    url: 'http://meteor.com'
	}
];

Template.postsList.helpers({
	posts: postsData
});







