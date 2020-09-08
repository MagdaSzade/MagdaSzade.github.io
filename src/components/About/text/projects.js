export const  myProjects = [
    {
        text: "PixelArt",
        stack: "React.js Express.js MongoDB",
        summary: "Aplikacja służy do rysowania pikselartów", 
        responsibility: "całość.",
        http: "pixelartagainstsma.herokuapp.com",
        github: "github.com/MagdaSzade/pixelart",
        img: "./img/pixelart.png"
    },
    {
        text: "Pogodynka",
        stack: "VanillaJS Express.js",
        cooperators: [{name: "narghar", git:"github.com/narghar"}, {name:"marek0209", git:"github.com/marek0209"}, {name: "Pesidonvera", git:"github.com/Pesidonvera"}],
        summary: "Prosta aplikacja do sprawdzania aktualnej pogody w wybranym miejscu Polski",
        responsibility: "frontend oraz synchronizacja aplikacji z GoogleMapApi w zakresie autopodpowiedzi przy wpisywaniu lokalizacji.",
        http: "pogodynka-100.herokuapp.com/",
        github: "github.com/MagdaSzade/simply-weather-app",
        img: "./img/pogodynka.png"

    },
    {
        text: "Statki",
        stack: "VanillaJS",
        cooperators: [{name: "narghar", git:"github.com/narghar"}, {name:"marek0209", git:"github.com/marek0209"}, {name: "Pesidonvera", git:"github.com/Pesidonvera"}],
        summary: "Przeglądarkowa gra w statki",
        responsibility: "cała mechanika gry oraz automatyczny przeciwnik.",
        remark: "nie zrobiono wersji mobile frendly.",
        http: "simply-ships.000webhostapp.com/",
        github: "github.com/MagdaSzade/ships",
        img: "./img/ships.png"
    },
    {
        text: "Kino",
        stack: "React.js Express.js MongoDB",
        cooperators: [{name: "narghar", git:"github.com/narghar"}, {name:"marek0209", git:"github.com/marek0209"}, {name: "Pesidonvera", git:"github.com/Pesidonvera"}],
        summary: "Aplikacja służąca do zamawiania biletów w wymyślonym kinie",
        responsibility: "React.js, pomoc przy bazach danych",
        remark: "Aktualnie aplikacja nie działa.",
        http: null,
        github: "github.com/MagdaSzade/booking-tickets",
        img: "./img/cinema.png"
    },
    {
        text: "Tablica",
        stack: "Express.js MongoDB",
        cooperators: [{name: "narghar", git:"github.com/narghar"}, {name:"marek0209", git:"github.com/marek0209"}, {name: "Pesidonvera", git:"github.com/Pesidonvera"}],
        summary: "Najprostsza aplikacja to-do list",
        responsibility: "komunikacja z MongoDB.",
        remark: "Aktualnie aplikacja nie działa",
        http: null,
        github: "github.com/narghar/todo-app"
    },
]