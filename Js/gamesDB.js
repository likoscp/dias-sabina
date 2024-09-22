const gamesDB = [{
    id: 0, title: "Minecraft",
    description: "Minecraft is a game made up of blocks, creatures, and community. You can survive the night or build a work of art.",
    photoLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSbWOL6AqgFI9M4eblTENTH_X5OYkzBMpvZA&s",
    link: "https://www.minecraft.net/en-us",
    reviews: [{
        reviewer: "Just Guy",
        reviewText: "I don't like it. I like frontend more.",
        rating: 3
    }],
    news: [{
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
            requirement: "Processor ",
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
        "https://www.minecraft.net/content/dam/games/minecraft/key-art/Vanilla-PMP_Collection-Carousel-0_Buzzy-Bees_1280x768.jpg"]
}]
export default gamesDB;