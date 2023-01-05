"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "recipes",
      [
        {
          foodName: "Kabab Koobideh: Persian beef skewers recipe",
          imageUrl:
            "https://i0.wp.com/iran-cuisine.com/wp-content/uploads/2020/10/koobideh.jpg?fit=828%2C1013&ssl=1",
          recipe:
            "Kabab Koubideh, this Iranian kebab has been exported all over the world, such as in London, Los Angeles or even Paris. For good reason, Iranian communities have settled in these cities over the years. They did not hesitate to bring their cultures and culinary identities with them. Among the recipes brought, the Kabab Koudibeh has become a must because of its taste, but also its authenticity. Indeed, even the presentation is unlike any other recipe. Legend has it that the metal pins used for this skewer once referred to the swords of Persian soldiers in the Middle Ages. Always on the lookout for a fight, the latter took advantage of the fires to grill their meats using their weapons. After cooking, the meat is then placed on a flat stone before tasting. On the other hand, another theory states that this kebab is imported to Iran, and that it is of Caucasian origin. Either way, it has become a national dish in Iran. In fact, Persian and Iranian cuisine is said to be one of the oldest in the world. It is then normal that several stories appear for a single recipe",
          description:
            "The kebab has enormous importance in Iranian gastronomy and for them the kabab koobideh is a mythical skewer. Traditionally it has to be done on a metal brooch called “Sikh”. You can still make it very well with wooden pins .",
          likes: 0,
          userId: 1,
          regionId: 1,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          foodName: "Homemade Turkish Meatballs Kofte	",
          imageUrl:
            "http://res.cloudinary.com/dsanefw3u/image/upload/v1671564328/q4oqxhc9nlgib608p7zv.jpg	",
          recipe: `Turkish Kofte Recipe Ingredients
            We mostly make it with ground beef, that is 80% lean. If you like the flavor of lamb, you can use a combination of lamb and beef. It will become even moister that way.
            
            Besides ground beef, we use kofte spice mix, onions (finely chopped or pureed), garlic and bread crumbs. You can substitute 2 slices of bread (crumbled) for bread crumbs. Mom adds finely chopped parsley in the mixture and we love it too. It makes a wonderful twist on classic meatballs.
            Key Ingredients For The Fluffiest Turkish Kofte
            Besides the ingredients above, there are three ingredients that will help you have fluffy meatballs. These are: baking soda, lemon juice and water. Mix these in a small bowl and pour in the ground beef mixture. Combine them all and let the mixture sit in the refrigerator at least 2-3 hours for the best result.
            Tips On Turkish Meatballs
            It is simple and easy to make these at home but has some secrets. You feel that there is always something missing in your homemade koftes. When you make Turkish meatballs from scratch, you need to know some tips to make them as tasty and juicy as the ones you eat out.
            
            What makes Turkish meatballs that tasty is the type of meat used. You need to buy the right ground beef for flavorsome meatballs. Forget about lean ground beef and ask for 20% fat, which means 80% lean. You need fat to keep your meatballs moist on the inside.
            Another thing when buying ground beef is asking for freshly ground. Don’t buy packaged ground beef, you can never be sure the type of beef inside those packages.Also, it’s not good when it sits for a long time. Finally, have it double ground.
            The key ingredient for oh-so-good meatballs is baking soda. It helps them have that tenderness.
            You need to prepare the meatball mixture and let it rest in the refrigerator for 2-3 hours. Overnight is the best.
            You should dice the onions super finely or puree it.
            If you are at home and don’t have a grill or barbecue, the best way to cook Turkish meatballs is in a cast iron pan.
            Start cooking them on the highest heat, flipping them over so that all sides equally change the color, for 2 minutes. Then bring it to the lowest heat and continue cooking until done, for about 10 minutes.`,
          description:
            "Homemade Turkish Meatballs known as kofte are the best things to happen on your dinner table. These are spicy, tender and perfectly juicy. It’s not a secret any more to make meatballs at home that are much tastier than store-bought ones.",
          likes: 0,
          userId: 1,
          regionId: 3,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          foodName: "Karniyarik Turkish stuffed eggplan	",
          imageUrl:
            "http://res.cloudinary.com/dsanefw3u/image/upload/v1672662188/x2ufwzii0tvsjtkgakpr.jpg",
          recipe: `Eggplant is very popular in Turkey and there are so many Turkish recipes such as smokey eggplant salad that use eggplant as a main ingredient. People make this stuffed eggplant recipe at home frequently because it's packed with so much flavor and is a great way to add eggplant to your weekly meal plan.

            For Karniyarik, the eggplant is usually fried, however, we are going to go through other methods of cooking as well.
            INGREDIENTS AND SUBSTITUTIONS
            Eggplants: I recommend you use smaller ones such as Italian eggplants for this recipe as they cook better. They are also softer and more tender compared to globe eggplants which are very large and have deep purple skin color.
            Ground beef: I recommend using lean ground beef for this recipe. You can also use ground lamb or a combination of both.
            Onions and garlic: Yellow onions or sweet onions would work in this recipe. It's best to mince garlic fresh instead of using packaged minced garlic.
            Green pepper: You can use either bell pepper or sweet Italian peppers.
            Tomatoes: Roma tomatoes or beefsteak tomatoes work well for this recipe.
            Tomato paste: To add color and a deeper flavor.
            Seasoning: This recipe simply calls for salt and pepper. If desired, you can add some dried oregano. For a more Middle Eastern flavor, use seven spice which is a combination of black pepper, cumin, cinnamon, coriander and other spices.
            HOW TO MAKE KARNIYARIK
            PREPARE THE EGGPLANT
            Peel strips from the skin of the eggplants. Cut a slit in the middle of the eggplants without cutting all the way through. Fill a large bowl with water and add 1 teaspoon salt to it. Place the eggplants in salt water for 30 minutes to get rid of their bitterness.
            
            After 30 minutes, gently squeeze the eggplants and dry with a paper towel. Fry the eggplants on all sides until cooked and brown. The eggplants will be pretty soft. Place the fried eggplants on a paper towel to absorb excess oil.
            
            PREPARE THE FILLING
            While the eggplants are soaking in salt water, make the filling by sauteing onion in olive oil. Add garlic to the onion and saute until golden brown. Mix in ground beef and brown it completely, followed by chopped green pepper and tomatoes. Add the tomato paste, salt and pepper to the ground beef mixture and cook for about 10 more minutes.
            
            BAKE AND SERVE
            Put the fried eggplants in a baking dish and fill them with the ground beef mixture. Make a simple sauce by mixing tomato paste and hot water and spoon it over the stuffed eggplants and also pour it into the dish. Bake in the oven at 350°F for about 30 minutes until eggplants are fully cooked and soft.
            
            ROASTING THE EGGPLANTS INSTEAD OF FRYING
            Traditionally, the eggplant is fried to make this recipe. However, you can also roast the eggplants. To do so, peel strips on the skin of the eggplants and cut a slit in the middle.
            
            Brush with 1 tablespoon olive oil and roast in the oven at 400°F for about 45 minutes. Once the eggplants are roasted, place them in the baking dish and open up the slit to make room for the filling. Then proceed with the stuffing and baking as instructed.`,
          description: `This Turkish eggplant recipe is a classic and well loved all around Turkey. The name Karniyarik translates as "split belly" which I think is because of the fact that the eggplants are split after they're fried and are stuffed with a delicious minced meat mixture and then baked to perfection.`,
          likes: 0,
          userId: 2,
          regionId: 3,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("recipes", null, {});
  },
};
