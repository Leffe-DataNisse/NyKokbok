const ingrediensRegister = {
    Hogrev: {
        namn: "Högrev",
        allergen: "",
        energi_kj: 900,
        energi_kcal: 215,
        fett: 15.0,
        kolhydrater: 0.0,
        socker: 0.0,
        protein: 20.0,
        pris: 25.00,
        enhet: 100
    },
    Innanlar: {
        namn: "Lövbiff av innanlår",
        allergen: "",
        energi_kj: 464,
        energi_kcal: 110,
        fett: 1.6,
        kolhydrater: 0.5,
        socker: 0.5,
        protein: 24.0,
        pris: 20.30,
        enhet: 100
    },
    Notfars: {
        namn: "Nötfärs 12%",
        allergen: "",
        energi_kj: 700,
        energi_kcal: 170,
        fett: 12.0,
        kolhydrater: 0.0,
        socker: 0.0,
        protein: 15.0,
        pris: 13.19,
        enhet: 100
    },
    Blandfars: {
        namn: "Blandfärs Färsk 20%",
        allergen: "",
        energi_kj: 1046,
        energi_kcal: 252,
        fett: 20,
        kolhydrater: 0.5,
        socker: 0.5,
        protein: 18,
        pris: 12.00,
        enhet: 100
    },
    Kalvfars: {
        namn: "Kalvfärs",
        allergen: "",
        energi_kj: 600,
        energi_kcal: 140,
        fett: 7.0,
        kolhydrater: 0.0,
        socker: 0.0,
        protein: 20.0,
        pris: 20.90,
        enhet: 100
    },
    Lax: {
        namn: "Laxfilé",
        allergen: "Fisk",
        energi_kj: 900,
        energi_kcal: 215,
        fett: 15.0,
        kolhydrater: 0.0,
        socker: 0.0,
        protein: 20.0,
        pris: 30.00,
        enhet: 100
    },
    Stromming: {
        namn: "Strömming",
        allergen: "Fisk",
        energi_kj: 800,
        energi_kcal: 190,
        fett: 10.0,
        kolhydrater: 0.0,
        socker: 0.0,
        protein: 20.0,
        pris: 15.00,
        enhet: 100
    },
    Agg: {
        namn: "Ägg",
        allergen: "Ägg",
        energi_kj: 575,
        energi_kcal: 137,
        fett: 9.7,
        kolhydrater: 0.6,
        socker: 0.6,
        protein: 12.6,
        pris: 5.00,
        enhet: 100
    },
    Mjolk: {
        namn: "Färsk standardmjölk",
        allergen: "Mjölk",
        energi_kj: 248,
        energi_kcal: 59,
        fett: 3.0,
        kolhydrater: 4.6,
        socker: 4.6,
        protein: 3.5,
        pris: 1.29,
        enhet: 100
    },
    Gradde: {
        namn: "Vispgrädde 36%",
        allergen: "Mjölk",
        energi_kj: 1421,
        energi_kcal: 345,
        fett: 36.0,
        kolhydrater: 3.2,
        socker: 3.2,
        protein: 2.3,
        pris: 5.39,
        enhet: 100
    },
    Smor: {
        namn: "Smör",
        allergen: "Mjölk",
        energi_kj: 3000,
        energi_kcal: 717,
        fett: 81.0,
        kolhydrater: 0.0,
        socker: 0.0,
        protein: 0.5,
        pris: 6.00,
        enhet: 100
    },
    Potatis: {
        namn: "Potatis",
        allergen: "",
        energi_kj: 320,
        energi_kcal: 77,
        fett: 0.1,
        kolhydrater: 17.0,
        socker: 0.8,
        protein: 2.0,
        pris: 1.00,
        enhet: 100
    },
    Morot: {
        namn: "Morötter",
        allergen: "",
        energi_kj: 170,
        energi_kcal: 41,
        fett: 0.2,
        kolhydrater: 10.0,
        socker: 4.7,
        protein: 0.9,
        pris: 2.00,
        enhet: 100
    },
    Lok: {
        namn: "Lök",
        allergen: "",
        energi_kj: 170,
        energi_kcal: 40,
        fett: 0.1,
        kolhydrater: 9.3,
        socker: 4.2,
        protein: 1.1,
        pris: 1.50,
        enhet: 100
    },
    Purjolok: {
        namn: "Purjolök",
        allergen: "",
        energi_kj: 138,
        energi_kcal: 33,
        fett: 0.2,
        kolhydrater: 5.0,
        socker: 0.0,
        protein: 2.0,
        pris: 4.19,
        enhet: 100
    },
    Dill: {
        namn: "Dill",
        allergen: "",
        energi_kj: 150,
        energi_kcal: 36,
        fett: 0.5,
        kolhydrater: 7.0,
        socker: 0.0,
        protein: 3.9,
        pris: 10.00,
        enhet: 100
    },
    Vetemjol: {
        namn: "Vetemjöl",
        allergen: "Gluten",
        energi_kj: 1520,
        energi_kcal: 364,
        fett: 1.0,
        kolhydrater: 76.0,
        socker: 0.3,
        protein: 10.0,
        pris: 1.00,
        enhet: 100
    },
    Strosocker: {
        namn: "Garant Strösocker",
        allergen: "",
        energi_kj: 1700,
        energi_kcal: 400,
        fett: 0.0,
        kolhydrater: 100,
        socker: 100,
        protein: 0.0,
        pris: 1.95,
        enhet: 100
    },
    Strobrod: {
        namn: "Ströbröd",
        allergen: "Gluten",
        energi_kj: 1633,
        energi_kcal: 386,
        fett: 5.4,
        kolhydrater: 71,
        socker: 5.5,
        protein: 11,
        pris: 4.8,
        enhet: 100
    },
    PassTomat: {
        namn: "Passerade tomater",
        allergen: "",
        energi_kj: 100,
        energi_kcal: 24,
        fett: 0.0,
        kolhydrater: 0.0,
        socker: 0.0,
        protein: 0.0,
        pris: 5.00,
        enhet: 100
    },
    Attika: {
        namn: "Ättika 12%",
        allergen: "",
        energi_kj: 0,
        energi_kcal: 0,
        fett: 0.0,
        kolhydrater: 0.0,
        socker: 0.0,
        protein: 0.0,
        pris: 2.19,
        enhet: 100
    },
    Dijon: {
        namn: "Dijonsenap",
        allergen: "Senap",
        energi_kj: 670,
        energi_kcal: 161,
        fett: 11.0,
        kolhydrater: 4.0,
        socker: 1.8,
        protein: 7.2,
        pris: 16.26,
        enhet: 100
    },
    HPsauce: {
        namn: "Heinz HP Sauce",
        allergen: "Gluten",
        energi_kj: 517,
        energi_kcal: 122,
        fett: 0.1,
        kolhydrater: 28.3,
        socker: 23.1,
        protein: 0.9,
        pris: 11.61,
        enhet: 100
    },
    Kapris: {
        namn: "Zeta Kapris Små",
        allergen: "",
        energi_kj: 83,
        energi_kcal: 20,
        fett: 0.6,
        kolhydrater: 0.0,
        socker: 0.0,
        protein: 1.7,
        pris: 58.58,
        enhet: 100
    },
    Sardell: {
        namn: "Zeta Sardeller",
        allergen: "Fisk",
        energi_kj: 2084,
        energi_kcal: 501,
        fett: 49.0,
        kolhydrater: 0.0,
        socker: 0.0,
        protein: 15.0,
        pris: 50.28,
        enhet: 100
    }
};


