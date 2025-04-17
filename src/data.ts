export interface Ability {
    name: string;
    type: 'level' | 'upgraded';
    upgradeType?: 'Shard' | 'Scepter' | 'Facet';
    facetName?: string;
}

export interface Hero {
    name: string;
    abilities: Ability[];
    attribute: 'strength' | 'agility' | 'intelligence' | 'universal';
}

export const heroes: Hero[] = [
    {
        "name": "Axe",
        "abilities": [
            {
                "name": "Counter Helix",
                "type": "upgraded",
                "upgradeType": "Scepter"
            },
            {
                "name": "Berserker's Call",
                "type": "level",
                "upgradeType": "Facet",
                "facetName": "Call Out"
            }
        ],
        "attribute": "strength"
    },
    {
        "name": "Bristeleback",
        "abilities": [
            {
                "name": "Viscous Nasal Goo",
                "type": "level",
                "upgradeType": "Facet",
                "facetName": "Snot Rocket"
            },
            {
                "name": "Bristleback",
                "type": "upgraded",
                "upgradeType": "Facet",
                "facetName": "Snot Rocket"
            },
            {
                "name": "Warpath",
                "type": "level",
                "upgradeType": "Facet",
                "facetName": "Seeing Red"
            }
        ],
        "attribute": "strength"
    },
    {
        "name": "Centaur Warrunner",
        "abilities": [
            {
                "name": "Double Edge",
                "type": "upgraded",
                "upgradeType": "Shard"
            }
        ],
        "attribute": "strength"
    },
    {
        "name": "Chaos Knight",
        "abilities": [
            {
                "name": "Chaos Bolt",
                "type": "upgraded",
                "upgradeType": "Shard"
            }
        ],
        "attribute": "strength"
    },
    {
        "name": "Clockwerk",
        "abilities": [
            {
                "name": "Hookshot",
                "type": "level",
                "upgradeType": "Facet",
                "facetName": "Hookup"
            },
            {
                "name": "Power Cogs",
                "type": "upgraded",
                "upgradeType": "Facet",
                "facetName": "Expanded Armature"
            }
        ],
        "attribute": "strength"
    },
    {
        "name": "Dawnbreaker",
        "abilities": [
            {
                "name": "Solar Guardian",
                "type": "level",
                "upgradeType": "Scepter"
            },
            {
                "name": "Luminosity",
                "type": "upgraded",
                "upgradeType": "Facet",
                "facetName": "Solar Charged"
            },
            {
                "name": "Starbreaker",
                "type": "level",
                "upgradeType": "Facet",
                "facetName": "Starsurge"
            },
            {
                "name": "Celestial Hammer",
                "type": "level",
                "upgradeType": "Facet",
                "facetName": "Trailblazer"
            }
        ],
        "attribute": "strength"
    },
    {
        "name": "Doom",
        "abilities": [
            {
                "name": "Devour",
                "type": "upgraded",
                "upgradeType": "Facet",
                "facetName": "Gluttony"
            },
            {
                "name": "Doom",
                "type": "level",
                "upgradeType": "Facet",
                "facetName": "Impending Doom"
            }
        ],
        "attribute": "strength"
    },
    {
        "name": "Dragon Knight",
        "abilities": [
            {
                "name": "Wyrm's Wrath",
                "type": "level",
                "upgradeType": "Facet",
                "facetName": "Fire Dragon"
            },
            {
                "name": "Wyrm's Wrath",
                "type": "level",
                "upgradeType": "Facet",
                "facetName": "Corrosive Dragon"
            },
            {
                "name": "Wyrm's Wrath",
                "type": "level",
                "upgradeType": "Facet",
                "facetName": "Frost Dragon"
            },
        ],
        "attribute": "strength",
    },
    {
        "name": "Earth Spirit",
        "abilities": [
            {
                "name": "Magnetize",
                "type": "level",
                "upgradeType": "Facet",
                "facetName": "Resonance"
            },
            {
                "name": "Rolling Boulder",
                "type": "level",
                "upgradeType": "Facet",
                "facetName": "Ready To Roll"
            }
        ],
        "attribute": "strength"
    },
    {
        "name": "Earthshaker",
        "abilities": [
            {
                "name": "Fissure",
                "type": "level",
                "upgradeType": "Shard"
            },
            {
                "name": "Enchant Totem",
                "type": "upgraded",
                "upgradeType": "Scepter"
            }
        ],
        "attribute": "strength"
    },
    {
        "name": "Elder Titan",
        "abilities": [
            {
                "name": "Echo Stomp",
                "type": "level",
                "upgradeType": "Shard"
            }
        ],
        "attribute": "strength"
    },
    {
        "name": "Huskar",
        "abilities": [
            {
                "name": "Inner Fire",
                "type": "upgraded",
                "upgradeType": "Shard"
            },
            {
                "name": "Life Break",
                "type": "upgraded",
                "upgradeType": "Scepter"
            },
            {
                "name": "Berserker's Blood",
                "type": "level",
                "upgradeType": "Facet",
                "facetName": "Cauterize"        
            },
            {
                "name": "Burning Spear",
                "type": "upgraded",
                "upgradeType": "Facet",
                "facetName": "Incendiary"
            }
        ],
        "attribute": "strength"
    },
    {
        "name": "Kunkka",
        "abilities": [
            {
                "name": "Tidebringer",
                "type": "upgraded",
                "upgradeType": "Facet",
                "facetName": "High Tide"
            },
            {
                "name": "X Marks The Spot",
                "type": "upgraded",
                "upgradeType": "Facet",
                "facetName": "Grog Blossom"
            }
        ],
        "attribute": "strength"
    },
    {
        "name": "Legion Commander",
        "abilities": [
            {
                "name": "Overwhelming Odds",
                "type": "upgraded",
                "upgradeType": "Shard"
            },
            {
                "name": "Overwhelming Odds",
                "type": "upgraded",
                "upgradeType": "Facet",
                "facetName": "Stonehall Plate"
            },
            {
                "name": "Duel",
                "type": "level",
                "upgradeType": "Shard",
            },
            {
                "name": "Duel",
                "type": "level",
                "upgradeType": "Scepter",
            },
            {
                "name": "Duel",
                "type": "level",
                "upgradeType": "Facet",
                "facetName": "Spoils of War"
            },
        ],
        "attribute": "strength"
    },
    {
        "name": "Lifestealer",
        "abilities": [
            {
                "name": "Infest",
                "type": "level",
                "upgradeType": "Scepter",
            },
            {
                "name": "Infest",
                "type": "level",
                "upgradeType": "Facet",
                "facetName": "Fleshfeast"
            },
            {
                "name": "Infest",
                "type": "upgraded",
                "upgradeType": "Facet",
                "facetName": "Gorestorm"
            }
        ],
        "attribute": "strength"
    },
    {
        "name": "Lycan",
        "abilities": [
            {
                "name": "Shapeshift",
                "type": "level",
                "upgradeType": "Scepter"
            },
            {
                "name": "Summon Wolves",
                "type": "level",
                "upgradeType": "Facet",
                "facetName": "Spirit Wolves"
            }
        ],
        "attribute": "strength"
    },
    {
        "name": "Mars",
        "abilities": [
            {
                "name": "Spear of Mars",
                "type": "upgraded",
                "upgradeType": "Shard"
            },
            {
                "name": "Bulwark",
                "type": "upgraded",
                "upgradeType": "Scepter"
            }
        ],
        "attribute": "strength"
    },
    {
        "name": "Night Stalker",
        "abilities": [
            {
                "name": "Hunter In The Night",
                "type": "upgraded",
                "upgradeType": "Shard"
            },
            {
                "name": "Crippling Fear",
                "type": "upgraded",
                "upgradeType": "Scepter"
            },
            {
                "name": "Hunter In The Night",
                "type": "level",
                "upgradeType": "Facet",
                "facetName": "Night Reign"
            },
            {
                "name": "Void",
                "type": "level",
                "upgradeType": "Facet",
                "facetName": "Voidbringer"
            }
        ],
        "attribute": "strength"
    },
    {
        "name": "Ogre Magi",
        "abilities": [
            {
                "name": "Multicast",
                "type": "level",
                "upgradeType": "Facet",
                "facetName": "Fat Chance"
            }
        ],
        "attribute": "strength"
    },
    {
        "name": "Omniknight",
        "abilities": [
            {
                "name": "Guardian Angel",
                "type": "upgraded",
                "upgradeType": "Scepter"
            }
        ],
        "attribute": "strength"
    },
    {
        "name": "Phoenix",
        "abilities": [
            {
                "name": "Supernova",
                "type": "level",
                "upgradeType": "Scepter"
            }
        ],
        "attribute": "strength"
    },
    {
        "name": "Primal Beast",
        "abilities": [
            {
                "name": "Uproar",
                "type": "upgraded",
                "upgradeType": "Scepter"
            }
        ],
        "attribute": "strength"
    },
    {
        "name": "Pudge",
        "abilities": [
            {
                "name": "Meat Hook",
                "type": "upgraded",
                "upgradeType": "Shard"
            },
            {
                "name": "Rot",
                "type": "level",
                "upgradeType": "Scepter",
            },
            {
                "name": "Rot",
                "type": "level",
                "upgradeType": "Facet",
                "facetName": "Rotten Core"
            },
            {
                "name": "Dismember",
                "type": "level",
                "upgradeType": "Facet",
                "facetName": "Fresh Meat"
            }
        ],
        "attribute": "strength"
    },
    {
        "name": "Slardar",
        "abilities": [
            {
                "name": "Slithereen Crush",
                "type": "upgraded",
                "upgradeType": "Shard"
            },
            {
                "name": "Corrosive Haze",
                "type": "level",
                "upgradeType": "Scepter"
            },
            {
                "name": "Guardian Sprint",
                "type": "upgraded",
                "upgradeType": "Facet",
                "facetName": "Leg Day"
            }
        ],
        "attribute": "strength"
    },
    {
        "name": "Spirit Breaker",
        "abilities": [
            {
                "name": "Charge Of Darkness",
                "type": "level",
                "upgradeType": "Shard"
            },
            {
                "name": "Charge Of Darkness",
                "type": "upgraded",
                "upgradeType": "Facet",
                "facetName": "Bull Rush"
            }
        ],
        "attribute": "strength"
    },
    {
        "name": "Sven",
        "abilities": [
            {
                "name": "Warcry",
                "type": "level",
                "upgradeType": "Shard"
            },
            {
                "name": "Warcry",
                "type": "level",
                "upgradeType": "Facet",
                "facetName": "Heavy Plate"
            },
            {
                "name": "Storm Hammer",
                "type": "upgraded",
                "upgradeType": "Scepter"
            }
        ],
        "attribute": "strength"
    },
    {
        "name": "Tidehunter",
        "abilities": [
            {
                "name": "Gush",
                "type": "upgraded",
                "upgradeType": "Scepter"
            },
            {
                "name": "Kraken Shell",
                "type": "level",
                "upgradeType": "Facet",
                "facetName": "Kraken Swell"
            }
        ],
        "attribute": "strength"
    },
    {
        "name": "Timbersaw",
        "abilities": [
            {
                "name": "Timber Chain",
                "type": "level",
                "upgradeType": "Facet",
                "facetName": "Shredder"
            }
        ],
        "attribute": "strength"
    },
    {
        "name": "Tiny",
        "abilities": [
            {
                "name": "Toss",
                "type": "level",
                "upgradeType": "Facet",
                "facetName": "Crash Landing"
            }
        ],
        "attribute": "strength"
    },
    {
        "name": "Tusk",
        "abilities": [
            {
                "name": "Ice Shards",
                "type": "upgraded",
                "upgradeType": "Shard"
            }
        ],
        "attribute": "strength"
    },
    {
        "name": "Underlord",
        "abilities": [
            {
                "name": "Firestorm",
                "type": "upgraded",
                "upgradeType": "Shard"
            },
            {
                "name": "Pit Of Malice",
                "type": "upgraded",
                "upgradeType": "Scepter"
            },
            {
                "name": "Fiend's Gate",
                "type": "level",
                "upgradeType": "Scepter"
            },
            {
                "name": "Atrophy Aura",
                "type": "upgraded",
                "upgradeType": "Facet",
                "facetName": "Demon's Reach"
            }
        ],
        "attribute": "strength"
    },
    {
        "name": "Undying",
        "abilities": [
            {
                "name": "Decay",
                "type": "upgraded",
                "upgradeType": "Scepter"
            },
            {
                "name": "Flesh Golem",
                "type": "upgraded",
                "upgradeType": "Facet",
                "facetName": "Rotting Mitts"
            },
            {
                "name": "Soul Rip",
                "type": "upgraded",
                "upgradeType": "Facet",
                "facetName": "Ripped"
            }
        ],
        "attribute": "strength"
    },
    {
        "name": "Wraith King",
        "abilities": [
            {
                "name": "Reincarnation",
                "type": "level",
                "upgradeType": "Scepter",
            },
            {
                "name": "Reincarnation",
                "type": "level",
                "upgradeType": "Facet",
                "facetName": "Bone Guard"
            },
            {
                "name": "Wraithfire Blast",
                "type": "upgraded",
                "upgradeType": "Facet",
                "facetName": "Bone Guard"
            }
        ],
        "attribute": "strength"
    },
    {
        "name": "Anti-Mage",
        "abilities": [
            {
                "name": "Blink",
                "type": "upgraded",
                "upgradeType": "Scepter"
            },
            {
                "name": "Counterspell",
                "type": "level",
                "upgradeType": "Facet",
                "facetName": "Magebane's Mirror"
            },
            {
                "name": "Mana Void",
                "type": "level",
                "upgradeType": "Facet",
                "facetName": "Mana Thirst"
            }
        ],
        "attribute": "agility"
    },
    {
        "name": "Bloodseeker",
        "abilities": [
            {
                "name": "Rupture",
                "type": "upgraded",
                "upgradeType": "Facet",
                "facetName": "Arterial Spray"
            },
            {
                "name": "Thirst",
                "type": "level",
                "upgradeType": "Facet",
                "facetName": "Bloodrush"
            }
        ],
        "attribute": "agility"
    },
    {
        "name": "Bounty Hunter",
        "abilities": [
            {
                "name": "Shadow Walk",
                "type": "level",
                "upgradeType": "Shard",
            },
            {
                "name": "Shuriken Toss",
                "type": "upgraded",
                "upgradeType": "Scepter",
            }
        ],
        "attribute": "agility"
    },
    {
        "name": "Broodmother",
        "abilities": [
            {
                "name": "Insatiable Hunger",
                "type": "level",
                "upgradeType": "Shard"
            },
            {
                "name": "Spin Web",
                "type": "level",
                "upgradeType": "Facet",
                "facetName": "Necrotic Webs"
            },
            {
                "name": "Insatiable Hunger",
                "type": "upgraded",
                "upgradeType": "Facet",
                "facetName": "Feeding Frenzy"
            }
        ],
        "attribute": "agility"
    },
    {
        "name": "Clinkz",
        "abilities": [
            {
                "name": "Death Pact",
                "type": "upgraded",
                "upgradeType": "Facet",
                "facetName": "Engulfing Step"
            }
        ],
        "attribute": "agility"
    },
    {
        "name": "Drow Ranger",
        "abilities": [
            {
                "name": "Frost Arrows",
                "type": "upgraded",
                "upgradeType": "Scepter"
            },
            {
                "name": "Multishot",
                "type": "upgraded",
                "upgradeType": "Facet",
                "facetName": "Sidestep"
            }
        ],
        "attribute": "agility"
    },
    {
        "name": "Ember Spirit",
        "abilities": [
            {
                "name": "Fire Remnant",
                "type": "level",
                "upgradeType": "Shard"
            },
            {
                "name": "Fire Remnant",
                "type": "upgraded",
                "upgradeType": "Scepter"
            },
            {
                "name": "Searing Chains",
                "type": "upgraded",
                "upgradeType": "Facet",
                "facetName": "Chain Gang"
            }
        ],
        "attribute": "agility"
    },
    {
        "name": "Faceless Void",
        "abilities": [
            {
                "name": "Time Walk",
                "type": "upgraded",
                "upgradeType": "Scepter"
            },
            {
                "name": "Time Walk",
                "type": "level",
                "upgradeType": "Shard"
            }
        ],
        "attribute": "agility"
    },
    {
        "name": "Gyrocopter",
        "abilities": [
            {
                "name": "Flak Cannon",
                "type": "upgraded",
                "upgradeType": "Scepter"
            },
            {
                "name": "Call Down",
                "type": "upgraded",
                "upgradeType": "Facet",
                "facetName": "Secondary Strikes"
            },
            {
                "name": "Rocket Barrage",
                "type": "level",
                "upgradeType": "Facet",
                "facetName": "Afterburner"
            }
        ],
        "attribute": "agility"
    },
    {
        "name": "Hoodwink",
        "abilities": [
            {
                "name": "Sharpshooter",
                "type": "level",
                "upgradeType": "Scepter"
            },
            {
                "name": "Sharpshooter",
                "type": "level",
                "upgradeType": "Facet",
                "facetName": "Hipshot"
            },
            {
                "name": "Scurry",
                "type": "level",
                "upgradeType": "Facet",
                "facetName": "Go Nuts"
            }
        ],
        "attribute": "agility"
    },
    {
        "name": "Juggernaut",
        "abilities": [
            {
                "name": "Blade Fury",
                "type": "upgraded",
                "upgradeType": "Shard"
            }
        ],
        "attribute": "agility"
    },
    {
        "name": "Kez",
        "abilities": [
            {
                "name": "Kazurai Katana",
                "type": "upgraded",
                "upgradeType": "Shard"
            }
        ],
        "attribute": "agility"
    },
    {
        "name": "Lone Druid",
        "abilities": [
            {
                "name": "Savage Roar",
                "type": "upgraded",
                "upgradeType": "Shard"
            },
            {
                "name": "Spirit Link",
                "type": "level",
                "upgradeType": "Facet",
                "facetName": "Bear With Me"
            }
        ],
        "attribute": "agility"
    },
    {
        "name": "Luna",
        "abilities": [
            {
                "name": "Lunar Orbit",
                "type": "level",
                "upgradeType": "Shard"
            },
            {
                "name": "Lunar Orbit",
                "type": "level",
                "upgradeType": "Facet",
                "facetName": "Moonshield"
            },
            {
                "name": "Eclipse",
                "type": "level",
                "upgradeType": "Scepter"
            },
            {
                "name": "Lucent Beam",
                "type": "level",
                "upgradeType": "Facet",
                "facetName": "Moonstorm"
            }
        ],
        "attribute": "agility"
    },
    {
        "name": "Medusa",
        "abilities": [
            {
                "name": "Split Shot",
                "type": "upgraded",
                "upgradeType": "Scepter"
            }
        ],
        "attribute": "agility"
    },
    {
        "name": "Meepo",
        "abilities": [
            {
                "name": "Divided We Stand",
                "type": "level",
                "upgradeType": "Facet",
                "facetName": "More Meepo"
            }
        ],
        "attribute": "agility"
    },
    {
        "name": "Mirana",
        "abilities": [
            {
                "name": "Sacred Arrow",
                "type": "upgraded",
                "upgradeType": "Scepter"
            },
            {
                "name": "Starstorm",
                "type": "upgraded",
                "upgradeType": "Facet",
                "facetName": "Starstruck"
            },
            {
                "name": "Leap",
                "type": "level",
                "upgradeType": "Facet",
                "facetName": "Leaps and Bounds"
            }
        ],
        "attribute": "agility"
    },
    {
        "name": "Monkey King",
        "abilities": [
            {
                "name": "Wukong's Command",
                "type": "upgraded",
                "upgradeType": "Scepter"
            },
            {
                "name": "Wukong's Command",
                "type": "upgraded",
                "upgradeType": "Facet",
                "facetName": "Wukong Faithful"
            }
        ],
        "attribute": "agility"
    },
    {
        "name": "Morphling",
        "abilities": [
            {
                "name": "Attribute Shift",
                "type": "upgraded",
                "upgradeType": "Shard"
            },
            {
                "name": "Morph",
                "type": "upgraded",
                "upgradeType": "Scepter"
            },
            {
                "name": "Waveform",
                "type": "upgraded",
                "upgradeType": "Facet",
                "facetName": "Ebb"
            },
            {
                "name": "Adaptive Strike",
                "type": "upgraded",
                "upgradeType": "Facet",
                "facetName": "Flow"
            }
        ],
        "attribute": "agility"
    },
    {
        "name": "Naga Siren",
        "abilities": [
            {
                "name": "Song Of The Siren",
                "type": "level",
                "upgradeType": "Shard"
            }
        ],
        "attribute": "agility"
    },
    {
        "name": "Phantom Assassin",
        "abilities": [
            {
                "name": "Blur",
                "type": "upgraded",
                "upgradeType": "Scepter"
            },
            {
                "name": "Coup De Grace",
                "type": "level",
                "upgradeType": "Facet",
                "facetName": "Methodical"
            }
        ],
        "attribute": "agility"
    },
    {
        "name": "Phantom Lancer",
        "abilities": [
            {
                "name": "Spirit Lance",
                "type": "upgraded",
                "upgradeType": "Scepter"
            },
            {
                "name": "Juxtapose",
                "type": "level",
                "upgradeType": "Facet",
                "facetName": "Divergence"
            }
        ],
        "attribute": "agility"
    },
    {
        "name": "Riki",
        "abilities": [
            {
                "name": "Tricks Of The Trade",
                "type": "upgraded",
                "upgradeType": "Scepter"
            },
            {
                "name": "Cloak and Dagger",
                "type": "level",
                "upgradeType": "Facet",
                "facetName": "Contract Killer"
            }
        ],
        "attribute": "agility"
    },
    {
        "name": "Shadow Fiend",
        "abilities": [
            {
                "name": "Requiem Of Souls",
                "type": "level",
                "upgradeType": "Scepter"
            },
            {
                "name": "Presence Of The Dark Lord",
                "type": "upgraded",
                "upgradeType": "Facet",
                "facetName": "Lasting Presence"
            },
            {
                "name": "Shadowraze",
                "type": "level",
                "upgradeType": "Facet",
                "facetName": "Shadowmire"
            }
        ],
        "attribute": "agility"
    },
    {
        "name": "Slark",
        "abilities": [
            {
                "name": "Pounce",
                "type": "upgraded",
                "upgradeType": "Scepter"
            },
            {
                "name": "Pounce",
                "type": "level",
                "upgradeType": "Facet",
                "facetName": "Leeching Leash"
            },
            {
                "name": "Shadow Dance",
                "type": "level",
                "upgradeType": "Facet",
                "facetName": "Dark Reef Renegade"
            }
        ],
        "attribute": "agility"
    },
    {
        "name": "Sniper",
        "abilities": [
            {
                "name": "Assassinate",
                "type": "level",
                "upgradeType": "Scepter"
            }
        ],
        "attribute": "agility"
    },
    {
        "name": "Templar Assassin",
        "abilities": [
            {
                "name": "Psionic Trap",
                "type": "level",
                "upgradeType": "Shard"
            },
            {
                "name": "Psionic Trap",
                "type": "upgraded",
                "upgradeType": "Scepter"
            }
        ],
        "attribute": "agility"
    },
    {
        "name": "Terrorblade",
        "abilities": [
            {
                "name": "Conjure Image",
                "type": "upgraded",
                "upgradeType": "Facet",
                "facetName": "Soul Fragment"
            }
        ],
        "attribute": "agility"
    },
    {
        "name": "Troll Warlord",
        "abilities": [
            {
                "name": "Whirling Axes",
                "type": "upgraded",
                "upgradeType": "Scepter"
            },
            {
                "name": "Fervor",
                "type": "upgraded",
                "upgradeType": "Facet",
                "facetName": "Insensitive"
            },
            {
                "name": "Battle Trance",
                "type": "upgraded",
                "upgradeType": "Facet",
                "facetName": "Bad Influence"
            }
        ],
        "attribute": "agility"
    },
    {
        "name": "Ursa",
        "abilities": [
            {
                "name": "Enrage",
                "type": "level",
                "upgradeType": "Scepter"
            },
            {
                "name": "Enrage",
                "type": "upgraded",
                "upgradeType": "Facet",
                "facetName": "Grudge Bearer"
            }
        ],
        "attribute": "agility"
    },
    {
        "name": "Viper",
        "abilities": [
            {
                "name": "Poison Attack",
                "type": "upgraded",
                "upgradeType": "Shard"
            },
            {
                "name": "Poison Attack",
                "type": "upgraded",
                "upgradeType": "Facet",
                "facetName": "Poison Burst"
            }
        ],
        "attribute": "agility"
    },
    {
        "name": "Weaver",
        "abilities": [
            {
                "name": "Shukuchi",
                "type": "upgraded",
                "upgradeType": "Facet",
                "facetName": "Skitterstep"
            },
            {
                "name": "The Swarm",
                "type": "level",
                "upgradeType": "Facet",
                "facetName": "Hivemind"
            }
        ],
        "attribute": "agility"
    },
    {
        "name": "Ancient Apparition",
        "abilities": [
            {
                "name": "Ice Blast",
                "type": "level",
                "upgradeType": "Facet",
                "facetName": "Bone Chill"
            },
            {
                "name": "Ice Blast",
                "type": "level",
                "upgradeType": "Facet",
                "facetName": "Exposure"
            }
        ],
        "attribute": "intelligence"
    },
    {
        "name": "Crystal Maiden",
        "abilities": [
            {
                "name": "Arcane Aura",
                "type": "upgraded",
                "upgradeType": "Facet",
                "facetName": "Arcane Overflow"
            },
            {
                "name": "Crystal Nova",
                "type": "level",
                "upgradeType": "Facet",
                "facetName": "Glacial Guard"
            }
        ],
        "attribute": "intelligence"
    },
    {
        "name": "Dark Seer",
        "abilities": [
            {
                "name": "Surge",
                "type": "level",
                "upgradeType": "Shard"
            }
        ],
        "attribute": "intelligence"
    },
    {
        "name": "Disruptor",
        "abilities": [
            {
                "name": "Thunder Strike",
                "type": "upgraded",
                "upgradeType": "Shard"
            }
        ],
        "attribute": "intelligence"
    },
    {
        "name": "Enchantress",
        "abilities": [
            {
                "name": "Enchant",
                "type": "upgraded",
                "upgradeType": "Scepter"
            },
            {
                "name": "Enchant",
                "type": "level",
                "upgradeType": "Facet",
                "facetName": "Spellbound"
            }
        ],
        "attribute": "intelligence"
    },
    {
        "name": "Grimstroke",
        "abilities": [
            {
                "name": "Ink Swell",
                "type": "upgraded",
                "upgradeType": "Facet",
                "facetName": "Inkstigate"
            },
            {
                "name": "Stroke Of Fate",
                "type": "level",
                "upgradeType": "Facet",
                "facetName": "Fine Art"
            }
        ],
        "attribute": "intelligence"
    },
    {
        "name": "Invoker",
        "abilities": [
            {
                "name": "Quas",
                "type": "upgraded",
                "upgradeType": "Scepter"
            },
            {
                "name": "Wex",
                "type": "upgraded",
                "upgradeType": "Scepter",
            },
            {
                "name": "Exort",
                "type": "upgraded",
                "upgradeType": "Scepter",
            },
        ],
        "attribute": "intelligence"
    },
    {
        "name": "Jakiro",
        "abilities": [
            {
                "name": "Macropyre",
                "type": "upgraded",
                "upgradeType": "Scepter"
            },
            {
                "name": "Ice Path",
                "type": "level",
                "upgradeType": "Facet",
                "facetName": "Ice Breaker"
            }
        ],
        "attribute": "intelligence"
    },
    {
        "name": "Keeper Of The Light",
        "abilities": [
            {
                "name": "Spirit Form",
                "type": "upgraded",
                "upgradeType": "Shard"
            }
        ],
        "attribute": "intelligence"
    },
    {
        "name": "Leshrac",
        "abilities": [
            {
                "name": "Diabolic Edict",
                "type": "upgraded",
                "upgradeType": "Facet",
                "facetName": "Misanthropy"
            }
        ],
        "attribute": "intelligence"
    },
    {
        "name": "Lich",
        "abilities": [
            {
                "name": "Chain Frost",
                "type": "level",
                "upgradeType": "Facet",
                "facetName": "Frostbound"
            },
            {
                "name": "Frost Shield",
                "type": "upgraded",
                "upgradeType": "Facet",
                "facetName": "Growing Cold"
            },
            {
                "name": "Chain Frost",
                "type": "upgraded",
                "upgradeType": "Facet",
                "facetName": "Growing Cold"
            }
        ],
        "attribute": "intelligence"
    },
    {
        "name": "Lina",
        "abilities": [
            {
                "name": "Laguna Blade",
                "type": "level",
                "upgradeType": "Facet",
                "facetName": "Thermal Runaway"
            },
            {
                "name": "Laguna Blade",
                "type": "level",
                "upgradeType": "Facet",
                "facetName": "Slow Burn"
            },
            {
                "name": "Dragon Slave",
                "type": "level",
                "upgradeType": "Facet",
                "facetName": "Slow Burn"
            },
            {
                "name": "Light Strike Array",
                "type": "level",
                "upgradeType": "Facet",
                "facetName": "Slow Burn"
            },
        ],
        "attribute": "intelligence"
    },
    {
        "name": "Lion",
        "abilities": [
            {
                "name": "Mana Drain",
                "type": "upgraded",
                "upgradeType": "Shard"
            },
            {
                "name": "Finger Of Death",
                "type": "level",
                "upgradeType": "Scepter"
            },
            {
                "name": "Finger Of Death",
                "type": "upgraded",
                "upgradeType": "Facet",
                "facetName": "Fist Of Death"
            }
        ],
        "attribute": "intelligence"
    },
    {
        "name": "Muerta",
        "abilities": [
            {
                "name": "Dead Shot",
                "type": "level",
                "upgradeType": "Scepter"
            }
        ],
        "attribute": "intelligence"
    },
    {
        "name": "Outworld Destroyer",
        "abilities": [
            {
                "name": "Astral Imprisonment",
                "type": "upgraded",
                "upgradeType": "Shard"
            },
            {
                "name": "Essence Flux",
                "type": "upgraded",
                "upgradeType": "Facet",
                "facetName": "Obsidian Decimator"
            },
            {
                "name": "Astral Imprisonment",
                "type": "upgraded",
                "upgradeType": "Facet",
                "facetName": "Overwhelming Devourer"
            },
            {
                "name": "Sanity’s Eclipse",
                "type": "upgraded",
                "upgradeType": "Facet",
                "facetName": "Overwhelming Devourer"
            }
        ],
        "attribute": "intelligence"
    },
    {
        "name": "Puck",
        "abilities": [
            {
                "name": "Phase Shift",
                "type": "upgraded",
                "upgradeType": "Shard"
            },
            {
                "name": "Waning Rift",
                "type": "level",
                "upgradeType": "Facet",
                "facetName": "Jostling Rift"
            },
            {
                "name": "Illusory Orb",
                "type": "upgraded",
                "upgradeType": "Facet",
                "facetName": "Curveball"
            }
        ],
        "attribute": "intelligence"
    },
    {
        "name": "Pugna",
        "abilities": [
            {
                "name": "Nether Ward",
                "type": "upgraded",
                "upgradeType": "Facet",
                "facetName": "Siphoning Ward"
            }
        ],
        "attribute": "intelligence"
    },
    {
        "name": "Rubick",
        "abilities": [
            {
                "name": "Spell Steal",
                "type": "upgraded",
                "upgradeType": "Scepter"
            },
            {
                "name": "Spell Steal",
                "type": "level",
                "upgradeType": "Facet",
                "facetName": "Frugal Filch"
            },
            {
                "name": "Arcane Supremacy",
                "type": "upgraded",
                "upgradeType": "Facet",
                "facetName": "Arcane Accumulation"
            }
        ],
        "attribute": "intelligence"
    },
    {
        "name": "Shadow Demon",
        "abilities": [
            {
                "name": "Demonic Purge",
                "type": "level",
                "upgradeType": "Scepter"
            },
            {
                "name": "Disseminate",
                "type": "level",
                "upgradeType": "Facet",
                "facetName": "Promulgate"
            }
        ],
        "attribute": "intelligence"
    },
    {
        "name": "Shadow Shaman",
        "abilities": [
            {
                "name": "Shackles",
                "type": "upgraded",
                "upgradeType": "Scepter"
            }
        ],
        "attribute": "intelligence"
    },
    {
        "name": "Silencer",
        "abilities": [
            {
                "name": "Glaives Of Wisdom",
                "type": "level",
                "upgradeType": "Shard"
            },
            {
                "name": "Global Silence",
                "type": "level",
                "upgradeType": "Facet",
                "facetName": "Reverberating Silence"
            }
        ],
        "attribute": "intelligence"
    },
    {
        "name": "Storm Spirit",
        "abilities": [
            {
                "name": "Overload",
                "type": "upgraded",
                "upgradeType": "Shard"
            },
            {
                "name": "Electric Vortex",
                "type": "upgraded",
                "upgradeType": "Scepter"
            },
            {
                "name": "Static Remnant",
                "type": "upgraded",
                "upgradeType": "Facet",
                "facetName": "Static Slide"
            }
        ],
        "attribute": "intelligence"
    },
    {
        "name": "Tinker",
        "abilities": [
            {
                "name": "March Of The Machines",
                "type": "level",
                "upgradeType": "Facet",
                "facetName": "Repair Bots"
            },
            {
                "name": "Defense Matrix",
                "type": "upgraded",
                "upgradeType": "Facet",
                "facetName": "Translocator"
            }
        ],
        "attribute": "intelligence"
    },
    {
        "name": "Warlock",
        "abilities": [
            {
                "name": "Chaotic Offering",
                "type": "upgraded",
                "upgradeType": "Facet",
                "facetName": "Champion of Gorroth"
            },
            {
                "name": "Chaotic Offering",
                "type": "level",
                "upgradeType": "Scepter"
            }
        ],
        "attribute": "intelligence"
    },
    {
        "name": "Winter Wyvern",
        "abilities": [
            {
                "name": "Arctic Burn",
                "type": "upgraded",
                "upgradeType": "Scepter"
            },
            {
                "name": "Cold Embrace",
                "type": "upgraded",
                "upgradeType": "Facet",
                "facetName": "Winterproof"
            }
        ],
        "attribute": "intelligence"
    },
    {
        "name": "Witch Doctor",
        "abilities": [
            {
                "name": "Death Ward",
                "type": "upgraded",
                "upgradeType": "Scepter"
            },
            {
                "name": "Paralyzing Cask",
                "type": "upgraded",
                "upgradeType": "Facet",
                "facetName": "Headhunter"
            },
            {
                "name": "Death Ward",
                "type": "level",
                "upgradeType": "Facet",
                "facetName": "Cleft Death"
            }
        ],
        "attribute": "intelligence"
    },
    {
        "name": "Zeus",
        "abilities": [
            {
                "name": "Thundergod's Wrath",
                "type": "level",
                "upgradeType": "Facet",
                "facetName": "Livewire"
            },
            {
                "name": "Thundergod's Wrath",
                "type": "upgraded",
                "upgradeType": "Facet",
                "facetName": "Divine Rampage"
            }
        ],
        "attribute": "intelligence"
    },
    {
        "name": "Abaddon",
        "abilities": [
            {
                "name": "Borrowed Time",
                "type": "level",
                "upgradeType": "Scepter"
            },
            {
                "name": "Aphotic Shield",
                "type": "level",
                "upgradeType": "Facet",
                "facetName": "Mephitic Shroud"
            }
        ],
        "attribute": "universal"
    },
    {
        "name": "Arc Warden",
        "abilities": [
            {
                "name": "Spark Wraith",
                "type": "upgraded",
                "upgradeType": "Shard"
            },
            {
                "name": "Flux",
                "type": "level",
                "upgradeType": "Scepter"
            },
            {
                "name": "Magnetic Field",
                "type": "level",
                "upgradeType": "Facet",
                "facetName": "Power Capture"
            }
        ],
        "attribute": "universal"
    },
    {
        "name": "Bane",
        "abilities": [
            {
                "name": "Nightmare",
                "type": "level",
                "upgradeType": "Facet",
                "facetName": "Dream Stalker"
            },
            {
                "name": "Nightmare",
                "type": "upgraded",
                "upgradeType": "Facet",
                "facetName": "Sleepwalk"
            }
        ],
        "attribute": "universal"
    },
    {
        "name": "Batrider",
        "abilities": [
            {
                "name": "Sticky Napalm",
                "type": "upgraded",
                "upgradeType": "Facet",
                "facetName": "Arsonist"
            }
        ],
        "attribute": "universal"
    },
    {
        "name": "Beastmaster",
        "abilities": [
            {
                "name": "Call Of The Wild",
                "type": "upgraded",
                "upgradeType": "Shard"
            },
            {
                "name": "Inner Beast",
                "type": "level",
                "upgradeType": "Facet",
                "facetName": "Wild Hunt"
            },
            {
                "name": "Inner Beast",
                "type": "level",
                "upgradeType": "Facet",
                "facetName": "Beast Mode"
            },
        ],
        "attribute": "universal"
    },
    {
        "name": "Brewmaster",
        "abilities": [
            {
                "name": "Primal Split",
                "type": "level",
                "upgradeType": "Shard"
            },
            {
                "name": "Cinder Brew",
                "type": "level",
                "upgradeType": "Facet",
                "facetName": "Roll Out The Barrel"
            }
        ],
        "attribute": "universal"
    },
    {
        "name": "Dazzle",
        "abilities": [
            {
                "name": "Nothl Projection",
                "type": "upgraded",
                "upgradeType": "Shard"
            },
            {
                "name": "Poison Touch",
                "type": "level",
                "upgradeType": "Facet",
                "facetName": "Poison Bloom"
            }
        ],
        "attribute": "universal"
    },
    {
        "name": "Death Prophet",
        "abilities": [
            {
                "name": "Exorcism",
                "type": "upgraded",
                "upgradeType": "Scepter"
            },
            {
                "name": "Exorcism",
                "type": "level",
                "upgradeType": "Facet",
                "facetName": "Spirit Collector"
            }
        ],
        "attribute": "universal"
    },
    {
        "name": "Enigma",
        "abilities": [
            {
                "name": "Malefice",
                "type": "level",
                "upgradeType": "Shard"
            },
            {
                "name": "Black Hole",
                "type": "level",
                "upgradeType": "Facet",
                "facetName": "Event Horizon"
            }
        ],
        "attribute": "universal"
    },
    {
        "name": "Io",
        "abilities": [
            {
                "name": "Tether",
                "type": "upgraded",
                "upgradeType": "Shard"
            },
            {
                "name": "Spirits",
                "type": "upgraded",
                "upgradeType": "Scepter"
            },
            {
                "name": "Overcharge",
                "type": "level",
                "upgradeType": "Facet",
                "facetName": "Kritzkrieg"
            },
            {
                "name": "Overcharge",
                "type": "level",
                "upgradeType": "Facet",
                "facetName": "Medigun"
            }
        ],
        "attribute": "universal"
    },
    {
        "name": "Magnus",
        "abilities": [
            {
                "name": "Skewer",
                "type": "level",
                "upgradeType": "Shard"
            },
            {
                "name": "Empower",
                "type": "level",
                "upgradeType": "Facet",
                "facetName": "Eternal Empowerment"
            }
        ],
        "attribute": "universal"
    },
    {
        "name": "Marci",
        "abilities": [
            {
                "name": "Rebound",
                "type": "level",
                "upgradeType": "Shard"
            }
        ],
        "attribute": "universal"
    },
    {
        "name": "Nature's Prophet",
        "abilities": [
            {
                "name": "Sprout",
                "type": "level",
                "upgradeType": "Facet",
                "facetName": "Soothing Saplings"
            },
            {
                "name": "Nature's Call",
                "type": "level",
                "upgradeType": "Facet",
                "facetName": "Ironwood Treant"
            }
        ],
        "attribute": "universal"
    },
    {
        "name": "Nyx Assassin",
        "abilities": [
            {
                "name": "Vendetta",
                "type": "upgraded",
                "upgradeType": "Shard"
            },
            {
                "name": "Mind Flare",
                "type": "level",
                "upgradeType": "Facet",
                "facetName": "Mana Burn"
            }
        ],
        "attribute": "universal"
    },
    {
        "name": "Pangolier",
        "abilities": [
            {
                "name": "Shield Crush",
                "type": "upgraded",
                "upgradeType": "Facet",
                "facetName": "Double Jump"
            },
            {
                "name": "Rolling Thunder",
                "type": "upgraded",
                "upgradeType": "Facet",
                "facetName": "Thunderbolt"
            }
        ],
        "attribute": "universal"
    },
    {
        "name": "Sand King",
        "abilities": [
            {
                "name": "Epicenter",
                "type": "level",
                "upgradeType": "Shard"
            },
            {
                "name": "Sand Storm",
                "type": "level",
                "upgradeType": "Facet",
                "facetName": "Sandshroud"
            }
        ],
        "attribute": "universal"
    },
    {
        "name": "Snapfire",
        "abilities": [
            {
                "name": "Firesnap Cookie",
                "type": "upgraded",
                "upgradeType": "Shard"
            },
            {
                "name": "Scatterblast",
                "type": "upgraded",
                "upgradeType": "Facet",
                "facetName": "Full Bore"
            }
        ],
        "attribute": "universal"
    },
    {
        "name": "Spectre",
        "abilities": [
            {
                "name": "Shadow Step",
                "type": "upgraded",
                "upgradeType": "Scepter"
            },
            {
                "name": "Desolate",
                "type": "level",
                "upgradeType": "Facet",
                "facetName": "Forsaken"
            }
        ],
        "attribute": "universal"
    },
    {
        "name": "Techies",
        "abilities": [
            {
                "name": "Reactive Tazer",
                "type": "upgraded",
                "upgradeType": "Shard"
            },
            {
                "name": "Blast Off!",
                "type": "upgraded",
                "upgradeType": "Facet",
                "facetName": "Spleen's Secret Sauce"
            }
        ],
        "attribute": "universal"
    },
    {
        "name": "Venomancer",
        "abilities": [
            {
                "name": "Plague Ward",
                "type": "level",
                "upgradeType": "Facet",
                "facetName": "Plague Carrier"
            }
        ],
        "attribute": "universal"
    },
    {
        "name": "Visage",
        "abilities": [
            {
                "name": "Gravekeeper's Cloak",
                "type": "upgraded",
                "upgradeType": "Shard"
            },
            {
                "name": "Grave Chill",
                "type": "upgraded",
                "upgradeType": "Facet",
                "facetName": "Sepulchre"
            },
            {
                "name": "Summon Familiars",
                "type": "upgraded",
                "upgradeType": "Facet",
                "facetName": "Faithful Followers"
            },
            {
                "name": "Soul Assumption",
                "type": "level",
                "upgradeType": "Facet",
                "facetName": "Death Toll"
            }
        ],
        "attribute": "universal"
    },
    {
        "name": "Void Spirit",
        "abilities": [
            {
                "name": "Aether Remnant",
                "type": "level",
                "upgradeType": "Shard"
            },
            {
                "name": "Resonant Pulse",
                "type": "upgraded",
                "upgradeType": "Scepter"
            },
            {
                "name": "Resonant Pulse",
                "type": "level",
                "upgradeType": "Facet",
                "facetName": "Sanctuary"
            },
            {
                "name": "Dissimilate",
                "type": "upgraded",
                "upgradeType": "Facet",
                "facetName": "Call of The Void"
            }
        ],
        "attribute": "universal"
    },
    {
        "name": "Windranger",
        "abilities": [
            {
                "name": "Shackleshot",
                "type": "level",
                "upgradeType": "Facet",
                "facetName": "Tangled"
            },
            {
                "name": "Powershot",
                "type": "level",
                "upgradeType": "Facet",
                "facetName": "Killshot"
            }
        ],
        "attribute": "universal"
    }
]