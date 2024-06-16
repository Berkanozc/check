const icons = {
    "Kitchen": "&#127869;",
    "Bedroom": "&#128719;",
    "Toilet": "&#128701;",
    "Bath": "&#128705;",
    "Closet": "&#128087;",
    "Entry": "&#128682;"
};

const jsonProductString = `
{
  "Items": [
    {
      "category": "Toilet"
      "link": "https://www.amazon.com/Eyliden-Toilet-Plunger-Bathroom-Cleaning/dp/B098QKYMRS/ref=sr_1_7?crid=1TFR94KSW447Q&dib=eyJ2IjoiMSJ9.1LIw228tq5vK8Uw8eBpOFE4KXHeJoGnkhVg2DS5twdXWxiAvdbugbDVivK6Ycx1eMO7ICHh64AD1aYuSOz76tfAjJAxpa346ZWqtif_WaoPVmEdWyGxJNkb7hSefCkpYwcWbpNoJKXidmUPa1W2tdK7Qv0MH72HUJP9pmuUazim_co-NYlbxZLjUhtu2nbfGPR7EQnYXzWba5yN8nUB-LW8X2F3vQEGsmBq0ExRo7MJsFtyzGRp7GV6ChmoApA5GBF_-4Lup8ejTzRu9Eqima5DPwqhrX9YuqJk3ORR27J0.9lbqMyOwcXFcY8u2cSN0U_FNCeAT3zDfv8xgk2L0lcU&dib_tag=se&keywords=Plunger&qid=1718446233&sprefix=air%2Bfreshener%2Caps%2C166&sr=8-7&th=1",
      "image": "https://m.media-amazon.com/images/I/71Syuw67h3L._AC_SX679_.jpg",
    },
    {
      "category": "Toilet"
      "link": "https://www.amazon.com/Toilet-Brushed-Standing-Storage-Bathth/dp/B0B4NQ4FW8/ref=sr_1_5?crid=C86YP7OP2GM&dib=eyJ2IjoiMSJ9.b-yEtLjLty462N5DbImdqzCrsbYSSE6n5Gjpp4sOcHLJIHNISAhe5giohDd7D_mVWzJQF2C9C2_Po4yWkfeQ0cKnZgQ_hbwna5hsbIYtnweyMZEDEZUXOaeeKdVlsJnaoD0_4ZCe8NVPeLeoPGmj_BBounGRFa1KHLxKlnu0MN55pYzQMslk0Ncuy0rsBtMxt9obTeaaABf4p8APKj8l7u3AjmJKR_kLaaykAJvU8LkKpPXMEVupODDfML5dRLo9X3oLIJLzPIqNG3P_VJ95mes-Jmmz-dDmg8rT2Wy-fJk.7J_ES8PVjGKz9Jnpa5akoWXbE-R_vEBu6fIftxC7zWE&dib_tag=se&keywords=Toilet%2BPaper%2BHolder&qid=1718446117&sprefix=toilet%2Bpaper%2Bholder%2Caps%2C152&sr=8-5&th=1",
      "image": "https://m.media-amazon.com/images/I/41wIBGqUIeL._AC_SL1500_.jpg",
    }
  ],
}
`;

const jsonString = `
{
  "Kitchen": {
    "Appliances": [
      "Fridge/Freezer", "Oven", "Dishwasher", "Microwave", "Cooktop",
      "Kettle", "Toaster", "Coffee Machine", "Blender", "Sandwich Press",
      "Water Cooker"
    ],
    "Dinnerware": [
      "Cutlery Tray", "Plates", "Side Plates", "Bowls", "Serving Bowl",
      "Deep Plates", "Oven/Serving Dish", "Coffee Mugs", "Teapot",
      "Coffee Press", "Milk Jugs", "Crockery Sets", "Tea Cups"
    ],
    "Knives": [
      "Cook's Knife", "Paring Knife", "Slicing Knife", "Bread Knife",
      "Utility Knife", "Cutting Board", "Cake Knife"
    ],
    "Flatware Set": [
      "Knives", "Spoons", "Forks", "Teaspoons"
    ],
    "Utensils": [
      "Serving Spoon", "Measuring Spoons", "Ladle", "Spatula", "Scissors",
      "Pizza Cutter", "Peeler", "Whisk", "Tongs", "Bottle Opener",
      "Cork Screw", "Colander", "Measuring Cup"
    ],
    "Glassware": [
      "Wine Glasses", "Water Glasses", "Pitcher/Carafe", "Pint Glasses"
    ],
    "Cookware": [
      "Frying Pan", "Wok", "Pots/Pans & Lids", "Saucepan"
    ],
    "Cleaning/Dishes": [
      "Dishwashing Brush", "Dishwashing Tub", "Garbage Bags", "Garbage Can",
      "Dish Soap", "Dish Rags", "Dish Drainer", "Towels", "Paper Towel Holder",
      "Cloths"
    ],
    "Other": [
      "Food Containers", "Jars", "Spice Rack", "Bin"
    ]
  },
  "Bedroom": [
    "Mattress", "Mattress Topper", "Bed Frame", "Bed Sheets", "Duvet",
    "Duvet Covers", "Pillows", "Pillow Cases", "Night Stand(s)", "Wardrobe/Closet",
    "Chest of Drawers", "Curtains", "Curtain Rails", "Alarm Clock", "Under-Bed Storage Boxes",
    "Shoe Rack", "Fan", "Heater", "Extra Blankets", "Throw Pillows", "Decor",
    "Desk & Chair"
  ],
  "Toilet": [
    "Toilet Brush", "Towel", "Hand Soap", "Toilet Paper Holder", "Toilet Paper",
    "Waste Bin", "Disinfectant", "Air Freshener", "Plunger"
  ],
  "Bath": [
    "Bath Towel", "Hand Towel", "Laundry Basket", "Face Cloths", "Shower Curtain",
    "Curtain Rod/Rings", "Bath Mats", "Body Wash", "Face Wash", "Shampoo",
    "Conditioner", "Tissues", "Mirror", "Toilet Paper", "Toothbrush", "Toothpaste",
    "Toilet Roll", "Shower Organizer", "Bath Robe", "Hair Dryer", "Hair Styling",
    "Moisturiser"
  ],
  "Closet": [
    "Clothes Hangers", "Shoe Organiser", "Storage Organisers", "Door Hooks",
    "Shelf Organiser", "Storage Bins", "Drawer Organisers"
  ],
  "Entry": [
    "Welcome Mat", "Key Hook", "Coat Hanger", "Small Table", "Tray for Mail",
    "Area Rug"
  ]
}
`;

const jsonData = JSON.parse(jsonString);