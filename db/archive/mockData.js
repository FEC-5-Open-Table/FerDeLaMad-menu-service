const data = [];

const menu01 = {
resName: 'Octavia',
  foodMenu: [
    {
	  	name: 'Dinner Menu',
	  	menu: [
		  {
		  	info: {
			    title: 'Main',
			    description: 'take a whole loaf home $8'
			  },
		    items: [
		      {
		        name: 'Capital Oyster',
		        description: 'pickled persimmon, anise, habanada mignonette',
		        price: '$4.00'
		       },
		       {
		        name: 'Deviled Egg',
		        description: 'dolcini farm egg, fresno chile relish, marash pepper & spice',
		        price: '$7.00'
		       },
		       {
		        name: 'Chilled Squid Ink Noodles',
		        description: 'cortez bottarga, fennel, lemon agrumato',
		        price: '$8.50'
		       },
		       {
		        name: 'Fried Jerusalem Artichoke',
		        description: 'rapini pesto, charred meyer lemon, parmesan',
		        price: '$9.00'
		       },
		       {
		        name: 'Pickled Beets',
		        description: 'dill, horseradish crème fraîche, black olive & pistachio',
		        price: '7.50'
		       },
		       {
		        name: 'Local Yellowtail Crudo',
		        description: 'kohlrabi, shishito, winter citrus, pink peppercorn',
		        price: '$12.00'
		       },
		       {
		        name: 'Roasted Fennel Soup',
		        description: 'chanterelle mushroom, cipollini onion, crème fraīche',
		        price: '$14.00'
		       },
		       {
		        name: 'Chicories',
		        description: 'breakfast radish, buttermilk, "agua bufazola," toasted hazelnut',
		        price: '$14.00'
		       },
		       {
		        name: 'Grain Salad',
		        description: 'red kuri squash, spigarello kale, pomegranate, preserved lemon',
		        price: '$14.00'
		       },
		       {
		        name: 'Dungeness Crab Pappardelle',
		        description: 'garlic, saffron, marash, fennel seed pangrattato',
		        price: '$18.00'
		       },
		       {
		        name: 'Petit Filet',
		        description: 'fingerling potato, cured egg yolk, anchovy vinaigrette',
		        price: '$37.00'
		       },
		       {
		        name: 'King Salmon',
		        description: 'romanesco, red wine lentil ragoût, shallot, house yogurt',
		        price: '$34.00'
		       },
		       {
		        name: 'Duck Leg',
		        description: 'confit, tokyo turnip, grilled persimmon, espelette, sweet herbs',
		        price: '$31.50'
		       },
		       {
		        name: 'Roasted Savoy Cabbage',
		        description: 'sourdough dumplings, crème fraîche, toasted caraway',
		        price: '$26.00'
		       },

		     ]
		   }, 
	    ]
	},
	{
	  	name: 'Dessert Menu',
	  	special: {
	      title: 'Monday',
	      description: '2x1 on all desserts'
	  	},
	  	menu: [
		  {
		  	info: {
			    title: 'House Desserts',
			    description: 'A sparkle of sweetness in your life'
			  },
		    items: [
		      {
		        name: 'Toasted Angel Food Cake',
		        description: 'elderberry, buttermilk, meyer lemon ice cream',
		        price: '$10.00'
		       },
		       {
		        name: 'Wildflower Honey Crumb Pudding',
		        description: 'pink lady apple, honey toffee, crème fraīche',
		        price: '$10.50'
		       },
		       {
		        name: 'Warm Chocolate Soufflé Tart',
		        description: 'cocoa nib brittle, salted caramel ice cream',
		        price: '$11.00'
		       },
		       {
		        name: 'Affogato Float',
		        description: 'espresso, alessio vermouth & coffee ice cream',
		        price: '$9.00'
		       },
		       {
		        name: 'Winter Spice Profiteroles',
		        description: "satsuma, buddha's hand, pink peppercorn ice cream",
		        price: '$10.00'
		       },
		       {
		        name: '"Carrot Cake" Éton Mess',
		        description: 'pistachio dacquoise, medjool date, cream cheese ice cream',
		        price: '10.00'
		       }
		     ]
		   } 
	    ]
	}
  ]
  ,
  drinksMenus: [
  {
	  	name: 'Wine Menu',
	  	special: {
	      title: 'Corkage:',
	      description: '$25 Each for the First Two 750ml Bottles; $50 Each for the Third and Fourth 750ml Bottles; $75 Each for all Subsequent 750ml Bottles'
	  	},
	  	menu: [
		   {
		    title: 'Vermouth',
			items: [
		        {
		          name: "Vya 'Whisper' Madera",
		          description: 'Dry Delicate Red Apple & Rambutan',
		          price: '$7.00'
		        },
		        {
		          name: 'Ransom Oregon',
		          description: 'Dry Brisk Melon',
		          price: '$11.00'
		        },
		        {
		          name: "Massican 'Vermouth di Friulano' Napa",
		          description: 'Grapefruit, Corriander, Pine',
		          price: '$8.00'
		        },
		        {
		          name: "Alysian 'Bittersweet' California",
		          description: 'Artichoke, Cedar, Jasmine',
		          price: '$11.00'
		        },
		        {
		          name: 'Bordiga Vermouth di Torino Rosso IT',
		          description: 'Kola Nut, Quinine, Jasmine',
		          price: '$10.00'
		        },
		        {
		          name: 'Imbue Petal & Thorn Oregon',
		          description: 'Bittersweet Lemon Lilac',
		          price: '$10.00'
		        },
		        {
		          name: 'Alessio Vermouth di Torino Rosso IT',
		          description: 'Dark Dusty Chocolate Cherry',
		          price: '$9.00'
		        },
		        {
		          name: 'Carpano Antica Italy',
		          description: 'Mint, Herbs, Plum and Fig',
		          price: '$10.00'
		        }
		      ]
		   },
		   {
		    title: 'House Cocktails',
			items: [
		        {
		          name: 'The House Cocktail',
		          description: 'Lillet Blanc / Alessio Vermouth di Torino / Petal & Thorn',
		          price: '$10.00'
		        },
		        {
		          name: 'The Smart Remark',
		          description: 'Dolan Vermouth / Lemon Rosemary Shrub, Pasubio Amaro, Salt & Tonic',
		          price: '$10.00'
		        },
		        {
		          name: 'Negroni Sbagliato',
		          description: 'Cappelletti / Carpano Antica Vermouth / Sparkling Wine',
		          price: '$11.00'
		        }
		      ]
		   },
		   {
		    title: 'House Wine',
			items: [
		        {
		          name: 'Cuvée No. 6 In Collaboration with Skinner Vineyards',
		          description: 'This is a Côtes du Rhone style white blend hailing from El Dorado in the Sierra Foothills. It is 56% Roussanne, 31% Viognier and 13% Marsanne. The result is a medium bodied white with floral aromatics of honeyed peach, melon and white flowers. The palate is waxy and textured following through with the stone fruit and ripe citrus. A delicious blend that serves as a great alternative to Chardonnay, this is exclusive to Octavia and we are pleased to serve it to you!',
		          price: '$15.00'
		        }
		      ]
		   }
	    ]
  }
 ]

};

