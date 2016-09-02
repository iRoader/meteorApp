// var postsData = [
// 	{
// 	    title: 'The Meteor Book',
// 	    url: 'http://themeteorbook.com'
// 	},
// 	{
// 	    title: 'Introducing Telescope',
// 	    url: 'http://sachagreif.com/introducing-telescope/'
// 	}, 
// 	{
// 		title: '好基友一辈子',
// 		url: 'http://www.baidu.com'
// 	},
// 	{
// 	    title: 'Meteor',
// 	    url: 'http://meteor.com'
// 	}
// ];
// Template.postsList.helpers({
// 	posts: postsData
// });

Template.postsList.helpers({
	posts: function(){
		return Posts.find();
	}
});







