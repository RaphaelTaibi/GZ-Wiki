// src/data/quests.js
const quests = {
    common: [
      { id: 17, name: "Quest 17", description: "Description 17", images: ["/images/quest/quest17_map.jpg"] },
      { id: 18, name: "Quest 18", description: "Description 18", images: [""] },
      // Ajoutez d'autres quêtes ici
    ],
    specific: {
      crimson: [
        {
          id: 1, 
          name: "First Recon Crimson ", 
          trader: "Handshake",
          description: "First Recon Demolished Building Location - 141 165  First Recon Convenience Store Location - 141 162 First Recon Gas Station Location - 144 161",
          images: [
            "/images/quest/crimson/First Recon Demolished Building Location.jpg",
            "/images/quest/crimson/ConvenienceStore.jpg",
            "/images/quest/crimson/First Recon Convenience Store Location.jpg",
            "/images/quest/crimson/First Recon Gas Station Location - 144 161.jpg"
          ]
        },
        // Ajoutez d'autres quêtes spécifiques à Crimson ici
      ],
      lamang: [
        { id: 1, name: "First Recon Lamang ", description: "Description 1", images: [""] },
        // Ajoutez d'autres quêtes spécifiques à Lamang ici
      ],
      mithras: [
        { id: 1, name: "First Recon Mithras", description: "Description 1", images: [""] },
        // Ajoutez d'autres quêtes spécifiques à Mithras ici
      ]
    }
};

export default quests;