const menu02 = {
  resName: 'Zuni-Cafe',
  foodMenu: [
    {
	  	name: 'Lunch Menu',
	  	special: {
	      title: 'Corkage:',
	      description: '$25 per bottle (750 ml)'
	  	},
	  	menu: [
		  {
		  	info: {
			    title: 'Main',
			    description: 'House plates'
			  },
		    items: [
		      {
		        name: 'House-Cured Anchovies',
		        description: 'with celery, Parmigiano-Reggiano, and Coquillo olives',
		        price: '$12.00'
		       },
		       {
		        name: 'Pio Tosini Prosciutto di Parma',
		        description: 'with grilled leeks, chopped egg, capers, and tender greens',
		        price: '$15.00'
		       },
		       {
		        name: 'Arugula Salad',
		        description: 'with Manchego cheese, paprika almonds, and citrus vinaigrette',
		        price: '$10.00'
		       },
		       {
		        name: 'Mixed Chicory Salad',
		        description: 'with Fuyu persimmons, pomegranate seeds, and wildflower honey vinaigrette',
		        price: '$10.50'
		       },
		       {
		        name: 'Zuni Caesar Salad',
		        description: 'traditional salad',
		        price: '$12.00'
		       },
		       {
		        name: 'Jerusalem Artichoke Soup',
		        description: "with apples, Buddha's hand citron, and yogurt",
		        price: '$10.50'
		       },
		       {
		        name: 'Bowl of Polenta',
		        description: 'with mascarpone or Parmigiano-Reggiano',
		        price: '$8.00'
		       },
		       	{
		        name: 'Deep-Fried Mt. Lassen Trout',
		        description: 'with kale-cabbage slaw, navel oranges, dill, and house-made hot sauce',
		        price: '$18.75'
		       }
		     ]
		   },
		   {
		  	info: {
			    title: 'From The Wood-Fired Brick Oven',
			    description: 'Bringing tradions back'
			  },
		    items: [
		      {
		        name: 'Pizza with Ricotta Salata',
		        description: 'tomato sauce, and oregano',
		        price: '$14.75'
		       },
		       {
		        name: 'Pizza with Wagon Wheel Cheese',
		        description: 'cauliflower, radicchio, sage, walnuts, and nutmeg',
		        price: '$16.50'
		       },
		       		      {
		        name: 'Chicken for Two Roasted in the Brick Oven',
		        description: 'warm bread salad with scallions, garlic, mustard greens, dried currants, and pine nuts (approximately 60 minutes)',
		        price: '$58.00'
		       }
		     ]
		   } 
	    ]
	},
	{
	  	name: 'Dinner Menu',
	  	special: {
	      title: 'Corkage:',
	      description: '$25 per bottle (750 ml)'
	  	},
	  	menu: [
		  {
		  	info: {
			    title: 'Main',
			    description: 'Marinated Pacific Sun Farm olives $6, Shoestring potatoes $6'
			  },
		    items: [
		      {
		        name: 'House-Cured Anchovies',
		        description: 'with celery, Parmigiano-Reggiano, and coquillo olives',
		        price: '$12.00'
		       },
		       {
		        name: 'Bellwether Farms Ricotta Gnocchi',
		        description: 'with spinach and saffron butter sauce',
		        price: '$18.75'
		       },
		       {
		        name: 'Crostone',
		        description: 'with Laura Chanel fresh goat cheese, marinated beets, crispy quinoa, bee pollen, and olio verde novello',
		        price: '$14.50'
		       },
		       {
		        name: 'Sagne a Pezzi alla Bolognese',
		        description: 'with nutmeg and pine nuts',
		        price: '$18.75'
		       },
		       {
		        name: 'Yellowfin Tuna Confit',
		        description: 'with Royal Corona beans, Treviso chicory, oranges, and saba',
		        price: '$15.00'
		       },
		       {
		        name: 'Grilled Maryland Striped Bass and Fava Bean Leaves',
		        description: 'with carrots, couscous, harissa, lime, and cilantro',
		        price: '$32.00'
		       },
		       {
		        name: 'Piccolo Fritto',
		        description: 'deep-fried turnips, onions, and parsnips with cresta di gallo and aïoli',
		        price: '$14.50'
		       },
		       {
		        name: 'Llano Seco Ranch Pork Shoulder Roast Seasoned',
		        description: 'with rosemary, garlic, lemon zest, and capers; Marin Roots Farm kale, cranberry beans, and olivada',
		        price: '$32.50'
		       },
		       {
		        name: 'Arugula Salad',
		        description: 'with Manchego cheese, paprika almonds, and citrus vinaigrette',
		        price: '$10.00'
		       },
		       {
		        name: 'La Tagliata',
		        description: 'sliced Stemple Creek Ranch top sirloin with grilled Piracicaba broccoli, buttermilk mashed potatoes, and black trumpet mushrooms',
		        price: '$34.00'
		       },
		       {
		        name: 'Little Gem Lettuce Salad',
		        description: 'with watermelon radishes, dill, and creamy mustard vinaigrette',
		        price: '$10.50'
		       },
		       {
		        name: 'Whole Passmore Ranch Trout Roasted in the Wood-fired Brick',
		        description: 'oven with butterball potatoes, cabbage, caraway seeds, juniper, Meyer lemon relish, and horseradish cream',
		        price: '$32.50'
		       }
		     ]
		   } 
	    ]
	},
	{
	  	name: 'Brunch Menu',
	  	menu: [
		  {
		    items: [
		      {
		        name: 'House-Cured Anchovies',
		        description: 'with celery, Parmigiano-Reggiano, and Coquillo olives',
		        price: '$10.75'
		       },
		       {
		        name: 'Ruby Red Grapefruit and Pomelo',
		        description: 'with wildflower honey and bee pollen',
		        price: '$8.00'
		       },
		       {
		        name: 'French Toast',
		        description: 'with Vermont Republic maple syrup, salted pecans, and mascarpone',
		        price: '$16.50'
		       },
		       {
		        name: 'Arugula Salad',
		        description: 'with Manchego, paprika almonds, and citrus vinaigrette',
		        price: '$9.85'
		       },
		       {
		        name: 'Mixed Chicory Salad',
		        description: 'with grapefruit, hazelnuts, Frangelico vinaigrette, and honey',
		        price: '$10.50'
		       },
		       {
		        name: "Julia's Quiche Lorraine",
		        description: 'with house-cured bacon, frisee salad, fennel, and creamy mustard vinaigrette',
		        price: '$14.00'
		       },
		       {
		        name: 'Liberty Ranch Duck Breast',
		        description: 'with a poached egg, wild rice pilaf, broccoli rabe a la plancha, blood oranges, and charmoula',
		        price: '$18.75'
		       },
		       {
		        name: 'Avocado Crostini',
		        description: 'with tender greens, pickled vegetables, and Maurino olive oil',
		        price: '$13.75'
		       },
		       {
		        name: 'Fried Dolcini Red Hill Ranch Eggs',
		        description: 'with Butterball potatoes, coco bianco beans, pea shoots, and chimichurri',
		        price: '$18.50'
		       },
		       {
		        name: 'Spaghetti Neri',
		        description: 'with Monterey Bay squid, Brussels sprouts, leeks, Marsh pepper, and green garlic aioli',
		        price: '$18.75'
		       },

		     ]
		   } 
	    ]
	}

  ]
  ,
  drinksMenus: [
  {
	  	name: 'Wine Menu',
	  	special: {
	      title: 'Corkage:',
	      description: 'Twenty Five dollars per bottle (750 ml)'
	  	},
	  	menu: [
		  {
		    title: 'Champagne & Sparkling Wine',
			items: [
		        {
		          name: 'NV Sommariva, Prosecco Brut, Vento',
		          description: '750ml',
		          price: '$45.00'
		        },
		        {
		          name: 'NV Chartogne-Taillet "Orizeaux" Extra Brut, Merfy',
		          description: '750ml',
		          price: '$136.00'
		        },
		        {
		          name: 'NV Roederer Estate, Brut, Anderson Valley',
		          description: '750ml',
		          price: '$58.00'
		        },
		        {
		          name: '2004 Pierre Moncuit "Vieille Vigne" Nicole Moncuit, Brut, Le Mesnil-sur-Oger',
		          description: '750ml',
		          price: '$146.00'
		        },
		        {
		          name: 'NV Henriot, Blanc de Blancs, Reims',
		          description: '750ml',
		          price: '$96.00'
		        },
		        {
		          name: '2004 Moet & Chandon "Dom Perignon" Brut, Epernay',
		          description: '750ml',
		          price: '$192.00'
		        }
		      ]
		   },
		   {
		    title: 'White Wine',
			items: [
		        {
		          name: '2013 Soliste "Lune et Soleil" Sauvignon Blanc, Lake County',
		          description: '750ml',
		          price: '$49.00'
		        },
		        {
		          name: '2015 Lewis Cellers, Chardonnay, Russian River Valley',
		          description: '750ml',
		          price: '$93.00'
		        },
		        {
		          name: '2014 Navarro Vineyards, Gewurztraminer, Anderson Valley',
		          description: '750ml',
		          price: '$35.00'
		        },
		        {
		          name: '2014 Lioco, Chardonnay, Russian River Valley',
		          description: '750m',
		          price: '$68.00'
		        },
		      ]
		   }
	    ]
  }
 ]
};