document.querySelectorAll("[data-file]").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const file = link.dataset.file;

        fetch("recept/" + file)
            .then(r => r.text())
            .then(html => {
                document.getElementById("content").innerHTML = html;

                // Här kan du lägga till näringsberäkning senare
                // beraknaInfo();
                beraknaNaringsvarden();

            })
            .catch(err => {
                document.getElementById("content").innerHTML =
                    "<p>Kunde inte ladda receptet.</p>";
            });
    });
});

function beraknaNaringsvarden() {

    // 1. Hämta portioner från första posten
    const portionLi = document.querySelector('[data-ing="Portioner"]');
    const portioner = portionLi ? Number(portionLi.dataset.mangd) : 4;

    let totalKJ = 0;
    let totalKcal = 0;
    let totalFett = 0;
    let totalKolh = 0;
    let totalProt = 0;
    let totalPris = 0;
    let allergener = [];

    // 2. Loopa igenom alla ingredienser
    document.querySelectorAll('[data-ing]').forEach(item => {
        const id = item.dataset.ing;

        // Hoppa över "Portioner"-raden
        if (id === "Portioner") return;

        const mangd = Number(item.dataset.mangd);
        const info = ingrediensRegister[id];

        // Hoppa över ingredienser som saknar info
        if (!info) return;

        const faktor = mangd / info.enhet;

        totalKJ += info.energi_kj * faktor;
        totalKcal += info.energi_kcal * faktor;
        totalFett += info.fett * faktor;
        totalKolh += info.kolhydrater * faktor;
        totalProt += info.protein * faktor;
        totalPris += info.pris * faktor;

        if (info.allergen) allergener.push(info.allergen);
    });

    // 3. Fyll i rutan
    document.getElementById("energiInfo").textContent =
        `${Math.round(totalKJ / portioner)} kj / ${Math.round(totalKcal / portioner)} kcal`;

    document.getElementById("fettInfo").textContent =
        `${(totalFett / portioner).toFixed(1)} g`;

    document.getElementById("kolhInfo").textContent =
        `${(totalKolh / portioner).toFixed(1)} g`;

    document.getElementById("proteinInfo").textContent =
        `${(totalProt / portioner).toFixed(1)} g`;

    document.getElementById("prisInfo").textContent =
        (totalPris / portioner).toFixed(2).replace('.', ',');

    document.getElementById("allergenList").textContent =
        allergener.length ? [...new Set(allergener)].join(", ") : "Inga";

    // 4. Visa rutan
    document.getElementById("nutritionInfo").classList.remove("hidden");
}




