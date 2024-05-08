const factions = {
  crimson: {
    name: "Crimson Shield International",
    description:
      "This Private Military Company rose to infamy during the early stages of the Syrian civil war. While they boast an impressive 95 percent success rate, some of their methods can be seen as somewhat questionable, often resulting in collateral damage. That said, no one can deny their effectiveness and cold-blooded approach to any job that needs to be done. This gung-ho nature attracts not just ex-military personnel but basically anyone with a lust for adventure and action. However, thanks to their strict elimination process, only the truly exceptional soldiers ever make it as far to be deployed on an actual",

    important: "!! Task are same Location for ALL FACTION !!",
  },
  lamang: {
    name: "Lamang Recovery Initiative",
    description:
      "Founded and funded by a tech billionaire, LRI publicizes itself as a strictly philanthropic exercise to search for pockets of survivors in and around Ground Zero after even the UN abandoned the island. The armed section of the organization is composed of small, highly professional security details that accompany rescue and clean-up teams to protect them from some of the other, far less altruistic, factions operating in the area.",

    important: "!! Task are same Location for ALL FACTION !!",
  },
  mithras: {
    name: "Mithras Security Systems",
    description:
      "Mithras bills itself as a PMC run by soldiers for soldiers, and it doesn’t ask too many questions about an operator’s motivations or past history. The only real bar to Mithras membership is a lack of field experience of military competence. It prides itself on only accepting the best and pays accordingly. The organization is inspired by the Roman Legion system, where the spoils of war were shared among the troops. From the highest-ranking officer to the lowest-ranking foot soldier according to their status within the unit and performance in the field.",

    important: "!! Task are same Location for ALL FACTION !!",
  },
};

export function getFactionData(factionId) {
  return factions[factionId.toLowerCase()];
}

