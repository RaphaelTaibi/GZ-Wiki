const quests = {
  common: [
    {
      id: 17,
      name: "Quest 17",
      trader: "Gunny",
      description: "Description 17",
      images: ["/images/quest/17/quest17_map.jpg"],
    },
    { id: 18, name: "Quest 18", description: "Description 18", images: [""] },
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
        description: [
          "Medical Detective Coordinate (141; 166)",
         
        ],
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
