if(Posts.find().count === 0){
	Posts.insert({
		title: 'Introducing Telescope',
    	url: 'http://sachagreif.com/introducing-telescope/'
	});
	Posts.insert({
		title: "基情四射",
		url: "http://www.baidu.com"
	});
	Posts.insert({
	    title: 'Meteor',
	    url: 'http://meteor.com'
	});
	Posts.insert({
	    title: 'The Meteor Book',
	    url: 'http://themeteorbook.com'
	});
}

// if (Posts.find().count() === 0) {
//     Posts.insert({
//         title: 'Introducing Telescope',
//         url: 'http://sachagreif.com/introducing-telescope/'
//     });

//     Posts.insert({
//         title: 'Meteor',
//         url: 'http://meteor.com'
//     });

//     Posts.insert({
//         title: 'The Meteor Book',
//         url: 'http://themeteorbook.com'
//     });
// }
