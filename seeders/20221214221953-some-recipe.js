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
            "The kebab has enormous importance in Iranian gastronomy and for them the kabab koobideh is a mythical skewer. Traditionally it has to be done on a metal brooch called “Sikh”. You can still make it very well with wooden pins. Kabab beef koobideh skewers are usually made with lamb, ground beef, or a mix of both. It is the most popular kebab that you can find in Iranian streets . For Kabab Koubideh, like most Iranian recipes, spices take as important a place as meat. According to tastes and regions, you can find turmeric, sumac and saffron. Aside from that, the dish is often accompanied by either rice (Chelo) in nature or colored with spices, or Sangak bread. Finally, you should never forget the sauce which is very important for this atypical dish. The sauce will enhance the flavor of the meats. It also makes it possible to make the link between saffron rice and grilled tomatoes which often accompany grilled meats.",
          likes: 0,
          userId: 1,
          regionId: 1,

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
