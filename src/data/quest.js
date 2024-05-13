const quests = {
  common: [
    {
      id: 17,
      name: "On the Range",
      trader: "Gunny",
      description: [
        "On The Range Shooting Lanes Location - 159 168",
        "On The Range Dumping Ground Location - 159 167",
        "On The Range Motel Location - 160 167",
      ],
      images: [
        "/images/quest/17/quest17_map.jpg",
        "/images/quest/17/3236343972_preview_25.jpg",
        "/images/quest/17/3236343972_preview_26.jpg",
      ],
      requirement: "",
    },
    {
      id: 18,
      name: "New Neighbours Intel",
      trader: "Handshake",
      description: " New Neighbours Intel Location - 142 121",
      images: [
        "/images/quest/18/3236343972_preview_27.jpg",
        "/images/quest/18/3236343972_preview_27 2.jpg",
      ],
      requirement: "in the bunker at -1",
    },
    {
      id: 19,
      name: "The Shadow Over Ban Pa I",
      trader: "Handshake",
      description: [
        "The Shadow Over Ban Pa | SOUTHERN - 204 136",
        "The Shadow Over Ban Pa | NORTHERN - 205 138",
      ],
      images: [
        "/images/quest/19/3236343972_preview_32.jpg",
        "/images/quest/19/3236343972_preview_31.jpg",
        "/images/quest/19/3236343972_preview_33.jpg",
        "/images/quest/19/3236343972_preview_34.jpg",
      ],
      requirement: "",
    },
    {
      id: 20,
      name: "The Negotiator",
      trader: "Gunny",
      description: "The Negotiator - 142 121",
      images: [
        "/images/quest/20/3236343972_preview_27.jpg",
        "/images/quest/20/3236343972_preview_100.jpg",
      ],
      requirement: " In the bunker at -2, you need YBL OFFICE 02 KEY",
    },
    {
      id: 21,
      name: "Guns & Ammo",
      trader: "Gunny",
      description: "Guns & Ammo - 159 168",
      images: [
        "/images/quest/21/3236343972_preview_-33.jpg",
        "/images/quest/21/3236343972_preview_P.jpg",
        "/images/quest/21/3236343972_preview_PP.jpg",
        "/images/quest/21/3236343972_preview_OOO.jpg",
      ],
      requirement: "You need HP WEP KEY",
    },
    {
      id: 22,
      name: "True Grit",
      trader: "Handshake",
      description: "Coordinate (160; 167)",
      images: [
        "/images/quest/22/3236343972_preview_-32.jpg",
        "/images/quest/22/3236343972_preview_O.jpg",
        "/images/quest/22/3236343972_preview_OO.jpg",
        "/images/quest/22/3236343972_preview_AAAA.jpg",
      ],
      requirement: "You need Motel 102 Key",
    },
    {
      id: 23,
      name: "It's In The Water I",
      trader: "Lab Rat",
      description:
        "Collect avian tissue samples - Coordinate (205; 136), Collect water samples from a well - Coordinate (205; 137), Collect ground samples from a mound of soil - Coordinate (206; 137)",
      images: [
        "/images/quest/23/3236343972_preview_A.jpg",
        "/images/quest/23/3236343972_preview_105.jpg",
        "/images/quest/23/3236343972_preview_AA.jpg",
        "/images/quest/23/3236343972_preview_106.jpg",
        "/images/quest/23/3236343972_preview_B.jpg",
        "/images/quest/23/3236343972_preview_107.jpg",
      ],
      requirement: "",
    },
    {
      id: 24,
      name: "Uninvited Guests",
      trader: "Turncoat",
      description: "Coordinate (205; 137)",
      images: ["/images/quest/24/3236343972_preview_103.jpg"],
      requirement: "You have to kill 20 bots in Ban Pa",
    },
    {
      id: 25,
      name: "Save The Rebellion",
      trader: "Artisan",
      description:
        "Collect the flash drive at the command tent in the Base Camp, Place the flash drive in the guardhouse",
      images: [
        "/images/quest/25/3236343972_preview_101.jpg",
        "/images/quest/25/3236343972_preview_102.jpg",
        "/images/quest/25/3236343972_preview_104.jpg",
        "/images/quest/25/3236343972_preview_27 2.jpg",
      ],
      requirement: "",
    },
    {
      id: 26,
      name: "Shortcut",
      trader: "Handshake",
      description: "In the bunker at -2 in the debris - Coordinate (142; 121)",
      images: [
        "/images/quest/26/3236343972_preview_image_2024-05-02_161627082.png",
      ],
      requirement: "",
    },
    {
      id: 27,
      name: "Warm Welcome",
      trader: "Turncoat",
      description: "Coordinate (204; 136)",
      images: [
        "/images/quest/27/3236343972_preview_C.jpg",
        "/images/quest/27/3236343972_preview_Warm Welcome.jpg",
      ],
      requirement:
        "You have to kill the boss in town of Ban Pa. The boss spawn seems to be constant at the stilted houses",
    },
    {
      id: 28,
      name: "At The Mounds Of Madness Part.1",
      trader: "Artisan",
      description:
        "Find an ominous mural - Coordinate (205; 135), Find an eerie mural - Coordinate (204; 137), Find a chilling mural - Coordinate (206; 138), Find a disturbing statue - Coordinate (207; 137)",
      images: [
        "/images/quest/28/3236343972_preview_E.jpg",
        "/images/quest/28/3236343972_preview_200.jpg",

        "/images/quest/28/3236343972_preview_DD.jpg",
        "/images/quest/28/3236343972_preview_201.jpg",

        "/images/quest/28/3236343972_preview_204.jpg",
        "/images/quest/28/3236343972_preview_205.jpg",

        "/images/quest/28/3236343972_preview_203.jpg",
        "/images/quest/28/3236343972_preview_202.jpg",
      ],
      requirement: "",
    },
    {
      id: 29,
      name: "At The Mounds Of Madness Part.2",
      trader: "Artisan",
      description: "Coordinate (205; 137)",
      images: [
        "/images/quest/29/3236343972_preview_EE.jpg",
        "/images/quest/29/3236343972_preview_Over Ban Pa II.jpg",
      ],
      requirement: "You have to choose between At The Mounds Of Madness II",
    },
    {
      id: 30,
      name: "The Shadow Over Ban Part.2",
      trader: "Handshake",
      description: "Coordinate (205; 137)",
      images: [
        "/images/quest/30/3236343972_preview_EE (1).jpg",
        "/images/quest/30/3236343972_preview_Over Ban Pa II.jpg",
      ],
      requirement: "You have to choose between The Shadow Over Ban Pa II ",
    },
    {
      id: 31,
      name: "Shooting Gallery",
      trader: "Handshake",
      description: "Coordinate (159; 168)",
      images: ["/images/quest/31/3236343972_preview_F.jpg"],
      requirement: "You have to kill 20 bots at Hunter's Paradise",
    },
    {
      id: 32,
      name: "The Brave",
      trader: "Lab Rat",
      description:
        "Behind the body on post at the ground - Coordinate (159; 168)",
      images: [
        "/images/quest/32/3236343972_preview_FF.jpg",
        "/images/quest/32/3236343972_preview_The Brave.jpg",
      ],
      requirement: "",
    },
    {
      id: 33,
      name: "Up To Snuff",
      trader: "Handshake",
      description:
        "In the building on the desk at the right - Coordinate (160; 168)",
      images: [
        "/images/quest/33/3236343972_preview_G.jpg",
        "/images/quest/33/3236343972_preview_AAA.jpg",
        "/images/quest/33/3236343972_preview_BBB.jpg",
      ],
      requirement: "",
    },
    {
      id: 34,
      name: "Final Liberation",
      trader: "Turncoat",
      description:
        "You have to kill the boss with a blue Bandana in the bunker - Coordinate (142; 121)",
      images: [
        "/images/quest/34/3236343972_preview_27.jpg",
        "/images/quest/34/3236343972_preview_image_2024-05-02_160743246.png",
      ],
      requirement: "",
    },
    {
      id: 35,
      name: "Check Out Computers",
      trader: "Lab Rat",
      description: "In the bunker at -2 / Server room - Coordinate (142; 121)",
      images: [
        "/images/quest/35/3236343972_preview_27 (1).jpg",
        "/images/quest/35/3236343972_preview_image_2024-05-02_161106614.png",
        "/images/quest/35/3236343972_preview_image_2024-05-02_160929195.png",
      ],
      requirement: "",
    },
    {
      id: 36,
      name: "It's In The Water II",
      trader: "Lab Rat",
      description: "Coordinate (205; 137)",
      images: [
        "/images/quest/36/3236343972_preview_EE.jpg",
        "/images/quest/36/3236343972_preview_It's In The Water II.jpg",
      ],
      requirement: "You need ELDER KEY",
    },
    {
      id: 37,
      name: "Out Of The Blue",
      trader: "",
      description: "Coordinate (203; 116)",
      images: [
        "/images/quest/37/3236343972_preview_GG.jpg",
        "/images/quest/37/3236343972_preview_image_2024-05-02_174613925.png",
      ],
      requirement: "",
    },
    {
      id: 38,
      name: "Duty To The Country",
      trader: "Lab Rat",
      description:
        "You are able to drop down through the ventilation-shaft from outside, outside the wall on the western side, there is a small fenced-off area with an open gate where you can drop down into the bunker to get directly into the correct area of the bunker - Coordinate (142; 122)",
      images: [
        "/images/quest/38/3236343972_preview_H.jpg",
        "/images/quest/38/3236343972_preview_HH.jpg",
        "/images/quest/38/3236343972_preview_I.jpg",
        "/images/quest/38/3236343972_preview_image_2024-05-02_135310510.png",
      ],
      requirement: "",
    },
    {
      id: 39,
      name: "Rebel Scum",
      trader: "Handshake",
      description: "You have to kill 20 bots in the bunker - Coordinate (142; 121)",
      images: ["/images/quest/39/3236343972_preview_27.jpg"],
      requirement: "",
    },
    {
      id: 40,
      name: "One Shot One Kill",
      trader: "Handshake",
      description:
        "You have to kill the boss with a Cap and purple tee-shirt at Hunter's Paradise. The boss patrols the area around Shooting-range and Restaurant - Coordinate (159; 168)",
      images: [
        "/images/quest/40/3236343972_preview_II.jpg",
        "/images/quest/40/3236343972_preview_J.jpg",

      ],
      requirement: "",
    },
    {
      id: 41,
      name: "Carnivore",
      trader: "Lab Rat",
      description:
        "The refrigerator in the back of the restaurant bottom left corner. In there look at the 'food' in the top shelf of the fridge - Coordinate (159; 168)",
      images: [
        "/images/quest/41/3236343972_preview_JJ.jpg",
        "/images/quest/41/3236343972_preview_steamuserimages-a.akamaihd5.jpg",
        "/images/quest/41/3236343972_preview_steamuserimages-a.akamaihd6.jpg",
      ],
      requirement: "",
    },
    {
      id: 42,
      name: "The Most Dangerous Game",
      trader: "Artisan",
      description:
        "Ascertain the true nature of the VIP section, Retrieve intel about Hunter's Paradise VIP program - Coordinate (159; 168)",
      images: [
        "/images/quest/42/3236343972_preview_K.jpg",
        "/images/quest/42/3236343972_preview_The Most Dangerous Game.jpg",
        "/images/quest/42/3236343972_preview_L.jpg",
        "/images/quest/42/3236343972_preview_LL.jpg",
      ],
      requirement: "",
    },
    {
      id: 43,
      name: "A Single Drop",
      trader: "Gunny",
      description:
        "Check the first tanker truck - Coordinate (182; 156), Check the second tanker truck - Coordinate (183; 158), Check the third tanker truck - Coordinate (183; 158)",
      images: [
        "/images/quest/43/3236343972_preview_MM.jpg",
        "/images/quest/43/3236343972_preview_N.jpg",
        "/images/quest/43/3236343972_preview_NN.jpg",
      ],
      requirement: "",
    },
    {
      id: 44,
      name: "Living In Burrows",
      trader: "",
      description:
        "In the bunker. Check the state of the water filtration unit, Check the state of the generator - Coordinate (142; 121)",
      images: [
        "/images/quest/44/3236343972_preview_27.jpg",
        "/images/quest/44/3236343972_preview_AAAAA.png",
        "/images/quest/44/3236343972_preview_ABV.png",

      ],
      requirement: "You need YBL-1 GENERATOR ROOM KEY",
    },
    {
      id: 45,
      name: "Manifest Destiny",
      trader: "",
      description: "Find the database on the computer - Coordinate (182; 158)",
      images: [
        "/images/quest/45/3236343972_preview_ABB.jpg",
        "/images/quest/45/3236343972_preview_ABA.jpg",

      ],
      requirement: "",
    },
    {
      id: 46,
      name: "Night Ocean",
      trader: "",
      description:
        "You have to kill the boss in the area - Coordinate (203; 116)",
      images: [
        "/images/quest/46/3236343972_preview_M (1).jpg",

      ],
      requirement: "",
    },
    {
      id: 47,
      name: "Final Checkout",
      trader: "",
      description: "Coordinate (183; 158)",
      images: [
        "/images/quest/47/3236343972_preview_ABC.jpg",

      ],
      requirement: "",
    },
    {
      id: 48,
      name: "What Comes Up",
      trader: "",
      description:
        "Find the black box on the crash plane - Coordinate (192; 152)",
      images: [
        "/images/quest/48/3236343972_preview_ABE.jpg",
        "/images/quest/48/3236343972_preview_ABD.jpg",
      ],
      requirement: "",
    },
    {
      id: 49,
      name: "Too Close to the Sun",
      trader: "",
      description: "Coordinate (192; 152)",
      images: [
        "/images/quest/49/3236343972_preview_ABE (1).jpg",
        "/images/quest/49/3236343972_preview_ABD.jpg",

      ],
      requirement: "",
    },
    {
      id: 50,
      name: "Business Or Pleasure",
      trader: "",
      description:
        "It's a flashdrive on a wooden table with a grey tarp covering it next to a small military laptop - Coordinate (183; 158)",
      images: [
        "/images/quest/50/3236343972_preview_ABF.jpg",

      ],
      requirement: "",
    },
    {
      id: 51,
      name: "Last Flight",
      trader: "",
      description:
        "There's a plane crash and you need to interact with the pilot's body - Coordinate (185; 155)",
      images: [
        "/images/quest/51/3236343972_preview_ABG.jpg",
        "/images/quest/51/3236343972_preview_ABH.jpg",

      ],
      requirement: "",
    },
    {
      id: 52,
      name: "I Went, I Saw, I Conquered I",
      trader: "",
      description: "Coordinate (138; 143)",
      images: [
        "/images/quest/52/3236343972_preview_27 2.jpg",
        "/images/quest/52/3236343972_preview_27 2.jpg",
        "/images/quest/52/3236343972_preview_27 2.jpg",
        "/images/quest/52/3236343972_preview_27 2.jpg",
      ],
      requirement: "",
    },
    {
      id: 53,
      name: "I Went, I Saw, I Conquered II",
      trader: "",
      description:
        "Just move around all the Buildings in the Sawmill and you'll eventually complete the task, make sure to find Keys because there's pretty good loot rooms",
      images: [
        "/images/quest/53/3236343972_preview_27 2.jpg",
        "/images/quest/53/3236343972_preview_27 2.jpg",
        "/images/quest/53/3236343972_preview_27 2.jpg",
        "/images/quest/53/3236343972_preview_27 2.jpg",
      ],
      requirement: "",
    },
    {
      id: 54,
      name: "When a Tree Falls",
      trader: "",
      description: "Coordinate (138; 143)",
      images: [
        "/images/quest/54/3236343972_preview_27 2.jpg",
        "/images/quest/54/3236343972_preview_27 2.jpg",
        "/images/quest/54/3236343972_preview_27 2.jpg",
        "/images/quest/54/3236343972_preview_27 2.jpg",
      ],
      requirement: "",
    },
    {
      id: 55,
      name: "Fuel Shortage",
      trader: "",
      description: "Coordinate (139; 144)",
      images: [
        "/images/quest/55/3236343972_preview_27 2.jpg",
        "/images/quest/55/3236343972_preview_27 2.jpg",
        "/images/quest/55/3236343972_preview_27 2.jpg",
        "/images/quest/55/3236343972_preview_27 2.jpg",
      ],
      requirement: "",
    },
    {
      id: 56,
      name: "I Went, I Saw, I Conquered III",
      trader: "",
      description: "",
      images: [
        "/images/quest/56/3236343972_preview_27 2.jpg",
        "/images/quest/56/3236343972_preview_27 2.jpg",
        "/images/quest/56/3236343972_preview_27 2.jpg",
        "/images/quest/56/3236343972_preview_27 2.jpg",
      ],
      requirement: "",
    },
    {
      id: 57,
      name: "Invaders From Afar",
      trader: "",
      description:
        "Lead location - Coordinate (139; 144), Medic's Note - Coordinate (139; 144)",
      images: [
        "/images/quest/57/3236343972_preview_27 2.jpg",
        "/images/quest/57/3236343972_preview_27 2.jpg",
        "/images/quest/57/3236343972_preview_27 2.jpg",
        "/images/quest/57/3236343972_preview_27 2.jpg",
      ],
      requirement: "",
    },
    {
      id: 58,
      name: "Timber",
      trader: "",
      description:
        "You have to kill the boss. Patrols the north-east/East area of the Sawmill as well as inside the large building in north-east. Can get an angle from the overlook, near LZ Echo 2 during his patrol.",
      images: [
        "/images/quest/58/3236343972_preview_27 2.jpg",
        "/images/quest/58/3236343972_preview_27 2.jpg",
        "/images/quest/58/3236343972_preview_27 2.jpg",
        "/images/quest/58/3236343972_preview_27 2.jpg",
      ],
      requirement: "",
    },
    {
      id: 59,
      name: "EOD",
      trader: "",
      description: "Inside offices, Need SM OFC key - Coordinate (139; 144)",
      images: [
        "/images/quest/59/3236343972_preview_27 2.jpg",
        "/images/quest/59/3236343972_preview_27 2.jpg",
        "/images/quest/59/3236343972_preview_27 2.jpg",
        "/images/quest/59/3236343972_preview_27 2.jpg",
      ],
      requirement: "",
    },
    {
      id: 60,
      name: "Forth Narith Stroll",
      trader: "",
      description:
        "Airfield - Coordinate (141; 126), Fuel Supply - Coordinate (146; 127), Main - Coordinate (145; 130), Barracks - Coordinate (143; 131)",
      images: [
        "/images/quest/60/3236343972_preview_27 2.jpg",
        "/images/quest/60/3236343972_preview_27 2.jpg",
        "/images/quest/60/3236343972_preview_27 2.jpg",
        "/images/quest/60/3236343972_preview_27 2.jpg",
      ],
      requirement: "",
    },
    {
      id: 61,
      name: "Missing Colleague I",
      trader: "",
      description: "Coordinate (145; 129)",
      images: [
        "/images/quest/61/3236343972_preview_27 2.jpg",
        "/images/quest/61/3236343972_preview_27 2.jpg",
        "/images/quest/61/3236343972_preview_27 2.jpg",
        "/images/quest/61/3236343972_preview_27 2.jpg",
      ],
      requirement: "",
    },
    {
      id: 62,
      name: "Evacuation Question",
      trader: "",
      description: "Room A 112 - Coordinate (141; 131)",
      images: [
        "/images/quest/62/3236343972_preview_27 2.jpg",
        "/images/quest/62/3236343972_preview_27 2.jpg",
        "/images/quest/62/3236343972_preview_27 2.jpg",
        "/images/quest/62/3236343972_preview_27 2.jpg",
      ],
      requirement: "",
    },
    {
      id: 63,
      name: "Missing Colleague II",
      trader: "",
      description: "Coordinate (143; 129)",
      images: [
        "/images/quest/63/3236343972_preview_27 2.jpg",
        "/images/quest/63/3236343972_preview_27 2.jpg",
        "/images/quest/63/3236343972_preview_27 2.jpg",
        "/images/quest/63/3236343972_preview_27 2.jpg",
      ],
      requirement: "",
    },
    {
      id: 64,
      name: "Neighbourly Help",
      trader: "",
      description: "Gauge 1, Gauge 2 - Coordinate (145; 126)",
      images: [
        "/images/quest/64/3236343972_preview_27 2.jpg",
        "/images/quest/64/3236343972_preview_27 2.jpg",
        "/images/quest/64/3236343972_preview_27 2.jpg",
        "/images/quest/64/3236343972_preview_27 2.jpg",
      ],
      requirement: "",
    },
    {
      id: 65,
      name: "Line In The Sand",
      trader: "",
      description:
        "Coordinate (205; 137), Line In The Sand Pier - Coordinate (206; 137)",
      images: [
        "/images/quest/65/3236343972_preview_27 2.jpg",
        "/images/quest/65/3236343972_preview_27 2.jpg",
        "/images/quest/65/3236343972_preview_27 2.jpg",
        "/images/quest/65/3236343972_preview_27 2.jpg",
      ],
      requirement: "",
    },
  ],
  specific: {
    crimson: [
      {
        id: 1,
        name: "First Recon",
        trader: "Handshake",
        description: [
          "Demolished Building Coordinate (141; 165) ",
          "Convenience Store Coordinate (141; 162) ",
          "Gas Station Coordinate (144; 161)",
        ],
        images: [
          "/images/quest/crimson/quest1/First Recon Demolished Building Location.jpg",
          "/images/quest/crimson/quest1/ConvenienceStore.jpg",
          "/images/quest/crimson/quest1/First Recon Convenience Store Location.jpg",
          "/images/quest/crimson/quest1/First Recon Gas Station Location - 144 161.jpg",
        ],
        requirement: "",
      },
      {
        id: 2,
        name: "Cache Retrieval",
        trader: "Gunny",
        description: [
          "Find and mark with a tracker the cache.",
          "First of the Town's Warehouse Coordinate (140; 163)",
          "Second is in the Shed at the town's lumberyard Coordinate (141; 161)",
        ],
        images: [
          "/images/quest/crimson/quest2/Cache Retrieval Warehouse Location - 140 163.jpg",
          "/images/quest/crimson/quest2/Cache Retrieval Lumber Yard Location - 141 161.jpg",
          "/images/quest/crimson/quest2/Cache Retrieval Lumber Yard Location 2 - 141 161.jpg",
        ],
        requirement:
          "Tracker given by Gunny. If you have lost it, you can buy another from Gunny.",
      },
      {
        id: 3,
        name: "Meds Wanted Medical Supplies",
        trader: "Lab Rat",
        description: [
          "Meds Wanted Medical Supplies at Coordinate (140; 161) near the water tower by the lumberyard.",
        ],
        images: [
          "/images/quest/crimson/quest3/quest3map.jpg",
          "/images/quest/crimson/quest3/3236343972_preview_Capture.jpg",
          "/images/quest/crimson/quest3/3236343972_preview_5 - Meds Wanted Medical Supplies  - 140 161.jpg",
        ],
        requirement: "",
      },
      {
        id: 4,
        name: "Little Bird Down",
        trader: "Handshake",
        description: [
          "Little Bird Down Crashed Heli Coordinate (145; 159)",
          "Little Bird Down Crew Coordinate (145; 160)",
        ],
        images: [
          "/images/quest/crimson/quest4/3236343972_preview_7.jpg",
          "/images/quest/crimson/quest4/3236343972_preview_7 - Little Bird Down Crew Location - 145 160.jpg",
        ],
        requirement: "",
      },
      {
        id: 5,
        name: "Leave No Man Behind Body",
        trader: "Gunny",
        description: ["Leave No Man Behind Body Coordinate (143; 163)"],
        images: [
          "/images/quest/crimson/quest5/3236343972_preview_8 - Leave No Man Behind Body Location - 143 163.jpg",
        ],
        requirement: "",
      },
      {
        id: 6,
        name: "Lost and Found Kanoa Sinarath",
        trader: "Lab Rat",
        description: [
          "Lost and Found Kanoa Sinarath Coordinate (141; 161)",
          "Take the document",
        ],
        images: [
          "/images/quest/crimson/quest6/3236343972_preview_9bis - Lost and Found Kanoa Sinarath Location - 141 161.jpg",
          "/images/quest/crimson/quest6/3236343972_preview_9 - Lost and Found Kanoa Sinarath Location - 143 163.jpg",
        ],
        requirement: "",
      },
      {
        id: 7,
        name: "Medical Detective",
        trader: "Gunny",
        description: ["Medical Detective Coordinate (141; 166)"],
        images: [
          "/images/quest/crimson/quest7/3236343972_preview_11.jpg",
          "/images/quest/crimson/quest7/3236343972_preview_10bis - Medical Detective Location - 141 166.jpg",
          "/images/quest/crimson/quest7/3236343972_preview_10 - Medical Detective Location - 141 166.jpg",
          "/images/quest/crimson/quest7/Capture.png",
        ],
        requirement: "You need a KV Doc Key",
      },
      {
        id: 8,
        name: "Rats Nest Hideout",
        trader: "Handshake",
        description: [
          "Rats Nest Hideout Coordinate SouthEast (143; 162)",
          "Take the Notepad",
          "Rats Nest Hideout Coordinate SouthWest (140; 162)",
          "Take the smartphone",
        ],
        images: [
          "/images/quest/crimson/quest8/3236343972_preview_12.jpg",
          "/images/quest/crimson/quest8/3236343972_preview_11 - Rats Nest Hideout Location SouthEast- 143 162.jpg",
          "/images/quest/crimson/quest8/3236343972_preview_12bis - Rats Nest Hideout Location SouthWest - 140 162.jpg",
          "/images/quest/crimson/quest8/3236343972_preview_12 - Rats Nest Hideout Location SouthWest - 140 162.jpg",
        ],
        requirement: "",
      },
      {
        id: 9,
        name: "Secret Compassion",
        trader: "Lab Rat",
        description: [
          "Secret Compassion Coordinate East (146; 162)",
          "Place the supplies in the box",
          "Secret Compassion Coordinate SouthWest (140; 160)",
          "Place the supplies in the box",
          "Secret Compassion Coordinate West (139; 162)",
          "Place the supplies in the box",
        ],
        images: [
          "/images/quest/crimson/quest9/3236343972_preview_14.jpg",
          "/images/quest/crimson/quest9/3236343972_preview_13 - Secret Compassion Location East - 145 162.jpg",
          "/images/quest/crimson/quest9/3236343972_preview_15.jpg",
          "/images/quest/crimson/quest9/3236343972_preview_15 bis- Secret Compassion Location West - 140 160.jpg",
          "/images/quest/crimson/quest9/3236343972_preview_16.jpg",
          "/images/quest/crimson/quest9/3236343972_preview_16 - Secret Compassion Location West - 139 162.jpg",
        ],
        requirement:
          "Supplies given by Lab Rat. If you have lost them, you can buy them at Lab Rat",
      },
      {
        id: 10,
        name: "Native Negotiations",
        trader: "Lab Rat",
        description: [
          "Native Negotiations Briefcase Pickup",
          "Native Negotiations Briefcase Drop Coordinate (141; 164)",
          "Place Briefcase",
        ],
        images: [
          "/images/quest/crimson/quest10/3236343972_preview_17 - Native Negotiations Briefcase Pickup (In The Base Camp).jpg",
          "/images/quest/crimson/quest10/3236343972_preview_17 - Native Negotiations - 141 164.jpg",
          "/images/quest/crimson/quest10/3236343972_preview_17bis - Native Negotiations - 141 164.jpg",
        ],
        requirement:
          "Native Negotiations Briefcase Pickup - At The Command Tent In The Base Camp",
      },
      {
        id: 11,
        name: "Helping Hand",
        trader: "Handshake",
        description: [
          "Helping Hand Coordinate (141; 164)",
          "Take Intel Folder",
        ],
        images: [
          "/images/quest/crimson/quest11/3236343972_preview_18.jpg",
          "/images/quest/crimson/quest11/3236343972_preview_18 - Helping Hand Location - 141 164.jpg",
          "/images/quest/crimson/quest11/Capture.jpg",
        ],
        requirement: "You need a KV ATTIC Key",
      },
      {
        id: 12,
        name: "Tools of the Trade",
        trader: "Artisan",
        description: [
          "Tools of the Trade Coordinate (141; 163)",
          "Near Construction site",
          "Take Toolbox",
        ],
        images: [
          "/images/quest/crimson/quest12/3236343972_preview_19 - Tools of the Trade Location - 141 163.jpg",
        ],
        requirement: "",
      },
      {
        id: 13,
        name: "Radio Silence",
        trader: "Handshake",
        description: [
          "Radio Silence Coordinate (140; 164)",
          "Sabotage the radio",
          "Gas Station Coordinate (144; 161)",
        ],
        images: [
          "/images/quest/crimson/quest13/3236343972_preview_20.jpg",
          "/images/quest/crimson/quest13/3236343972_preview_20bis - Radio Silence Location - 140 164.jpg",
        ],
        requirement: "",
      },
      {
        id: 14,
        name: "Left Behind & Last Farewell Body",
        trader: "Gunny",
        description: [
          "Left Behind & Last Farewell Body Coordinate (147; 162)",
          "Place tracker",
          "Gas Station Coordinate (144; 161)",
        ],
        images: [
          "/images/quest/crimson/quest14/3236343972_preview_21 2.jpg",
          "/images/quest/crimson/quest14/3236343972_preview_21.jpg",
        ],
        requirement: "Tracker given by Gunny",
      },
      {
        id: 15,
        name: "First Hit Criminal Leader",
        trader: "Handshake",
        description: [
          "First Hit Criminal Leader Coordinate (141; 162)",
          "Kill the boss at MarketPlace (red beret)",
        ],
        images: [
          "/images/quest/crimson/quest15/3236343972_preview_22.jpg",
          "/images/quest/crimson/quest15/3236343972_preview_35.jpg",
        ],
        requirement: "",
      },
      {
        id: 16,
        name: "Reclamation + Covert Research",
        trader: "Lab Rat",
        description: [
          "Reclamation + Covert Research Coordinate (142; 165)",
          "Take container near bed",
        ],
        images: [
          "/images/quest/crimson/quest16/3236343972_preview_23.jpg",
          "/images/quest/crimson/quest16/3236343972_preview_23 2.jpg",
        ],
        requirement:
          "Choose whether to bring the quest to Handshake or Lab Rat",
      },
    ],
    lamang: [
      {
        id: 1,
        name: "First Recon Lamang",
        trader: "Handshake",
        description: [
          "Demolished Building Coordinate (141, 165)",
          "Convenience Store Coordinate (141, 162)",
          "Gas Station Coordinate (144, 161)",
        ],
        images: [
          "/images/quest/lamang/quest1/First_recon_-_MSS_map.webp",
          "/images/quest/lamang/quest1/ConvenienceStore.jpg",
          "/images/quest/lamang/quest1/First Recon Convenience Store Location.jpg",
          "/images/quest/lamang/quest1/First Recon Gas Station Location - 144 161.jpg",
        ],
        requirement: "",
      },
      {
        id: 2,
        name: "Cache Retrieval Lamang",
        trader: "Gunny",
        description: [
          "Find and mark the cache with a tracker.",
          "First warehouse Coordinate (140, 163)",
          "Shed at the town's lumberyard Coordinate (141, 161)",
        ],
        images: [
          "/images/quest/lamang/quest2/Cache Retrieval Warehouse Location - 140 163.jpg",
          "/images/quest/lamang/quest2/Cache Retrieval Lumber Yard Location - 141 161.jpg",
          "/images/quest/lamang/quest2/Cache Retrieval Lumber Yard Location 2 - 141 161.jpg",
        ],
        requirement:
          "Tracker provided by Gunny. If lost, it can be purchased from Gunny.",
      },
      {
        id: 3,
        name: "Meds Wanted Medical Supplies Lamang",
        trader: "Lab Rat",
        description: [
          "Meds Wanted Medical Supplies Coordinate (140, 161) near the water tower by the lumberyard.",
        ],
        images: [
          "/images/quest/lamang/quest3/quest3map.jpg",
          "/images/quest/lamang/quest3/3236343972_preview_Capture.jpg",
          "/images/quest/lamang/quest3/3236343972_preview_5 - Meds Wanted Medical Supplies - 140 161.jpg",
        ],
        requirement: "",
      },
      {
        id: 4,
        name: "Little Bird Down Lamang",
        trader: "Handshake",
        description: [
          "Crashed helicopter Coordinate (145, 159)",
          "Crew location Coordinate (145, 160)",
        ],
        images: [
          "/images/quest/lamang/quest4/3236343972_preview_7.jpg",
          "/images/quest/lamang/quest4/3236343972_preview_7 - Little Bird Down Crew Location - 145 160.jpg",
        ],
        requirement: "",
      },
      {
        id: 5,
        name: "Leave No Man Behind Body Lamang",
        trader: "Gunny",
        description: ["Body location Coordinate (143, 163)"],
        images: [
          "/images/quest/lamang/quest5/3236343972_preview_8 - Leave No Man Behind Body Location - 143 163.jpg",
        ],
        requirement: "",
      },
      {
        id: 6,
        name: "Lost and Found Kanoa Sinarath Lamang",
        trader: "Lab Rat",
        description: [
          "Lost and Found Kanoa Sinarath Coordinate (141, 161)",
          "Take the document",
        ],
        images: [
          "/images/quest/lamang/quest6/3236343972_preview_9bis - Lost and Found Kanoa Sinarath Location - 141 161.jpg",
          "/images/quest/lamang/quest6/3236343972_preview_9 - Lost and Found Kanoa Sinarath Location - 143 163.jpg",
        ],
        requirement: "",
      },
      {
        id: 7,
        name: "Medical Detective Lamang",
        trader: "Gunny",
        description: [
          "Medical Detective Coordinate (141, 166)",
          "Take the diary on the desk",
          "Gas Station Coordinate (144, 161)",
        ],
        images: [
          "/images/quest/lamang/quest7/3236343972_preview_11.jpg",
          "/images/quest/lamang/quest7/3236343972_preview_10bis - Medical Detective Location - 141 166.jpg",
          "/images/quest/lamang/quest7/3236343972_preview_10 - Medical Detective Location - 141 166.jpg",
          "/images/quest/lamang/quest7/Capture.png",
        ],
        requirement: "You need a PH Doc Key",
      },
      {
        id: 8,
        name: "Rats Nest Hideout Lamang",
        trader: "Handshake",
        description: [
          "Rats Nest Hideout Coordinate SouthEast - 143, 162",
          "Take the notepad",
          "Rats Nest Hideout Coordinate SouthWest - 140, 162",
          "Take the smartphone",
        ],
        images: [
          "/images/quest/lamang/quest8/3236343972_preview_12.jpg",
          "/images/quest/lamang/quest8/3236343972_preview_11 - Rats Nest Hideout Location SouthEast- 143 162.jpg",
          "/images/quest/lamang/quest8/3236343972_preview_12bis - Rats Nest Hideout Location SouthWest - 140 162.jpg",
          "/images/quest/lamang/quest8/3236343972_preview_12 - Rats Nest Hideout Location SouthWest - 140 162.jpg",
        ],
        requirement: "",
      },
      {
        id: 9,
        name: "Secret Compassion Lamang",
        trader: "Lab Rat",
        description: [
          "Secret Compassion Coordinate East - 146, 162",
          "Place the supplies in the box",
          "Secret Compassion Coordinate SouthWest - 140, 160",
          "Place the supplies in the box",
          "Secret Compassion Coordinate West - 139, 162",
          "Place the supplies in the box",
        ],
        images: [
          "/images/quest/lamang/quest9/3236343972_preview_14.jpg",
          "/images/quest/lamang/quest9/3236343972_preview_13 - Secret Compassion Location East - 145 162.jpg",
          "/images/quest/lamang/quest9/3236343972_preview_15.jpg",
          "/images/quest/lamang/quest9/3236343972_preview_15 bis- Secret Compassion Location West - 140 160.jpg",
          "/images/quest/lamang/quest9/3236343972_preview_16.jpg",
          "/images/quest/lamang/quest9/3236343972_preview_16 - Secret Compassion Location West - 139 162.jpg",
        ],
        requirement:
          "Supplies given by Lab Rat. If you have lost them, you can buy them at Lab Rat",
      },
      {
        id: 10,
        name: "Native Negotiations Lamang",
        trader: "Lab Rat",
        description: [
          "Native Negotiations Briefcase Pickup",
          "Native Negotiations Briefcase Drop - Coordinate (141, 164)",
          "Place the briefcase",
        ],
        images: [
          "/images/quest/lamang/quest10/3236343972_preview_17 - Native Negotiations Briefcase Pickup (In The Base Camp) -.jpg",
          "/images/quest/lamang/quest10/3236343972_preview_17 - Native Negotiations - 141 164.jpg",
          "/images/quest/lamang/quest10/3236343972_preview_17bis - Native Negotiations - 141 164.jpg",
        ],
        requirement:
          "Native Negotiations Briefcase Pickup - At The Command Tent In The Base Camp",
      },
      {
        id: 11,
        name: "Helping Hand Lamang",
        trader: "Handshake",
        description: [
          "Helping Hand Coordinate (141, 164)",
          "Take the intel folder",
        ],
        images: [
          "/images/quest/lamang/quest11/3236343972_preview_18.jpg",
          "/images/quest/lamang/quest11/3236343972_preview_18 - Helping Hand Location - 141 164.jpg",
          "/images/quest/lamang/quest11/Capture.jpg",
        ],
        requirement: "You need a PH ATTIC Key",
      },
      {
        id: 12,
        name: "Tools of the Trade Lamang",
        trader: "Artisan",
        description: [
          "Tools of the Trade Coordinate (141, 163)",
          "Near Construction site",
          "Take the toolbox",
        ],
        images: [
          "/images/quest/lamang/quest12/3236343972_preview_19 - Tools of the Trade Location - 141 163.jpg",
        ],
        requirement: "",
      },
      {
        id: 12,
        name: "Tools of the Trade Lamang",
        trader: "Artisan",
        description: [
          "Tools of the Trade Coordinate (141, 163)",
          "Near the construction site",
          "Take the toolbox",
        ],
        images: [
          "/images/quest/lamang/quest12/3236343972_preview_19 - Tools of the Trade Location - 141 163.jpg",
        ],
        requirement: "",
      },
      {
        id: 13,
        name: "Radio Silence Lamang",
        trader: "Handshake",
        description: [
          "Radio Silence Coordinate (140, 164)",
          "Sabotage the radio",
          "Gas Station Coordinate (144, 161)",
        ],
        images: [
          "/images/quest/lamang/quest13/3236343972_preview_20.jpg",
          "/images/quest/lamang/quest13/3236343972_preview_20bis - Radio Silence Location - 140 164.jpg",
        ],
        requirement: "",
      },
      {
        id: 14,
        name: "Left Behind & Last Farewell Body Lamang",
        trader: "Gunny",
        description: [
          "Left Behind & Last Farewell Body Coordinate (147, 162)",
          "Place tracker",
          "Gas Station Coordinate (144, 161)",
        ],
        images: [
          "/images/quest/lamang/quest14/3236343972_preview_21 2.jpg",
          "/images/quest/lamang/quest14/3236343972_preview_21.jpg",
        ],
        requirement: "Tracker given by Gunny",
      },
      {
        id: 15,
        name: "First Hit Criminal Leader Lamang",
        trader: "Handshake",
        description: [
          "First Hit Criminal Leader Location - Coordinate (141, 162)",
          "Kill the boss (red beret)",
        ],
        images: [
          "/images/quest/lamang/quest15/3236343972_preview_22",
          "/images/quest/lamang/quest15/3236343972_preview_35",
        ],
        requirement: "",
      },
      {
        id: 16,
        name: "Reclamation + Covert Research Lamang",
        trader: "Lab Rat",
        description: [
          "Reclamation + Covert Research Location - Coordinate (142, 165)",
          "Take the container near the bed",
        ],
        images: [
          "/images/quest/lamang/quest16/3236343972_preview_23",
          "/images/quest/lamang/quest16/3236343972_preview_23 2",
        ],
        requirement: "Choose if you bring the quest to Handshake or Lab Rat",
      },
    ],
    mithras: [
      {
        id: 1,
        name: "First Recon Mithras",
        trader: "Handshake",
        description: [
          "Demolished Building Coordinate (141, 165)",
          "Convenience Store Coordinate (141, 162)",
          "Gas Station Coordinate (144, 161)",
        ],
        images: [
          "/images/quest/mithras/quest1/First Recon Demolished Building Location.jpg",
          "/images/quest/mithras/quest1/ConvenienceStore.jpg",
          "/images/quest/mithras/quest1/First Recon Convenience Store Location.jpg",
          "/images/quest/mithras/quest1/First Recon Gas Station Location - 144 161.jpg",
        ],
        requirement: "",
      },
      {
        id: 2,
        name: "Cache Retrieval Mithras",
        trader: "Gunny",
        description: [
          "Find and mark the cache with a tracker.",
          "First warehouse Coordinate (140, 163)",
          "Shed at the town's lumberyard Coordinate (141, 161)",
        ],
        images: [
          "/images/quest/mithras/quest2/Cache Retrieval Warehouse Location - 140 163.jpg",
          "/images/quest/mithras/quest2/Cache Retrieval Lumber Yard Location - 141 161.jpg",
          "/images/quest/mithras/quest2/Cache Retrieval Lumber Yard Location 2 - 141 161.jpg",
        ],
        requirement:
          "Tracker provided by Gunny. If lost, it can be purchased from Gunny.",
      },
      {
        id: 3,
        name: "Meds Wanted Medical Supplies Mithras",
        trader: "Lab Rat",
        description: [
          "Meds Wanted Medical Supplies Coordinate (140, 161) near the water tower by the lumberyard.",
        ],
        images: [
          "/images/quest/mithras/quest3/quest3map.jpg",
          "/images/quest/mithras/quest3/3236343972_preview_Capture.jpg",
          "/images/quest/mithras/quest3/3236343972_preview_5 - Meds Wanted Medical Supplies - 140 161.jpg",
        ],
        requirement: "",
      },
      {
        id: 4,
        name: "Little Bird Down Mithras",
        trader: "Handshake",
        description: [
          "Crashed helicopter Coordinate (145, 159)",
          "Crew location Coordinate (145, 160)",
        ],
        images: [
          "/images/quest/mithras/quest4/3236343972_preview_7.jpg",
          "/images/quest/mithras/quest4/3236343972_preview_7 - Little Bird Down Crew Location - 145 160.jpg",
        ],
        requirement: "",
      },
      {
        id: 5,
        name: "Leave No Man Behind Body Mithras",
        trader: "Gunny",
        description: ["Body location Coordinate (143, 163)"],
        images: [
          "/images/quest/mithras/quest5/3236343972_preview_8 - Leave No Man Behind Body Location - 143 163.jpg",
        ],
        requirement: "",
      },
      {
        id: 6,
        name: "Lost and Found Kanoa Sinarath Mithras",
        trader: "Lab Rat",
        description: [
          "Lost and Found Kanoa Sinarath Coordinate (141, 161)",
          "Take the document",
        ],
        images: [
          "/images/quest/mithras/quest6/3236343972_preview_9bis - Lost and Found Kanoa Sinarath Location - 141 161.jpg",
          "/images/quest/mithras/quest6/3236343972_preview_9 - Lost and Found Kanoa Sinarath Location - 143 163.jpg",
        ],
        requirement: "",
      },
      {
        id: 7,
        name: "Medical Detective Mithras",
        trader: "Gunny",
        description: [
          "Medical Detective Coordinate (141, 166)",
          "Take the diary on the desk",
          "Gas Station Coordinate (144, 161)",
        ],
        images: [
          "/images/quest/mithras/quest7/3236343972_preview_11.jpg",
          "/images/quest/mithras/quest7/3236343972_preview_10bis - Medical Detective Location - 141 166.jpg",
          "/images/quest/mithras/quest7/3236343972_preview_10 - Medical Detective Location - 141 166.jpg",
          "/images/quest/mithras/quest7/Capture.png",
        ],
        requirement: "You need a KV Doc Key",
      },
      {
        id: 8,
        name: "Rats Nest Hideout Mithras",
        trader: "Handshake",
        description: [
          "Rats Nest Hideout Coordinate SouthEast - 143, 162",
          "Take the notepad",
          "Rats Nest Hideout Coordinate SouthWest - 140, 162",
          "Take the smartphone",
        ],
        images: [
          "/images/quest/mithras/quest8/3236343972_preview_12.jpg",
          "/images/quest/mithras/quest8/3236343972_preview_11 - Rats Nest Hideout Location SouthEast- 143 162.jpg",
          "/images/quest/mithras/quest8/3236343972_preview_12bis - Rats Nest Hideout Location SouthWest - 140 162.jpg",
          "/images/quest/mithras/quest8/3236343972_preview_12 - Rats Nest Hideout Location SouthWest - 140 162.jpg",
        ],
        requirement: "",
      },
      {
        id: 9,
        name: "Secret Compassion Mithras",
        trader: "Lab Rat",
        description: [
          "Secret Compassion Coordinate East - 146, 162",
          "Place the supplies in the box",
          "Secret Compassion Coordinate SouthWest - 140, 160",
          "Place the supplies in the box",
          "Secret Compassion Coordinate West - 139, 162",
          "Place the supplies in the box",
        ],
        images: [
          "/images/quest/mithras/quest9/3236343972_preview_14.jpg",
          "/images/quest/mithras/quest9/3236343972_preview_13 - Secret Compassion Location East - 145 162.jpg",
          "/images/quest/mithras/quest9/3236343972_preview_15.jpg",
          "/images/quest/mithras/quest9/3236343972_preview_15 bis- Secret Compassion Location West - 140 160.jpg",
          "/images/quest/mithras/quest9/3236343972_preview_16.jpg",
          "/images/quest/mithras/quest9/3236343972_preview_16 - Secret Compassion Location West - 139 162.jpg",
        ],
        requirement:
          "Supplies given by Lab Rat. If you have lost them, you can buy them at Lab Rat",
      },
      {
        id: 10,
        name: "Native Negotiations Mithras",
        trader: "Lab Rat",
        description: [
          "Native Negotiations Briefcase Pickup",
          "Native Negotiations Briefcase Drop - Coordinate (141, 164)",
          "Place the briefcase",
        ],
        images: [
          "/images/quest/mithras/quest10/3236343972_preview_17 - Native Negotiations Briefcase Pickup (In The Base Camp) -.jpg",
          "/images/quest/mithras/quest10/3236343972_preview_17 - Native Negotiations - 141 164.jpg",
          "/images/quest/mithras/quest10/3236343972_preview_17bis - Native Negotiations - 141 164.jpg",
        ],
        requirement:
          "Native Negotiations Briefcase Pickup - At The Command Tent In The Base Camp",
      },
      {
        id: 11,
        name: "Helping Hand Mithras",
        trader: "Handshake",
        description: [
          "Helping Hand Coordinate (141, 164)",
          "Take the intel folder",
        ],
        images: [
          "/images/quest/mithras/quest11/3236343972_preview_18.jpg",
          "/images/quest/mithras/quest11/3236343972_preview_18 - Helping Hand Location - 141 164.jpg",
          "/images/quest/mithras/quest11/Capture.jpg",
        ],
        requirement: "You need a KV ATTIC Key",
      },
      {
        id: 12,
        name: "Tools of the Trade Mithras",
        trader: "Artisan",
        description: [
          "Tools of the Trade Coordinate (141, 163)",
          "Near the construction site",
          "Take the toolbox",
        ],
        images: [
          "/images/quest/mithras/quest12/3236343972_preview_19 - Tools of the Trade Location - 141 163.jpg",
        ],
        requirement: "",
      },
      {
        id: 12,
        name: "Tools of the Trade Mithras",
        trader: "Artisan",
        description: [
          "Tools of the Trade Coordinate (141, 163)",
          "Near the construction site",
          "Take the toolbox",
        ],
        images: [
          "/images/quest/mithras/quest12/3236343972_preview_19 - Tools of the Trade Location - 141 163.jpg",
        ],
        requirement: "",
      },
      {
        id: 13,
        name: "Radio Silence Mithras",
        trader: "Handshake",
        description: [
          "Radio Silence Coordinate (140, 164)",
          "Sabotage the radio",
          "Gas Station Coordinate (144, 161)",
        ],
        images: [
          "/images/quest/mithras/quest13/3236343972_preview_20.jpg",
          "/images/quest/mithras/quest13/3236343972_preview_20bis - Radio Silence Location - 140 164.jpg",
        ],
        requirement: "",
      },
      {
        id: 14,
        name: "Left Behind & Last Farewell Body Mithras",
        trader: "Gunny",
        description: [
          "Left Behind & Last Farewell Body Coordinate (147, 162)",
          "Place tracker",
          "Gas Station Coordinate (144, 161)",
        ],
        images: [
          "/images/quest/mithras/quest14/3236343972_preview_21 2.jpg",
          "/images/quest/mithras/quest14/3236343972_preview_21.jpg",
        ],
        requirement: "Tracker given by Gunny",
      },
      {
        id: 15,
        name: "First Hit Criminal Leader Mithras",
        trader: "Handshake",
        description: [
          "First Hit Criminal Leader Location - Coordinate (141, 162)",
          "Kill the boss (red beret)",
        ],
        images: [
          "/images/quest/mithras/quest15/3236343972_preview_22.jpg",
          "/images/quest/mithras/quest15/3236343972_preview_35.jpg",
        ],
        requirement: "",
      },
      {
        id: 16,
        name: "Reclamation + Covert Research Mithras",
        trader: "Lab Rat",
        description: [
          "Reclamation + Covert Research Location - Coordinate (142, 165)",
          "Take the container near the bed",
        ],
        images: [
          "/images/quest/mithras/quest16/3236343972_preview_23.jpg",
          "/images/quest/mithras/quest16/3236343972_preview_23 2.jpg",
        ],
        requirement: "Choose if you bring the quest to Handshake or Lab Rat",
      },
    ],
  },
};

export default quests;
