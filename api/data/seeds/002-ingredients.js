exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([{"id":1,"name":"Milk - Buttermilk","recipe_id":16},
      {"id":2,"name":"Asparagus - Frozen","recipe_id":48},
      {"id":3,"name":"Cheese - Comte","recipe_id":4},
      {"id":4,"name":"The Pop Shoppe - Black Cherry","recipe_id":9},
      {"id":5,"name":"Tilapia - Fillets","recipe_id":54},
      {"id":6,"name":"Pastry - Baked Scones - Mini","recipe_id":43},
      {"id":7,"name":"Wine - Beringer Founders Estate","recipe_id":29},
      {"id":8,"name":"Broom - Corn","recipe_id":7},
      {"id":9,"name":"Squash - Pattypan, Yellow","recipe_id":46},
      {"id":10,"name":"Bread - Rosemary Focaccia","recipe_id":51},
      {"id":11,"name":"Pickerel - Fillets","recipe_id":74},
      {"id":12,"name":"Sugar - Individual Portions","recipe_id":48},
      {"id":13,"name":"Cheese - Havarti, Roasted Garlic","recipe_id":50},
      {"id":14,"name":"Mountain Dew","recipe_id":51},
      {"id":15,"name":"Spinach - Frozen","recipe_id":12},
      {"id":16,"name":"Soy Protein","recipe_id":8},
      {"id":17,"name":"Cabbage - Nappa","recipe_id":61},
      {"id":18,"name":"Napkin White - Starched","recipe_id":76},
      {"id":19,"name":"Pineapple - Golden","recipe_id":42},
      {"id":20,"name":"Cheese - Brie, Cups 125g","recipe_id":52},
      {"id":21,"name":"Island Oasis - Raspberry","recipe_id":22},
      {"id":22,"name":"Rosemary - Primerba, Paste","recipe_id":39},
      {"id":23,"name":"Mushroom - Shitake, Fresh","recipe_id":6},
      {"id":24,"name":"Stock - Veal, Brown","recipe_id":66},
      {"id":25,"name":"Wine - Baron De Rothschild","recipe_id":78},
      {"id":26,"name":"Spring Roll Veg Mini","recipe_id":51},
      {"id":27,"name":"Pork - Sausage Casing","recipe_id":13},
      {"id":28,"name":"Glaze - Apricot","recipe_id":57},
      {"id":29,"name":"Wine - Wyndham Estate Bin 777","recipe_id":75},
      {"id":30,"name":"Crush - Orange, 355ml","recipe_id":61},
      {"id":31,"name":"Sauce - Roasted Red Pepper","recipe_id":38},
      {"id":32,"name":"Cookie Chocolate Chip With","recipe_id":58},
      {"id":33,"name":"Venison - Denver Leg Boneless","recipe_id":42},
      {"id":34,"name":"Salad Dressing","recipe_id":39},
      {"id":35,"name":"Sloe Gin - Mcguinness","recipe_id":27},
      {"id":36,"name":"Juice - Orange, 341 Ml","recipe_id":48},
      {"id":37,"name":"Onions - Red","recipe_id":58},
      {"id":38,"name":"Wine - Chardonnay South","recipe_id":42},
      {"id":39,"name":"Cassis","recipe_id":52},
      {"id":40,"name":"Bread - Sour Sticks With Onion","recipe_id":38},
      {"id":41,"name":"Onions Granulated","recipe_id":36},
      {"id":42,"name":"Mushroom - Crimini","recipe_id":14},
      {"id":43,"name":"Shrimp - 21/25, Peel And Deviened","recipe_id":79},
      {"id":44,"name":"Island Oasis - Mango Daiquiri","recipe_id":29},
      {"id":45,"name":"Foam Espresso Cup Plain White","recipe_id":61},
      {"id":46,"name":"Wine - Carmenere Casillero Del","recipe_id":1},
      {"id":47,"name":"Quail Eggs - Canned","recipe_id":48},
      {"id":48,"name":"Tuna - Canned, Flaked, Light","recipe_id":35},
      {"id":49,"name":"Longos - Greek Salad","recipe_id":27},
      {"id":50,"name":"Shrimp - Baby, Warm Water","recipe_id":25},
      {"id":51,"name":"Cup - 6oz, Foam","recipe_id":36},
      {"id":52,"name":"Beef - Tenderloin Tails","recipe_id":66},
      {"id":53,"name":"Okra","recipe_id":78},
      {"id":54,"name":"Sugar - White Packet","recipe_id":15},
      {"id":55,"name":"Hinge W Undercut","recipe_id":1},
      {"id":56,"name":"Syrup - Monin - Passion Fruit","recipe_id":71},
      {"id":57,"name":"Table Cloth 90x90 White","recipe_id":21},
      {"id":58,"name":"Creme De Menth - White","recipe_id":2},
      {"id":59,"name":"Cranberry Foccacia","recipe_id":41},
      {"id":60,"name":"Sprouts Dikon","recipe_id":62},
      {"id":61,"name":"Beer - True North Lager","recipe_id":15},
      {"id":62,"name":"Coffee - Hazelnut Cream","recipe_id":31},
      {"id":63,"name":"Jam - Raspberry,jar","recipe_id":1},
      {"id":64,"name":"Soup - Campbells, Classic Chix","recipe_id":47},
      {"id":65,"name":"Momiji Oroshi Chili Sauce","recipe_id":76},
      {"id":66,"name":"Squid - U - 10 Thailand","recipe_id":1},
      {"id":67,"name":"Bag - Clear 7 Lb","recipe_id":7},
      {"id":68,"name":"Gin - Gilbeys London, Dry","recipe_id":14},
      {"id":69,"name":"Apple - Macintosh","recipe_id":1},
      {"id":70,"name":"Trueblue - Blueberry","recipe_id":28},
      {"id":71,"name":"Beef - Rib Roast, Cap On","recipe_id":35},
      {"id":72,"name":"Brandy Cherry - Mcguinness","recipe_id":45},
      {"id":73,"name":"Yucca","recipe_id":70},
      {"id":74,"name":"Schnappes - Peach, Walkers","recipe_id":63},
      {"id":75,"name":"Chocolate - Milk, Callets","recipe_id":22},
      {"id":76,"name":"Soup - Campbells Chili","recipe_id":69},
      {"id":77,"name":"Five Alive Citrus","recipe_id":8},
      {"id":78,"name":"Beets - Candy Cane, Organic","recipe_id":22},
      {"id":79,"name":"Cleaner - Lime Away","recipe_id":47},
      {"id":80,"name":"Bread - Roll, Soft White Round","recipe_id":21},
      {"id":81,"name":"Soup - Campbells Tomato Ravioli","recipe_id":79},
      {"id":82,"name":"Chicken Breast Wing On","recipe_id":24},
      {"id":83,"name":"Wine - Saint Emilion Calvet","recipe_id":35},
      {"id":84,"name":"Carrots - Jumbo","recipe_id":70},
      {"id":85,"name":"Snapple Raspberry Tea","recipe_id":15},
      {"id":86,"name":"Halibut - Whole, Fresh","recipe_id":34},
      {"id":87,"name":"Papayas","recipe_id":75},
      {"id":88,"name":"Juice - Tomato, 10 Oz","recipe_id":62},
      {"id":89,"name":"Soho Lychee Liqueur","recipe_id":73},
      {"id":90,"name":"Cinnamon Buns Sticky","recipe_id":8},
      {"id":91,"name":"Bagel - Sesame Seed Presliced","recipe_id":41},
      {"id":92,"name":"Lettuce - Boston Bib","recipe_id":55},
      {"id":93,"name":"Plate - Foam, Bread And Butter","recipe_id":67},
      {"id":94,"name":"Pesto - Primerba, Paste","recipe_id":49},
      {"id":95,"name":"Beer - Steamwhistle","recipe_id":49},
      {"id":96,"name":"Triple Sec - Mcguinness","recipe_id":60},
      {"id":97,"name":"Prunes - Pitted","recipe_id":51},
      {"id":98,"name":"Beef - Cow Feet Split","recipe_id":17},
      {"id":99,"name":"Wakami Seaweed","recipe_id":7},
      {"id":100,"name":"Juice - Ocean Spray Cranberry","recipe_id":35},
      {"id":101,"name":"Turkey - Breast, Boneless Sk On","recipe_id":46},
      {"id":102,"name":"Pastry - Baked Cinnamon Stick","recipe_id":60},
      {"id":103,"name":"Flour - Chickpea","recipe_id":48},
      {"id":104,"name":"Sesame Seed","recipe_id":76},
      {"id":105,"name":"Wine - Cotes Du Rhone","recipe_id":29},
      {"id":106,"name":"Napkin White","recipe_id":12},
      {"id":107,"name":"Compound - Mocha","recipe_id":14},
      {"id":108,"name":"Towels - Paper / Kraft","recipe_id":45},
      {"id":109,"name":"Tomatoes","recipe_id":27},
      {"id":110,"name":"Table Cloth 54x72 Colour","recipe_id":79},
      {"id":111,"name":"Sobe - Green Tea","recipe_id":79},
      {"id":112,"name":"Tea - Herbal I Love Lemon","recipe_id":26},
      {"id":113,"name":"Tomatoes Tear Drop Yellow","recipe_id":68},
      {"id":114,"name":"Flower - Daisies","recipe_id":49},
      {"id":115,"name":"Cinnamon Rolls","recipe_id":34},
      {"id":116,"name":"Sauce - Soy Low Sodium - 3.87l","recipe_id":47},
      {"id":117,"name":"Coffee Guatemala Dark","recipe_id":20},
      {"id":118,"name":"Mustard - Individual Pkg","recipe_id":69},
      {"id":119,"name":"Assorted Desserts","recipe_id":35},
      {"id":120,"name":"Cookie Dough - Chocolate Chip","recipe_id":10},
      {"id":121,"name":"Calypso - Black Cherry Lemonade","recipe_id":75},
      {"id":122,"name":"Pastry - French Mini Assorted","recipe_id":78},
      {"id":123,"name":"Gooseberry","recipe_id":1},
      {"id":124,"name":"Chinese Foods - Chicken","recipe_id":27},
      {"id":125,"name":"Truffle Cups - Brown","recipe_id":72},
      {"id":126,"name":"Sugar - Crumb","recipe_id":49},
      {"id":127,"name":"Pork - Back, Long Cut, Boneless","recipe_id":73},
      {"id":128,"name":"Cheese - Brie Roitelet","recipe_id":68},
      {"id":129,"name":"Wine - Red, Lurton Merlot De","recipe_id":9},
      {"id":130,"name":"Onions Granulated","recipe_id":55},
      {"id":131,"name":"Ice Cream - Fudge Bars","recipe_id":9},
      {"id":132,"name":"Sobe - Liz Blizz","recipe_id":33},
      {"id":133,"name":"Wine - Rubyport","recipe_id":44},
      {"id":134,"name":"Trout Rainbow Whole","recipe_id":52},
      {"id":135,"name":"Chocolate Bar - Coffee Crisp","recipe_id":27},
      {"id":136,"name":"Wine - Zinfandel California 2002","recipe_id":24},
      {"id":137,"name":"Glass Clear 7 Oz Xl","recipe_id":73},
      {"id":138,"name":"Pasta - Lasagna Noodle, Frozen","recipe_id":66},
      {"id":139,"name":"Appetizer - Cheese Bites","recipe_id":39},
      {"id":140,"name":"Sauce - White, Mix","recipe_id":8},
      {"id":141,"name":"Chestnuts - Whole,canned","recipe_id":60},
      {"id":142,"name":"Cup - 8oz Coffee Perforated","recipe_id":72},
      {"id":143,"name":"Cheese - Le Cru Du Clocher","recipe_id":75},
      {"id":144,"name":"Compound - Pear","recipe_id":57},
      {"id":145,"name":"Mcgillicuddy Vanilla Schnap","recipe_id":32},
      {"id":146,"name":"Puree - Mango","recipe_id":26},
      {"id":147,"name":"Lettuce - Treviso","recipe_id":52},
      {"id":148,"name":"Lobster - Baby, Boiled","recipe_id":80},
      {"id":149,"name":"Cafe Royale","recipe_id":71},
      {"id":150,"name":"Spaghetti Squash","recipe_id":46},
      {"id":151,"name":"Fish - Soup Base, Bouillon","recipe_id":47},
      {"id":152,"name":"Orange - Canned, Mandarin","recipe_id":46},
      {"id":153,"name":"Higashimaru Usukuchi Soy","recipe_id":72},
      {"id":154,"name":"Cream - 18%","recipe_id":62},
      {"id":155,"name":"Shrimp - 16 - 20 Cooked, Peeled","recipe_id":40},
      {"id":156,"name":"Sage - Rubbed","recipe_id":8},
      {"id":157,"name":"Aspic - Amber","recipe_id":39},
      {"id":158,"name":"Rolled Oats","recipe_id":79},
      {"id":159,"name":"Flavouring - Orange","recipe_id":14},
      {"id":160,"name":"Sprouts - Peppercress","recipe_id":17},
      {"id":161,"name":"Chambord Royal","recipe_id":21},
      {"id":162,"name":"Dried Cranberries","recipe_id":73},
      {"id":163,"name":"Table Cloth 54x54 White","recipe_id":24},
      {"id":164,"name":"Crab - Claws, 26 - 30","recipe_id":55},
      {"id":165,"name":"Carbonated Water - Wildberry","recipe_id":58},
      {"id":166,"name":"Mushroom - Morel Frozen","recipe_id":49},
      {"id":167,"name":"Beer - Sleemans Honey Brown","recipe_id":73},
      {"id":168,"name":"Wine - Prosecco Valdobienne","recipe_id":14},
      {"id":169,"name":"Ice Cream Bar - Drumstick","recipe_id":31},
      {"id":170,"name":"Squid - U - 10 Thailand","recipe_id":68},
      {"id":171,"name":"Apron","recipe_id":53},
      {"id":172,"name":"Wine - Chablis 2003 Champs","recipe_id":73},
      {"id":173,"name":"Hipnotiq Liquor","recipe_id":41},
      {"id":174,"name":"Cup - 3.5oz, Foam","recipe_id":35},
      {"id":175,"name":"Cream Of Tartar","recipe_id":4},
      {"id":176,"name":"Sesame Seed Black","recipe_id":19},
      {"id":177,"name":"Coffee Beans - Chocolate","recipe_id":11},
      {"id":178,"name":"Shrimp - Baby, Cold Water","recipe_id":54},
      {"id":179,"name":"Olives - Black, Pitted","recipe_id":56},
      {"id":180,"name":"Mushroom - Oyster, Fresh","recipe_id":74},
      {"id":181,"name":"Container - Hngd Cll Blk 7x7x3","recipe_id":61},
      {"id":182,"name":"Wine - Blue Nun Qualitatswein","recipe_id":41},
      {"id":183,"name":"Long Island Ice Tea","recipe_id":76},
      {"id":184,"name":"Lamb - Loin Chops","recipe_id":80},
      {"id":185,"name":"Cabbage - Savoy","recipe_id":55},
      {"id":186,"name":"Pastry - Baked Scones - Mini","recipe_id":42},
      {"id":187,"name":"Trout Rainbow Whole","recipe_id":47},
      {"id":188,"name":"Flour Pastry Super Fine","recipe_id":61},
      {"id":189,"name":"Rosemary - Primerba, Paste","recipe_id":5},
      {"id":190,"name":"Olives - Kalamata","recipe_id":39},
      {"id":191,"name":"Artichokes - Knobless, White","recipe_id":71},
      {"id":192,"name":"Olives - Kalamata","recipe_id":32},
      {"id":193,"name":"Water - Perrier","recipe_id":32},
      {"id":194,"name":"Juice - Apple 284ml","recipe_id":29},
      {"id":195,"name":"Cookies - Assorted","recipe_id":17},
      {"id":196,"name":"Water - Mineral, Natural","recipe_id":65},
      {"id":197,"name":"Oil - Shortening - All - Purpose","recipe_id":6},
      {"id":198,"name":"Cake Slab","recipe_id":73},
      {"id":199,"name":"Bar Mix - Lemon","recipe_id":21},
      {"id":200,"name":"Fondant - Icing","recipe_id":52},
      {"id":201,"name":"Wine - German Riesling","recipe_id":19},
      {"id":202,"name":"Beer - Molson Excel","recipe_id":52},
      {"id":203,"name":"Cabbage - Green","recipe_id":62},
      {"id":204,"name":"Chicken - Thigh, Bone In","recipe_id":78},
      {"id":205,"name":"Wine - Champagne Brut Veuve","recipe_id":73},
      {"id":206,"name":"Beans - Kidney, Canned","recipe_id":56},
      {"id":207,"name":"Cheese - Parmesan Grated","recipe_id":46},
      {"id":208,"name":"Hagen Daza - Dk Choocolate","recipe_id":44},
      {"id":209,"name":"Jam - Raspberry","recipe_id":60},
      {"id":210,"name":"Chilli Paste, Ginger Garlic","recipe_id":20},
      {"id":211,"name":"Red Pepper Paste","recipe_id":14},
      {"id":212,"name":"Beer - Original Organic Lager","recipe_id":5},
      {"id":213,"name":"Syrup - Monin, Irish Cream","recipe_id":33},
      {"id":214,"name":"Sugar - Icing","recipe_id":75},
      {"id":215,"name":"Melon - Watermelon, Seedless","recipe_id":53},
      {"id":216,"name":"Glass Clear 7 Oz Xl","recipe_id":58},
      {"id":217,"name":"Sobe - Berry Energy","recipe_id":58},
      {"id":218,"name":"Juice - Orange, Concentrate","recipe_id":71},
      {"id":219,"name":"Nut - Pecan, Pieces","recipe_id":13},
      {"id":220,"name":"Miso Paste White","recipe_id":49}]);
    });
};
