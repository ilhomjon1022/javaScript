const numberOfSeries = +prompt("Nechta serial ko'rdingiz?", "");

const seriesDB = {
  count: numberOfSeries,
  series: {},
  actors: {},
  genres: [],
  private: false,
};

let i = 1;

while (numberOfSeries >= i) {
  const a = prompt("Oxirgi ko'rgan serialingiz?"),
    b = prompt("Nechi baxo berasiz?");

  if (a != null && b != null && a != "" && b != "") {
    seriesDB.series[a] = b;
    console.log("done");
    i++;
  } else {
    console.log("error");
    i--;
  }
}

if (seriesDB.count < 5) {
  console.log("Kam serial ko'ribsiz");
} else if (seriesDB.count >= 5 && seriesDB.count < 10) {
  console.log("Siz classik tomoshabin ekansiz");
} else if (seriesDB.count >= 10) {
  console.log("Siz serialchi zvezda ekansiz");
} else {
  console.log("error");
}

console.log(seriesDB);
