// قائمة الألعاب
const games = [
    {
        id: 1,
        name: "FIFA 2024",
        image: "assets/images/fifa2024.jpg",
        description: "أفضل لعبة كرة قدم لمحبي الرياضة."
    },
    {
        id: 2,
        name: "Spider-Man 2",
        image: "assets/images/spiderman2.jpg",
        description: "مغامرات مذهلة مع سبايدرمان."
    },
    {
        id: 3,
        name: "Call of Duty",
        image: "assets/images/callofduty.jpg",
        description: "استمتع بتجربة معارك مثيرة."
    }
];

// إضافة الألعاب إلى الصفحة
const gameList = document.querySelector(".game-list");

games.forEach((game) => {
    const gameCard = document.createElement("div");
    gameCard.classList.add("game-card");
    gameCard.innerHTML = `
        <img src="${game.image}" alt="${game.name}">
        <h3>${game.name}</h3>
        <p>${game.description}</p>
    `;
    gameList.appendChild(gameCard);
});