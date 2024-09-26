const gamesDB = [
    {
        id: 0,
        title: "Minecraft",
        description: "Minecraft is a sandbox game that allows players to build and explore their own worlds made up of blocks. Survive the night by crafting weapons and building shelters or unleash your creativity by constructing elaborate structures.",
        photoLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSbWOL6AqgFI9M4eblTENTH_X5OYkzBMpvZA&s",
        link: "https://www.minecraft.net/en-us",
        reviews: [
            {
                reviewer: "Just Guy",
                reviewText: "I don't like it. I like frontend more.",
                rating: 3
            },
            {   reviewer: " Guy",
                reviewText: "I like it. but like frontend more.",
                rating: 3}
        ],
        news: [
            {
                title: "New Update Released",
                date: "2024-09-15",
                content: "The latest update brings exciting new features!"
            }
        ],
        versions: [
            {
                versionNumber: "1.19",
                releaseDate: "2022-11-30"
            }
        ],
        requirements: [
            {
                requirement: "Operating system",
                version: "from Windows 10"
            },
            {
                requirement: "Processor",
                version: "Intel Core i3"
            },
            {
                requirement: "RAM",
                version: "4 GB RAM"
            }
        ],
        gallery: [
            "https://www.minecraft.net/content/dam/games/minecraft/key-art/Vanilla-PMP_Collection-Carousel-0_Village-and-Pillage_1280x768.jpg",
            "https://www.minecraft.net/content/dam/games/minecraft/key-art/Vanilla-PMP_Collection-Carousel-0_Update-Aquatic_1280x768.jpg",
            "https://www.minecraft.net/content/dam/games/minecraft/key-art/Vanilla-PMP_Collection-Carousel-0_Buzzy-Bees_1280x768.jpg"
        ]
    },
    {
        id: 1,
        title: "Honkai Impact 3RD",
        description: "Honkai Impact 3RD is an anime-style action RPG featuring a dynamic combat system. Players assume the role of Valkyries who battle against mysterious enemies in an engaging story filled with twists.",
        photoLink: "https://yt3.googleusercontent.com/VDNAdiF3bpfMwJhpwo1ED6EsoDJLxReR5btxGVFzMt1sM9jsn8QI3EOfFxyNhg3ttGfPaTH6mUs=s900-c-k-c0x00ffffff-no-rj",
        link: "https://honkaiimpact3.hoyoverse.com/en",
        reviews: [
            {
                reviewer: "AnimeFan99",
                reviewText: "The graphics are stunning, and the gameplay is fast-paced. A must-try for action RPG lovers!",
                rating: 5
            }
        ],
        news: [
            {
                title: "New Character Added: Herrscher of the Void",
                date: "2024-09-20",
                content: "Dive into the new character's abilities and backstory!"
            }
        ],
        versions: [
            {
                versionNumber: "5.9",
                releaseDate: "2024-09-15"
            }
        ],
        requirements: [
            {
                requirement: "Operating system",
                version: "Windows 10 or higher"
            },
            {
                requirement: "Processor",
                version: "Intel Core i5"
            },
            {
                requirement: "RAM",
                version: "8 GB RAM"
            }
        ],
        gallery: [
            "https://honkaiimpact3.hoyoverse.com/en/assets/images/characters/impact3rd/v5.9_character_herrscher_of_void.jpg",
            "https://honkaiimpact3.hoyoverse.com/en/assets/images/characters/impact3rd/v5.9_character_theresa.jpg",
            "https://honkaiimpact3.hoyoverse.com/en/assets/images/characters/impact3rd/v5.9_character_honkai_impact.jpg"
        ]
    },
    {
        id: 2,
        title: "Undertale",
        description: "Undertale is a unique RPG where you can choose your path. With charming characters and witty dialogue, you can either fight or befriend your foes in a quirky underground world.",
        photoLink: "https://staging.cohostcdn.org/attachment/5ed9a732-5a82-4ba3-b424-1ed4f4d97000/undertaleann_signed.png?width=675&auto=webp&dpr=1",
        link: "https://undertale.com/",
        reviews: [
            {
                reviewer: "StoryTeller",
                reviewText: "An emotional rollercoaster with a unique combat system. Truly a masterpiece!",
                rating: 10
            }
        ],
        news: [
            {
                title: "Undertale Plus Announced",
                date: "2024-09-22",
                content: "Get ready for new content and characters in the upcoming Undertale Plus!"
            }
        ],
        versions: [
            {
                versionNumber: "1.1.0",
                releaseDate: "2024-09-20"
            }
        ],
        requirements: [
            {
                requirement: "Operating system",
                version: "Windows 7 or higher"
            },
            {
                requirement: "Processor",
                version: "Intel Core 2 Duo"
            },
            {
                requirement: "RAM",
                version: "2 GB RAM"
            }
        ],
        gallery: [
            "https://undertale.com/assets/images/characters/frisk.png",
            "https://undertale.com/assets/images/characters/sans.png",
            "https://undertale.com/assets/images/characters/papyrus.png"
        ]
    },
    {
        id: 3,
        title: "The Legend of Zelda: Breath of the Wild",
        description: "Embark on an epic journey through Hyrule in this open-world adventure. Solve puzzles, defeat monsters, and uncover the mysteries of the ancient kingdom.",
        photoLink: "https://media.wired.com/photos/633c95ef85e7a4cc2f802256/master/pass/Breath-of-the-Wild-Casual-Gamer-Culture.jpg",
        link: "https://www.zelda.com/breath-of-the-wild/",
        reviews: [
            {
                reviewer: "AdventureLover",
                reviewText: "A groundbreaking game that redefines open-world exploration!",
                rating: 10
            }
        ],
        news: [
            {
                title: "DLC Pack Released",
                date: "2024-09-25",
                content: "The new DLC pack includes additional quests and features!"
            }
        ],
        versions: [
            {
                versionNumber: "1.6",
                releaseDate: "2024-09-22"
            }
        ],
        requirements: [
            {
                requirement: "Operating system",
                version: "Nintendo Switch or Wii U"
            },
            {
                requirement: "Processor",
                version: "N/A"
            },
            {
                requirement: "RAM",
                version: "N/A"
            }
        ],
        gallery: [
            "https://www.zelda.com/assets/images/breathofthewild/keyart.jpg",
            "https://www.zelda.com/assets/images/breathofthewild/screenshots/02.jpg",
            "https://www.zelda.com/assets/images/breathofthewild/screenshots/03.jpg"
        ]
    },
    {
        id: 4,
        title: "Cyberpunk 2077",
        description: "Immerse yourself in Night City, a vibrant metropolis obsessed with power, glamour, and body modification. Play as V, a customizable mercenary with a story shaped by your choices.",
        photoLink: "https://store-images.s-microsoft.com/image/apps.36537.14143814686075364.7e443c56-2382-4bea-8ceb-35638e527cd6.475937df-e65f-4850-b2f0-471c2966f074",
        link: "https://www.cyberpunk.net/en/",
        reviews: [
            {
                reviewer: "TechWizard",
                reviewText: "A visually stunning game with deep storytelling and gameplay mechanics.",
                rating: 8
            }
        ],
        news: [
            {
                title: "Major Patch Released",
                date: "2024-09-24",
                content: "The patch improves gameplay stability and introduces new features."
            }
        ],
        versions: [
            {
                versionNumber: "1.7",
                releaseDate: "2024-09-23"
            }
        ],
        requirements: [
            {
                requirement: "Operating system",
                version: "Windows 10 or higher"
            },
            {
                requirement: "Processor",
                version: "Intel Core i7 or AMD Ryzen 5"
            },
            {
                requirement: "RAM",
                version: "12 GB RAM"
            }
        ],
        gallery: [
            "https://www.cyberpunk.net/en/assets/images/screenshot1.jpg",
            "https://www.cyberpunk.net/en/assets/images/screenshot2.jpg",
            "https://www.cyberpunk.net/en/assets/images/screenshot3.jpg"
        ]
    },
    {
        id: 5,
        title: "Stardew Valley",
        description: "Escape to the countryside and build your dream farm in Stardew Valley. Plant crops, raise animals, fish, and engage with the local community in this charming farming simulator.",
        photoLink: "https://i.ytimg.com/vi/WLA2lsas4J8/maxresdefault.jpg",
        link: "https://www.stardewvalley.net/",
        reviews: [
            {
                reviewer: "FarmFanatic",
                reviewText: "A relaxing and addictive game that offers endless possibilities!",
                rating: 9
            }
        ],
        news: [
            {
                title: "Update 1.6 Now Live",
                date: "2024-09-21",
                content: "The update includes new crops and seasonal events!"
            }
        ],
        versions: [
            {
                versionNumber: "1.6",
                releaseDate: "2024-09-20"
            }
        ],
        requirements: [
            {
                requirement: "Operating system",
                version: "Windows 7 or higher"
            },
            {
                requirement: "Processor",
                version: "Dual-core from Intel or AMD"
            },
            {
                requirement: "RAM",
                version: "4 GB RAM"
            }
        ],
        gallery: [
            "https://www.stardewvalley.net/assets/images/screenshot1.jpg",
            "https://www.stardewvalley.net/assets/images/screenshot2.jpg",
            "https://www.stardewvalley.net/assets/images/screenshot3.jpg"
        ]
    }
];

export default gamesDB;
