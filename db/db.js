//Creating a mongoose connection
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/menu');

//Schema-Table -- changes made
let menuSchema = mongoose.Schema({
  resName: String,
  foodMenu: [
    {
	  	name: String,
	  	special: {
	      title: String,
	      description: String
	  	},
	  	menu: [
		  {
		  	info: {
			    title: String,
			    description: String
			  },
		    items: [
		      {
		        name: String,
		        description: String,
		        price: String
		       }
		     ]
		   } 
	    ]
	}
  ]
  ,
  drinksMenus: [
  {
	  	name: String,
	  	special: {
	      title: String,
	      description: String
	  	},
	  	menu: [
		  {
		    title: String,
			items: [
		        {
		          name: String,
		          description: String,
		          price: String
		        }
		      ]
		   }
	    ]
  }
 ]

});