const menu03 = {
  resName: 'Nightbird',
  foodMenu: [
    {
	  	name: 'Dinner Menu',
	  	special: {
	      title: 'House Wines:',
	      description: '$75.00 all bottles'
	  	},
	  	menu: [
		  {
		    items: [
		      {
		        name: 'Quail Egg',
		        description: 'Leek, Hollandaise',
		        price: '$14.50'
		       },
		       {
		        name: 'Lobster',
		        description: 'Pea, Chamomile',
		        price: '$10.00'
		       },
		       {
		        name: 'Corn Dumpling',
		        description: 'Dandelion, Cocoa',
		        price: '$13.00'
		       },
		       {
		        name: 'Duck',
		        description: 'Summer Squash, Vadouvan and Brioth',
		        price: '$22.75'
		       },
		       {
		        name: 'Flannery Beef',
		        description: 'Porchini, Smoked Grits',
		        price: '$32.00'
		       },
		       {
		        name: 'Blueberry Sorbet',
		        description: 'Traditional house blend',
		        price: '$27.00'
		       },
		       {
		        name: 'Cherry',
		        description: 'Chocolate, Tonka, Graham',
		        price: '$22.50'
		       },
		     ]
		   } 
	    ]
	}
  ]
  ,
  drinksMenus: [
  {
	  	name: 'Wines',
	  	menu: [
		  {
		    title: 'European Whites',
			items: [
		        {
		          name: 'Chenin Blanc',
		          description: 'Champalou, Vouray, Loire, FR, 2015',
		          price: '$47.00'
		        },
		        {
		          name: 'Gruner Veltliner',
		          description: 'Prager, Smaragd Achleiten, Weingut, Austria, 2015',
		          price: '$100.00'
		        },
		        {
		          name: 'Albarino',
		          description: 'Eladio Pineiro, Rias Baixas, Spain, 2014',
		          price: '$75.00'
		        },
		        {
		          name: 'Chardonnay',
		          description: 'Jean-Marc Brocard, 1er, Vau de Vay, Burgundy, France, 2014',
		          price: '$62.00'
		        },
		      ]
		   },
		   {
		    title: 'New World Whites',
			items: [
		        {
		          name: 'Viognier',
		          description: 'Site, Larner Vineyard, Santa Barbara, CA, 2014',
		          price: '$80.00'
		        },
		        		        {
		          name: 'Chardonnay',
		          description: 'Liquid Farm, White Hill, Sonoma Coast, CA, 2015',
		          price: '$90.00'
		        },
		        		        {
		          name: 'Semillon Blend',
		          description: "Lasseter 'Voila', CA, 2014",
		          price: '$75.00'
		        },
		        		        {
		          name: 'Sauvignon Blanc',
		          description: 'J. Christopher, Willamette Valley OR, 2015',
		          price: '$90.00'
		        },
		        		        {
		          name: 'Gaston Chiquet',
		          description: 'Brut, Ler Cru, NV',
		          price: '$100.00'
		        },
		        		        {
		          name: 'Billecart-Salmon',
		          description: 'Brut Rose, NV',
		          price: '$88.00'
		        }
		      ]
		   }
	    ]
  },
  {
	  	name: 'Cocktail Menu',
	  	special: {
	      title: 'Linden Room Cocktails',
	      description: 'Any choice $13.00 on Tuesday'
	  	},
	  	menu: [
		  {
		    title: 'Linden Room Cocktails',
			items: [
		        {
		          name: 'Marina Greens',
		          description: 'Vodka, Green Juice, Ginger and Lime Soda',
		          price: '$15.00'
		        },
		        {
		          name: 'Early Autumn',
		          description: 'Gin, Dry Apple Cider, Burnt Chamomile Honey, Thyme',
		          price: '$17.00'
		        },
		        {
		          name: 'Linden Tree',
		          description: 'Gin, Wild Elderflower, Lime and Orange',
		          price: '$18.50'
		        },
		        {
		          name: 'Pretty Please',
		          description: 'Mezcal, Plum, Alessio Vermouth Bianco, Bonal',
		          price: '$14.75'
		        },
		        {
		          name: 'Silk Road',
		          description: 'Bourbon, Almond, Gentian Amaro, Bitters',
		          price: '$16.50'
		        },
		        {
		          name: 'Crimson & Clover',
		          description: 'Rum, Brandy, Beet, Hibiscus, Lime, Cinnamon',
		          price: '$15.50'
		        },
		        {
		          name: 'Billy Ocean',
		          description: 'Rye, Green Banana, Toasted Coconut, Bitter Almond, Lime',
		          price: '$19.00'
		        },
		        {
		          name: "Hoo's Hoo",
		          description: 'Scotch, Toasted Grains, Fernet, Orange Bitters',
		          price: '$17.00'
		        }
		      ]
		   },
		   {
		    title: 'Bottled Beer',
			items: [
		        {
		          name: 'Bite Hard Apple Cider',
		          description: '16oz',
		          price: '$9.00'
		        },
		        		        {
		          name: 'New Avalon Hard Apple Cider',
		          description: '500ml',
		          price: '$21.00'
		        },
		        		        {
		          name: 'Jamaica Red Ale',
		          description: '12oz',
		          price: '$8.00'
		        },
		        		        {
		          name: 'Saison du Japon',
		          description: '12oz',
		          price: '$11.00'
		        },
		        		        {
		          name: 'Hop Shovel',
		          description: '12oz',
		          price: '$9.00'
		        },
		        		        {
		          name: 'Organic Porter',
		          description: '12oz',
		          price: '$8.00'
		        }
		      ]
		   },
	    ]
  }
 ]
};

data.push(menu01);
data.push(menu02);
data.push(menu03);

module.exports = {
	data
}


