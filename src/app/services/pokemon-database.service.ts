import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class PokemonDatabaseService {

	constructor() { }

	public allPokemon = [
        {
            id: "1",
            iconSource: "./assets/images/icons/1.png",
            species: "Bulbasaur",
            evolveToIds: ["2"]
        },
        {
            id: "2",
            iconSource: "./assets/images/icons/2.png",
            species: "Ivysaur",
            evolveToIds: ["3"]
        },
        {
            id: "3",
            iconSource: "./assets/images/icons/3.png",
            species: "Venusaur",
            evolveToIds: []
        },
        {
            id: "4",
            iconSource: "./assets/images/icons/4.png",
            species: "Charmander",
            evolveToIds: ["5"]
        },
        {
            id: "5",
            iconSource: "./assets/images/icons/5.png",
            species: "Charmeleon",
            evolveToIds: ["6"]
        },
        {
            id: "6",
            iconSource: "./assets/images/icons/6.png",
            species: "Charizard",
            evolveToIds: []
        },
        {
            id: "7",
            iconSource: "./assets/images/icons/7.png",
            species: "Squirtle",
            evolveToIds: ["8"]
        },
        {
            id: "8",
            iconSource: "./assets/images/icons/8.png",
            species: "Wartortle",
            evolveToIds: ["9"]
        },
        {
            id: "9",
            iconSource: "./assets/images/icons/9.png",
            species: "Blastoise",
            evolveToIds: []
        },
        {
            id: "10",
            iconSource: "./assets/images/icons/10.png",
            species: "Caterpie",
            evolveToIds: ["11"]
        },
        {
            id: "11",
            iconSource: "./assets/images/icons/11.png",
            species: "Metapod",
            evolveToIds: ["12"]
        },
        {
            id: "12",
            iconSource: "./assets/images/icons/12.png",
            species: "Butterfree",
            evolveToIds: []
        },
        {
            id: "13",
            iconSource: "./assets/images/icons/13.png",
            species: "Weedle",
            evolveToIds: ["14"]
        },
        {
            id: "14",
            iconSource: "./assets/images/icons/14.png",
            species: "Kakuna",
            evolveToIds: ["15"]
        },
        {
            id: "15",
            iconSource: "./assets/images/icons/15.png",
            species: "Beedrill",
            evolveToIds: []
        },
        {
            id: "16",
            iconSource: "./assets/images/icons/16.png",
            species: "Pidgey",
            evolveToIds: ["17"]
        },
        {
            id: "17",
            iconSource: "./assets/images/icons/17.png",
            species: "Pidgeotto",
            evolveToIds: ["18"]
        },
        {
            id: "18",
            iconSource: "./assets/images/icons/18.png",
            species: "Pidgeot",
            evolveToIds: []
        },
        {
            id: "19",
            iconSource: "./assets/images/icons/19.png",
            species: "Rattata",
            evolveToIds: ["20"]
        },
        {
            id: "20",
            iconSource: "./assets/images/icons/20.png",
            species: "Raticate",
            evolveToIds: []
        },
        {
            id: "21",
            iconSource: "./assets/images/icons/21.png",
            species: "Spearow",
            evolveToIds: ["22"]
        },
        {
            id: "22",
            iconSource: "./assets/images/icons/22.png",
            species: "Fearow",
            evolveToIds: []
        },
        {
            id: "23",
            iconSource: "./assets/images/icons/23.png",
            species: "Ekans",
            evolveToIds: ["24"]
        },
        {
            id: "24",
            iconSource: "./assets/images/icons/24.png",
            species: "Arbok",
            evolveToIds: []
        },
        {
            id: "25",
            iconSource: "./assets/images/icons/25.png",
            species: "Pikachu",
            evolveToIds: ["26"]
        },
        {
            id: "26",
            iconSource: "./assets/images/icons/26.png",
            species: "Raichu",
            evolveToIds: []
        },
        {
            id: "27",
            iconSource: "./assets/images/icons/27.png",
            species: "Sandshrew",
            evolveToIds: ["28"]
        },
        {
            id: "28",
            iconSource: "./assets/images/icons/28.png",
            species: "Sandslash",
            evolveToIds: []
        },
        {
            id: "29",
            iconSource: "./assets/images/icons/29.png",
            species: "Nidoran-F",
            evolveToIds: ["30"]
        },
        {
            id: "30",
            iconSource: "./assets/images/icons/30.png",
            species: "Nidorina",
            evolveToIds: ["31"]
        },
        {
            id: "31",
            iconSource: "./assets/images/icons/31.png",
            species: "Nidoqueen",
            evolveToIds: []
        },
        {
            id: "32",
            iconSource: "./assets/images/icons/32.png",
            species: "Nidoran-M",
            evolveToIds: ["33"]
        },
        {
            id: "33",
            iconSource: "./assets/images/icons/33.png",
            species: "Nidorino",
            evolveToIds: ["34"]
        },
        {
            id: "34",
            iconSource: "./assets/images/icons/34.png",
            species: "Nidoking",
            evolveToIds: []
        },
        {
            id: "35",
            iconSource: "./assets/images/icons/35.png",
            species: "Clefairy",
            evolveToIds: ["36"]
        },
        {
            id: "36",
            iconSource: "./assets/images/icons/36.png",
            species: "Clefable",
            evolveToIds: []
        },
        {
            id: "37",
            iconSource: "./assets/images/icons/37.png",
            species: "Vulpix",
            evolveToIds: ["38"]
        },
        {
            id: "38",
            iconSource: "./assets/images/icons/38.png",
            species: "Ninetales",
            evolveToIds: []
        },
        {
            id: "39",
            iconSource: "./assets/images/icons/39.png",
            species: "Jigglypuff",
            evolveToIds: ["40"]
        },
        {
            id: "40",
            iconSource: "./assets/images/icons/40.png",
            species: "Wigglytuff",
            evolveToIds: []
        },
        {
            id: "41",
            iconSource: "./assets/images/icons/41.png",
            species: "Zubat",
            evolveToIds: ["42"]
        },
        {
            id: "42",
            iconSource: "./assets/images/icons/42.png",
            species: "Golbat",
            evolveToIds: ["169"]
        },
        {
            id: "43",
            iconSource: "./assets/images/icons/43.png",
            species: "Oddish",
            evolveToIds: ["44"]
        },
        {
            id: "44",
            iconSource: "./assets/images/icons/44.png",
            species: "Gloom",
            evolveToIds: ["45", "182"]
        },
        {
            id: "45",
            iconSource: "./assets/images/icons/45.png",
            species: "Vileplume",
            evolveToIds: []
        },
        {
            id: "46",
            iconSource: "./assets/images/icons/46.png",
            species: "Paras",
            evolveToIds: ["47"]
        },
        {
            id: "47",
            iconSource: "./assets/images/icons/47.png",
            species: "Parasect",
            evolveToIds: []
        },
        {
            id: "48",
            iconSource: "./assets/images/icons/48.png",
            species: "Venonat",
            evolveToIds: ["49"]
        },
        {
            id: "49",
            iconSource: "./assets/images/icons/49.png",
            species: "Venomoth",
            evolveToIds: []
        },
        {
            id: "50",
            iconSource: "./assets/images/icons/50.png",
            species: "Diglett",
            evolveToIds: ["51"]
        },
        {
            id: "51",
            iconSource: "./assets/images/icons/51.png",
            species: "Dugtrio",
            evolveToIds: []
        },
        {
            id: "52",
            iconSource: "./assets/images/icons/52.png",
            species: "Meowth",
            evolveToIds: ["53"]
        },
        {
            id: "53",
            iconSource: "./assets/images/icons/53.png",
            species: "Persian",
            evolveToIds: []
        },
        {
            id: "54",
            iconSource: "./assets/images/icons/54.png",
            species: "Psyduck",
            evolveToIds: ["55"]
        },
        {
            id: "55",
            iconSource: "./assets/images/icons/55.png",
            species: "Golduck",
            evolveToIds: []
        },
        {
            id: "56",
            iconSource: "./assets/images/icons/56.png",
            species: "Mankey",
            evolveToIds: ["57"]
        },
        {
            id: "57",
            iconSource: "./assets/images/icons/57.png",
            species: "Primeape",
            evolveToIds: []
        },
        {
            id: "58",
            iconSource: "./assets/images/icons/58.png",
            species: "Growlithe",
            evolveToIds: ["59"]
        },
        {
            id: "59",
            iconSource: "./assets/images/icons/59.png",
            species: "Arcanine",
            evolveToIds: []
        },
        {
            id: "60",
            iconSource: "./assets/images/icons/60.png",
            species: "Poliwag",
            evolveToIds: ["61"]
        },
        {
            id: "61",
            iconSource: "./assets/images/icons/61.png",
            species: "Poliwhirl",
            evolveToIds: ["62"]
        },
        {
            id: "62",
            iconSource: "./assets/images/icons/62.png",
            species: "Poliwrath",
            evolveToIds: []
        },
        {
            id: "63",
            iconSource: "./assets/images/icons/63.png",
            species: "Abra",
            evolveToIds: ["64"]
        },
        {
            id: "64",
            iconSource: "./assets/images/icons/64.png",
            species: "Kadabra",
            evolveToIds: ["65"]
        },
        {
            id: "65",
            iconSource: "./assets/images/icons/65.png",
            species: "Alakazam",
            evolveToIds: []
        },
        {
            id: "66",
            iconSource: "./assets/images/icons/66.png",
            species: "Machop",
            evolveToIds: ["67"]
        },
        {
            id: "67",
            iconSource: "./assets/images/icons/67.png",
            species: "Machoke",
            evolveToIds: ["68"]
        },
        {
            id: "68",
            iconSource: "./assets/images/icons/68.png",
            species: "Machamp",
            evolveToIds: []
        },
        {
            id: "69",
            iconSource: "./assets/images/icons/69.png",
            species: "Bellsprout",
            evolveToIds: ["70"]
        },
        {
            id: "70",
            iconSource: "./assets/images/icons/70.png",
            species: "Weepinbell",
            evolveToIds: ["71"]
        },
        {
            id: "71",
            iconSource: "./assets/images/icons/71.png",
            species: "Victreebel",
            evolveToIds: []
        },
        {
            id: "72",
            iconSource: "./assets/images/icons/72.png",
            species: "Tentacool",
            evolveToIds: ["73"]
        },
        {
            id: "73",
            iconSource: "./assets/images/icons/73.png",
            species: "Tentacruel",
            evolveToIds: []
        },
        {
            id: "74",
            iconSource: "./assets/images/icons/74.png",
            species: "Geodude",
            evolveToIds: ["75"]
        },
        {
            id: "75",
            iconSource: "./assets/images/icons/75.png",
            species: "Graveler",
            evolveToIds: ["76"]
        },
        {
            id: "76",
            iconSource: "./assets/images/icons/76.png",
            species: "Golem",
            evolveToIds: []
        },
        {
            id: "77",
            iconSource: "./assets/images/icons/77.png",
            species: "Ponyta",
            evolveToIds: ["78"]
        },
        {
            id: "78",
            iconSource: "./assets/images/icons/78.png",
            species: "Rapidash",
            evolveToIds: []
        },
        {
            id: "79",
            iconSource: "./assets/images/icons/79.png",
            species: "Slowpoke",
            evolveToIds: ["80", "199"]
        },
        {
            id: "80",
            iconSource: "./assets/images/icons/80.png",
            species: "Slowbro",
            evolveToIds: []
        },
        {
            id: "81",
            iconSource: "./assets/images/icons/81.png",
            species: "Magnemite",
            evolveToIds: ["82"]
        },
        {
            id: "82",
            iconSource: "./assets/images/icons/82.png",
            species: "Magneton",
            evolveToIds: []
        },
        {
            id: "83",
            iconSource: "./assets/images/icons/83.png",
            species: "Farfetch\\d",
            evolveToIds: []
        },
        {
            id: "84",
            iconSource: "./assets/images/icons/84.png",
            species: "Doduo",
            evolveToIds: ["85"]
        },
        {
            id: "85",
            iconSource: "./assets/images/icons/85.png",
            species: "Dodrio",
            evolveToIds: []
        },
        {
            id: "86",
            iconSource: "./assets/images/icons/86.png",
            species: "Seel",
            evolveToIds: ["87"]
        },
        {
            id: "87",
            iconSource: "./assets/images/icons/87.png",
            species: "Dewgong",
            evolveToIds: []
        },
        {
            id: "88",
            iconSource: "./assets/images/icons/88.png",
            species: "Grimer",
            evolveToIds: ["89"]
        },
        {
            id: "89",
            iconSource: "./assets/images/icons/89.png",
            species: "Muk",
            evolveToIds: []
        },
        {
            id: "90",
            iconSource: "./assets/images/icons/90.png",
            species: "Shellder",
            evolveToIds: ["91"]
        },
        {
            id: "91",
            iconSource: "./assets/images/icons/91.png",
            species: "Cloyster",
            evolveToIds: []
        },
        {
            id: "92",
            iconSource: "./assets/images/icons/92.png",
            species: "Gastly",
            evolveToIds: ["93"]
        },
        {
            id: "93",
            iconSource: "./assets/images/icons/93.png",
            species: "Haunter",
            evolveToIds: ["94"]
        },
        {
            id: "94",
            iconSource: "./assets/images/icons/94.png",
            species: "Gengar",
            evolveToIds: []
        },
        {
            id: "95",
            iconSource: "./assets/images/icons/95.png",
            species: "Onix",
            evolveToIds: ["208"]
        },
        {
            id: "96",
            iconSource: "./assets/images/icons/96.png",
            species: "Drowzee",
            evolveToIds: ["97"]
        },
        {
            id: "97",
            iconSource: "./assets/images/icons/97.png",
            species: "Hypno",
            evolveToIds: []
        },
        {
            id: "98",
            iconSource: "./assets/images/icons/98.png",
            species: "Krabby",
            evolveToIds: ["99"]
        },
        {
            id: "99",
            iconSource: "./assets/images/icons/99.png",
            species: "Kingler",
            evolveToIds: []
        },
        {
            id: "100",
            iconSource: "./assets/images/icons/100.png",
            species: "Voltorb",
            evolveToIds: ["101"]
        },
        {
            id: "101",
            iconSource: "./assets/images/icons/101.png",
            species: "Electrode",
            evolveToIds: []
        },
        {
            id: "102",
            iconSource: "./assets/images/icons/102.png",
            species: "Exeggcute",
            evolveToIds: ["103"]
        },
        {
            id: "103",
            iconSource: "./assets/images/icons/103.png",
            species: "Exeggutor",
            evolveToIds: []
        },
        {
            id: "104",
            iconSource: "./assets/images/icons/104.png",
            species: "Cubone",
            evolveToIds: ["105"]
        },
        {
            id: "105",
            iconSource: "./assets/images/icons/105.png",
            species: "Marowak",
            evolveToIds: []
        },
        {
            id: "106",
            iconSource: "./assets/images/icons/106.png",
            species: "Hitmonlee",
            evolveToIds: []
        },
        {
            id: "107",
            iconSource: "./assets/images/icons/107.png",
            species: "Hitmonchan",
            evolveToIds: []
        },
        {
            id: "108",
            iconSource: "./assets/images/icons/108.png",
            species: "Lickitung",
            evolveToIds: []
        },
        {
            id: "109",
            iconSource: "./assets/images/icons/109.png",
            species: "Koffing",
            evolveToIds: ["110"]
        },
        {
            id: "110",
            iconSource: "./assets/images/icons/110.png",
            species: "Weezing",
            evolveToIds: []
        },
        {
            id: "111",
            iconSource: "./assets/images/icons/111.png",
            species: "Rhyhorn",
            evolveToIds: ["112"]
        },
        {
            id: "112",
            iconSource: "./assets/images/icons/112.png",
            species: "Rhydon",
            evolveToIds: []
        },
        {
            id: "113",
            iconSource: "./assets/images/icons/113.png",
            species: "Chansey",
            evolveToIds: ["242"]
        },
        {
            id: "114",
            iconSource: "./assets/images/icons/114.png",
            species: "Tangela",
            evolveToIds: []
        },
        {
            id: "115",
            iconSource: "./assets/images/icons/115.png",
            species: "Kangaskhan",
            evolveToIds: []
        },
        {
            id: "116",
            iconSource: "./assets/images/icons/116.png",
            species: "Horsea",
            evolveToIds: ["117"]
        },
        {
            id: "117",
            iconSource: "./assets/images/icons/117.png",
            species: "Seadra",
            evolveToIds: ["230"]
        },
        {
            id: "118",
            iconSource: "./assets/images/icons/118.png",
            species: "Goldeen",
            evolveToIds: ["119"]
        },
        {
            id: "119",
            iconSource: "./assets/images/icons/119.png",
            species: "Seaking",
            evolveToIds: []
        },
        {
            id: "120",
            iconSource: "./assets/images/icons/120.png",
            species: "Staryu",
            evolveToIds: ["121"]
        },
        {
            id: "121",
            iconSource: "./assets/images/icons/121.png",
            species: "Starmie",
            evolveToIds: []
        },
        {
            id: "122",
            iconSource: "./assets/images/icons/122.png",
            species: "Mr. Mime",
            evolveToIds: []
        },
        {
            id: "123",
            iconSource: "./assets/images/icons/123.png",
            species: "Scyther",
            evolveToIds: ["212"]
        },
        {
            id: "124",
            iconSource: "./assets/images/icons/124.png",
            species: "Jynx",
            evolveToIds: []
        },
        {
            id: "125",
            iconSource: "./assets/images/icons/125.png",
            species: "Electabuzz",
            evolveToIds: []
        },
        {
            id: "126",
            iconSource: "./assets/images/icons/126.png",
            species: "Magmar",
            evolveToIds: []
        },
        {
            id: "127",
            iconSource: "./assets/images/icons/127.png",
            species: "Pinsir",
            evolveToIds: []
        },
        {
            id: "128",
            iconSource: "./assets/images/icons/128.png",
            species: "Tauros",
            evolveToIds: []
        },
        {
            id: "129",
            iconSource: "./assets/images/icons/129.png",
            species: "Magikarp",
            evolveToIds: ["130"]
        },
        {
            id: "130",
            iconSource: "./assets/images/icons/130.png",
            species: "Gyarados",
            evolveToIds: []
        },
        {
            id: "131",
            iconSource: "./assets/images/icons/131.png",
            species: "Lapras",
            evolveToIds: []
        },
        {
            id: "132",
            iconSource: "./assets/images/icons/132.png",
            species: "Ditto",
            evolveToIds: []
        },
        {
            id: "133",
            iconSource: "./assets/images/icons/133.png",
            species: "Eevee",
            evolveToIds: ["134", "135", "136", "196", "197"]
        },
        {
            id: "134",
            iconSource: "./assets/images/icons/134.png",
            species: "Vaporeon",
            evolveToIds: []
        },
        {
            id: "135",
            iconSource: "./assets/images/icons/135.png",
            species: "Jolteon",
            evolveToIds: []
        },
        {
            id: "136",
            iconSource: "./assets/images/icons/136.png",
            species: "Flareon",
            evolveToIds: []
        },
        {
            id: "137",
            iconSource: "./assets/images/icons/137.png",
            species: "Porygon",
            evolveToIds: ["233"]
        },
        {
            id: "138",
            iconSource: "./assets/images/icons/138.png",
            species: "Omanyte",
            evolveToIds: ["139"]
        },
        {
            id: "139",
            iconSource: "./assets/images/icons/139.png",
            species: "Omastar",
            evolveToIds: []
        },
        {
            id: "140",
            iconSource: "./assets/images/icons/140.png",
            species: "Kabuto",
            evolveToIds: ["141"]
        },
        {
            id: "141",
            iconSource: "./assets/images/icons/141.png",
            species: "Kabutops",
            evolveToIds: []
        },
        {
            id: "142",
            iconSource: "./assets/images/icons/142.png",
            species: "Aerodactyl",
            evolveToIds: []
        },
        {
            id: "143",
            iconSource: "./assets/images/icons/143.png",
            species: "Snorlax",
            evolveToIds: []
        },
        {
            id: "144",
            iconSource: "./assets/images/icons/144.png",
            species: "Articuno",
            evolveToIds: []
        },
        {
            id: "145",
            iconSource: "./assets/images/icons/145.png",
            species: "Zapdos",
            evolveToIds: []
        },
        {
            id: "146",
            iconSource: "./assets/images/icons/146.png",
            species: "Moltres",
            evolveToIds: []
        },
        {
            id: "147",
            iconSource: "./assets/images/icons/147.png",
            species: "Dratini",
            evolveToIds: ["148"]
        },
        {
            id: "148",
            iconSource: "./assets/images/icons/148.png",
            species: "Dragonair",
            evolveToIds: ["149"]
        },
        {
            id: "149",
            iconSource: "./assets/images/icons/149.png",
            species: "Dragonite",
            evolveToIds: []
        },
        {
            id: "150",
            iconSource: "./assets/images/icons/150.png",
            species: "Mewtwo",
            evolveToIds: []
        },
        {
            id: "151",
            iconSource: "./assets/images/icons/151.png",
            species: "Mew",
            evolveToIds: []
        },

        {
            id: "152",
            iconSource: "./assets/images/icons/152.png",
            species: "Chikorita",
            evolveToIds: ["153"]
        },
        {
            id: "153",
            iconSource: "./assets/images/icons/153.png",
            species: "Bayleef",
            evolveToIds: ["154"]
        },
        {
            id: "154",
            iconSource: "./assets/images/icons/154.png",
            species: "Meganium",
            evolveToIds: []
        },
        {
            id: "155",
            iconSource: "./assets/images/icons/155.png",
            species: "Cyndaquil",
            evolveToIds: ["156"]
        },
        {
            id: "156",
            iconSource: "./assets/images/icons/156.png",
            species: "Quilava",
            evolveToIds: ["157"]
        },
        {
            id: "157",
            iconSource: "./assets/images/icons/157.png",
            species: "Typhlosion",
            evolveToIds: []
        },
        {
            id: "158",
            iconSource: "./assets/images/icons/158.png",
            species: "Totodile",
            evolveToIds: ["159"]
        },
        {
            id: "159",
            iconSource: "./assets/images/icons/159.png",
            species: "Croconaw",
            evolveToIds: ["160"]
        },
        {
            id: "160",
            iconSource: "./assets/images/icons/160.png",
            species: "Feraligatr",
            evolveToIds: []
        },
        {
            id: "161",
            iconSource: "./assets/images/icons/161.png",
            species: "Sentret",
            evolveToIds: ["162"]
        },
        {
            id: "162",
            iconSource: "./assets/images/icons/162.png",
            species: "Furret",
            evolveToIds: []
        },
        {
            id: "163",
            iconSource: "./assets/images/icons/163.png",
            species: "Hoothoot",
            evolveToIds: ["164"]
        },
        {
            id: "164",
            iconSource: "./assets/images/icons/164.png",
            species: "Noctowl",
            evolveToIds: []
        },
        {
            id: "165",
            iconSource: "./assets/images/icons/165.png",
            species: "Ledyba",
            evolveToIds: ["166"]
        },
        {
            id: "166",
            iconSource: "./assets/images/icons/166.png",
            species: "Ledian",
            evolveToIds: []
        },
        {
            id: "167",
            iconSource: "./assets/images/icons/167.png",
            species: "Spinarak",
            evolveToIds: ["168"]
        },
        {
            id: "168",
            iconSource: "./assets/images/icons/168.png",
            species: "Ariados",
            evolveToIds: []
        },
        {
            id: "169",
            iconSource: "./assets/images/icons/169.png",
            species: "Crobat",
            evolveToIds: []
        },
        {
            id: "170",
            iconSource: "./assets/images/icons/170.png",
            species: "Chinchou",
            evolveToIds: ["171"]
        },
        {
            id: "171",
            iconSource: "./assets/images/icons/171.png",
            species: "Lanturn",
            evolveToIds: []
        },
        {
            id: "172",
            iconSource: "./assets/images/icons/172.png",
            species: "Pichu",
            evolveToIds: ["25"]
        },
        {
            id: "173",
            iconSource: "./assets/images/icons/173.png",
            species: "Cleffa",
            evolveToIds: ["35"]
        },
        {
            id: "174",
            iconSource: "./assets/images/icons/174.png",
            species: "Igglybuff",
            evolveToIds: ["39"]
        },
        {
            id: "175",
            iconSource: "./assets/images/icons/175.png",
            species: "Togepi",
            evolveToIds: ["176"]
        },
        {
            id: "176",
            iconSource: "./assets/images/icons/176.png",
            species: "Togetic",
            evolveToIds: []
        },
        {
            id: "177",
            iconSource: "./assets/images/icons/177.png",
            species: "Natu",
            evolveToIds: ["178"]
        },
        {
            id: "178",
            iconSource: "./assets/images/icons/178.png",
            species: "Xatu",
            evolveToIds: []
        },
        {
            id: "179",
            iconSource: "./assets/images/icons/179.png",
            species: "Mareep",
            evolveToIds: ["180"]
        },
        {
            id: "180",
            iconSource: "./assets/images/icons/180.png",
            species: "Flaaffy",
            evolveToIds: ["181"]
        },
        {
            id: "181",
            iconSource: "./assets/images/icons/181.png",
            species: "Ampharos",
            evolveToIds: []
        },
        {
            id: "182",
            iconSource: "./assets/images/icons/182.png",
            species: "Bellossom",
            evolveToIds: []
        },
        {
            id: "183",
            iconSource: "./assets/images/icons/183.png",
            species: "Marill",
            evolveToIds: ["184"]
        },
        {
            id: "184",
            iconSource: "./assets/images/icons/184.png",
            species: "Azumarill",
            evolveToIds: []
        },
        {
            id: "185",
            iconSource: "./assets/images/icons/185.png",
            species: "Sudowoodo",
            evolveToIds: []
        },
        {
            id: "186",
            iconSource: "./assets/images/icons/186.png",
            species: "Politoed",
            evolveToIds: []
        },
        {
            id: "187",
            iconSource: "./assets/images/icons/187.png",
            species: "Hoppip",
            evolveToIds: ["188"]
        },
        {
            id: "188",
            iconSource: "./assets/images/icons/188.png",
            species: "Skiploom",
            evolveToIds: ["189"]
        },
        {
            id: "189",
            iconSource: "./assets/images/icons/189.png",
            species: "Jumpluff",
            evolveToIds: []
        },
        {
            id: "190",
            iconSource: "./assets/images/icons/190.png",
            species: "Aipom",
            evolveToIds: []
        },
        {
            id: "191",
            iconSource: "./assets/images/icons/191.png",
            species: "Sunkern",
            evolveToIds: ["192"]
        },
        {
            id: "192",
            iconSource: "./assets/images/icons/192.png",
            species: "Sunflora",
            evolveToIds: []
        },
        {
            id: "193",
            iconSource: "./assets/images/icons/193.png",
            species: "Yanma",
            evolveToIds: []
        },
        {
            id: "194",
            iconSource: "./assets/images/icons/194.png",
            species: "Wooper",
            evolveToIds: ["195"]
        },
        {
            id: "195",
            iconSource: "./assets/images/icons/195.png",
            species: "Quagsire",
            evolveToIds: []
        },
        {
            id: "196",
            iconSource: "./assets/images/icons/196.png",
            species: "Espeon",
            evolveToIds: []
        },
        {
            id: "197",
            iconSource: "./assets/images/icons/197.png",
            species: "Umbreon",
            evolveToIds: []
        },
        {
            id: "198",
            iconSource: "./assets/images/icons/198.png",
            species: "Murkrow",
            evolveToIds: []
        },
        {
            id: "199",
            iconSource: "./assets/images/icons/199.png",
            species: "Slowking",
            evolveToIds: []
        },
        {
            id: "200",
            iconSource: "./assets/images/icons/200.png",
            species: "Misdreavus",
            evolveToIds: []
        },
        {
            id: "201",
            iconSource: "./assets/images/icons/201.png",
            species: "Unown",
            evolveToIds: []
        },
        {
            id: "202",
            iconSource: "./assets/images/icons/202.png",
            species: "Wobbuffet",
            evolveToIds: []
        },
        {
            id: "203",
            iconSource: "./assets/images/icons/203.png",
            species: "Girafarig",
            evolveToIds: []
        },
        {
            id: "204",
            iconSource: "./assets/images/icons/204.png",
            species: "Pineco",
            evolveToIds: ["205"]
        },
        {
            id: "205",
            iconSource: "./assets/images/icons/205.png",
            species: "Forretress",
            evolveToIds: []
        },
        {
            id: "206",
            iconSource: "./assets/images/icons/206.png",
            species: "Dunsparce",
            evolveToIds: []
        },
        {
            id: "207",
            iconSource: "./assets/images/icons/207.png",
            species: "Gligar",
            evolveToIds: []
        },
        {
            id: "208",
            iconSource: "./assets/images/icons/208.png",
            species: "Steelix",
            evolveToIds: []
        },
        {
            id: "209",
            iconSource: "./assets/images/icons/209.png",
            species: "Snubbull",
            evolveToIds: ["210"]
        },
        {
            id: "210",
            iconSource: "./assets/images/icons/210.png",
            species: "Granbull",
            evolveToIds: []
        },
        {
            id: "211",
            iconSource: "./assets/images/icons/211.png",
            species: "Qwilfish",
            evolveToIds: []
        },
        {
            id: "212",
            iconSource: "./assets/images/icons/212.png",
            species: "Scizor",
            evolveToIds: []
        },
        {
            id: "213",
            iconSource: "./assets/images/icons/213.png",
            species: "Shuckle",
            evolveToIds: []
        },
        {
            id: "214",
            iconSource: "./assets/images/icons/214.png",
            species: "Heracross",
            evolveToIds: []
        },
        {
            id: "215",
            iconSource: "./assets/images/icons/215.png",
            species: "Sneasel",
            evolveToIds: []
        },
        {
            id: "216",
            iconSource: "./assets/images/icons/216.png",
            species: "Teddiursa",
            evolveToIds: ["217"]
        },
        {
            id: "217",
            iconSource: "./assets/images/icons/217.png",
            species: "Ursaring",
            evolveToIds: []
        },
        {
            id: "218",
            iconSource: "./assets/images/icons/218.png",
            species: "Slugma",
            evolveToIds: ["219"]
        },
        {
            id: "219",
            iconSource: "./assets/images/icons/219.png",
            species: "Magcargo",
            evolveToIds: []
        },
        {
            id: "220",
            iconSource: "./assets/images/icons/220.png",
            species: "Swinub",
            evolveToIds: ["221"]
        },
        {
            id: "221",
            iconSource: "./assets/images/icons/221.png",
            species: "Piloswine",
            evolveToIds: []
        },
        {
            id: "222",
            iconSource: "./assets/images/icons/222.png",
            species: "Corsola",
            evolveToIds: []
        },
        {
            id: "223",
            iconSource: "./assets/images/icons/223.png",
            species: "Remoraid",
            evolveToIds: ["224"]
        },
        {
            id: "224",
            iconSource: "./assets/images/icons/224.png",
            species: "Octillery",
            evolveToIds: []
        },
        {
            id: "225",
            iconSource: "./assets/images/icons/225.png",
            species: "Delibird",
            evolveToIds: []
        },
        {
            id: "226",
            iconSource: "./assets/images/icons/226.png",
            species: "Mantine",
            evolveToIds: []
        },
        {
            id: "227",
            iconSource: "./assets/images/icons/227.png",
            species: "Skarmory",
            evolveToIds: []
        },
        {
            id: "228",
            iconSource: "./assets/images/icons/228.png",
            species: "Houndour",
            evolveToIds: ["229"]
        },
        {
            id: "229",
            iconSource: "./assets/images/icons/229.png",
            species: "Houndoom",
            evolveToIds: []
        },
        {
            id: "230",
            iconSource: "./assets/images/icons/230.png",
            species: "Kingdra",
            evolveToIds: []
        },
        {
            id: "231",
            iconSource: "./assets/images/icons/231.png",
            species: "Phanpy",
            evolveToIds: ["232"]
        },
        {
            id: "232",
            iconSource: "./assets/images/icons/232.png",
            species: "Donphan",
            evolveToIds: []
        },
        {
            id: "233",
            iconSource: "./assets/images/icons/233.png",
            species: "Porygon2",
            evolveToIds: []
        },
        {
            id: "234",
            iconSource: "./assets/images/icons/234.png",
            species: "Stantler",
            evolveToIds: []
        },
        {
            id: "235",
            iconSource: "./assets/images/icons/235.png",
            species: "Smeargle",
            evolveToIds: []
        },
        {
            id: "236",
            iconSource: "./assets/images/icons/236.png",
            species: "Tyrogue",
            evolveToIds: ["106", "107", "237"]
        },
        {
            id: "237",
            iconSource: "./assets/images/icons/237.png",
            species: "Hitmontop",
            evolveToIds: []
        },
        {
            id: "238",
            iconSource: "./assets/images/icons/238.png",
            species: "Smoochum",
            evolveToIds: ["124"]
        },
        {
            id: "239",
            iconSource: "./assets/images/icons/239.png",
            species: "Elekid",
            evolveToIds: ["125"]
        },
        {
            id: "240",
            iconSource: "./assets/images/icons/240.png",
            species: "Magby",
            evolveToIds: ["126"]
        },
        {
            id: "241",
            iconSource: "./assets/images/icons/241.png",
            species: "Miltank",
            evolveToIds: ["242"]
        },
        {
            id: "242",
            iconSource: "./assets/images/icons/242.png",
            species: "Blissey",
            evolveToIds: []
        },
        {
            id: "243",
            iconSource: "./assets/images/icons/243.png",
            species: "Raikou",
            evolveToIds: []
        },
        {
            id: "244",
            iconSource: "./assets/images/icons/244.png",
            species: "Entei",
            evolveToIds: []
        },
        {
            id: "245",
            iconSource: "./assets/images/icons/245.png",
            species: "Suicune",
            evolveToIds: []
        },
        {
            id: "246",
            iconSource: "./assets/images/icons/246.png",
            species: "Larvitar",
            evolveToIds: ["247"]
        },
        {
            id: "247",
            iconSource: "./assets/images/icons/247.png",
            species: "Pupitar",
            evolveToIds: ["248"]
        },
        {
            id: "248",
            iconSource: "./assets/images/icons/248.png",
            species: "Tyranitar",
            evolveToIds: []
        },
        {
            id: "249",
            iconSource: "./assets/images/icons/249.png",
            species: "Lugia",
            evolveToIds: []
        },
        {
            id: "250",
            iconSource: "./assets/images/icons/250.png",
            species: "Ho-oh",
            evolveToIds: []
        },
        {
            id: "251",
            iconSource: "./assets/images/icons/251.png",
            species: "Celebi",
            evolveToIds: []
        },
        {
            id: "252",
            iconSource: "./assets/images/icons/252.png",
            species: "Treecko",
            evolveToIds: ["253"]
        },
        {
            id: "253",
            iconSource: "./assets/images/icons/253.png",
            species: "Grovyle",
            evolveToIds: ["254"]
        },
        {
            id: "254",
            iconSource: "./assets/images/icons/254.png",
            species: "Sceptile",
            evolveToIds: []
        },
        {
            id: "255",
            iconSource: "./assets/images/icons/255.png",
            species: "Torchic",
            evolveToIds: ["256"]
        },
        {
            id: "256",
            iconSource: "./assets/images/icons/256.png",
            species: "Combusken",
            evolveToIds: ["257"]
        },
        {
            id: "257",
            iconSource: "./assets/images/icons/257.png",
            species: "Blaziken",
            evolveToIds: []
        },
        {
            id: "258",
            iconSource: "./assets/images/icons/258.png",
            species: "Mudkip",
            evolveToIds: ["259"]
        },
        {
            id: "259",
            iconSource: "./assets/images/icons/259.png",
            species: "Marshtomp",
            evolveToIds: ["260"]
        },
        {
            id: "260",
            iconSource: "./assets/images/icons/260.png",
            species: "Swampert",
            evolveToIds: []
        },
        {
            id: "261",
            iconSource: "./assets/images/icons/261.png",
            species: "Poochyena",
            evolveToIds: ["262"]
        },
        {
            id: "262",
            iconSource: "./assets/images/icons/262.png",
            species: "Mightyena",
            evolveToIds: []
        },
        {
            id: "263",
            iconSource: "./assets/images/icons/263.png",
            species: "Zigzagoon",
            evolveToIds: ["264"]
        },
        {
            id: "264",
            iconSource: "./assets/images/icons/264.png",
            species: "Linoone",
            evolveToIds: []
        },
        {
            id: "265",
            iconSource: "./assets/images/icons/265.png",
            species: "Wurmple",
            evolveToIds: ["266", "268"]
        },
        {
            id: "266",
            iconSource: "./assets/images/icons/266.png",
            species: "Silcoon",
            evolveToIds: ["267"]
        },
        {
            id: "267",
            iconSource: "./assets/images/icons/267.png",
            species: "Beautifly",
            evolveToIds: []
        },
        {
            id: "268",
            iconSource: "./assets/images/icons/268.png",
            species: "Cascoon",
            evolveToIds: ["269"]
        },
        {
            id: "269",
            iconSource: "./assets/images/icons/269.png",
            species: "Dustox",
            evolveToIds: []
        },
        {
            id: "270",
            iconSource: "./assets/images/icons/270.png",
            species: "Lotad",
            evolveToIds: ["271"]
        },
        {
            id: "271",
            iconSource: "./assets/images/icons/271.png",
            species: "Lombre",
            evolveToIds: ["272"]
        },
        {
            id: "272",
            iconSource: "./assets/images/icons/272.png",
            species: "Ludicolo",
            evolveToIds: []
        },
        {
            id: "273",
            iconSource: "./assets/images/icons/273.png",
            species: "Seedot",
            evolveToIds: ["274"]
        },
        {
            id: "274",
            iconSource: "./assets/images/icons/274.png",
            species: "Nuzleaf",
            evolveToIds: ["275"]
        },
        {
            id: "275",
            iconSource: "./assets/images/icons/275.png",
            species: "Shiftry",
            evolveToIds: []
        },
        {
            id: "276",
            iconSource: "./assets/images/icons/276.png",
            species: "Taillow",
            evolveToIds: ["277"]
        },
        {
            id: "277",
            iconSource: "./assets/images/icons/277.png",
            species: "Swellow",
            evolveToIds: []
        },
        {
            id: "278",
            iconSource: "./assets/images/icons/278.png",
            species: "Wingull",
            evolveToIds: ["279"]
        },
        {
            id: "279",
            iconSource: "./assets/images/icons/279.png",
            species: "Pelipper",
            evolveToIds: []
        },
        {
            id: "280",
            iconSource: "./assets/images/icons/280.png",
            species: "Ralts",
            evolveToIds: ["281"]
        },
        {
            id: "281",
            iconSource: "./assets/images/icons/281.png",
            species: "Kirlia",
            evolveToIds: ["282"]
        },
        {
            id: "282",
            iconSource: "./assets/images/icons/282.png",
            species: "Gardevoir",
            evolveToIds: []
        },
        {
            id: "283",
            iconSource: "./assets/images/icons/283.png",
            species: "Surskit",
            evolveToIds: ["284"]
        },
        {
            id: "284",
            iconSource: "./assets/images/icons/284.png",
            species: "Masquerain",
            evolveToIds: []
        },
        {
            id: "285",
            iconSource: "./assets/images/icons/285.png",
            species: "Shroomish",
            evolveToIds: ["286"]
        },
        {
            id: "286",
            iconSource: "./assets/images/icons/286.png",
            species: "Breloom",
            evolveToIds: []
        },
        {
            id: "287",
            iconSource: "./assets/images/icons/287.png",
            species: "Slakoth",
            evolveToIds: ["288"]
        },
        {
            id: "288",
            iconSource: "./assets/images/icons/288.png",
            species: "Vigoroth",
            evolveToIds: ["289"]
        },
        {
            id: "289",
            iconSource: "./assets/images/icons/289.png",
            species: "Slaking",
            evolveToIds: []
        },
        {
            id: "290",
            iconSource: "./assets/images/icons/290.png",
            species: "Nincada",
            evolveToIds: ["291", "292"]
        },
        {
            id: "291",
            iconSource: "./assets/images/icons/291.png",
            species: "Ninjask",
            evolveToIds: []
        },
        {
            id: "292",
            iconSource: "./assets/images/icons/292.png",
            species: "Shedinja",
            evolveToIds: []
        },
        {
            id: "293",
            iconSource: "./assets/images/icons/293.png",
            species: "Whismur",
            evolveToIds: ["294"]
        },
        {
            id: "294",
            iconSource: "./assets/images/icons/294.png",
            species: "Loudred",
            evolveToIds: ["295"]
        },
        {
            id: "295",
            iconSource: "./assets/images/icons/295.png",
            species: "Exploud",
            evolveToIds: []
        },
        {
            id: "296",
            iconSource: "./assets/images/icons/296.png",
            species: "Makuhita",
            evolveToIds: ["297"]
        },
        {
            id: "297",
            iconSource: "./assets/images/icons/297.png",
            species: "Hariyama",
            evolveToIds: []
        },
        {
            id: "298",
            iconSource: "./assets/images/icons/298.png",
            species: "Azurill",
            evolveToIds: ["184"]
        },
        {
            id: "299",
            iconSource: "./assets/images/icons/299.png",
            species: "Nosepass",
            evolveToIds: []
        },
        {
            id: "300",
            iconSource: "./assets/images/icons/300.png",
            species: "Skitty",
            evolveToIds: ["301"]
        },
        {
            id: "301",
            iconSource: "./assets/images/icons/301.png",
            species: "Delcatty",
            evolveToIds: []
        },
        {
            id: "302",
            iconSource: "./assets/images/icons/302.png",
            species: "Sableye",
            evolveToIds: []
        },
        {
            id: "303",
            iconSource: "./assets/images/icons/303.png",
            species: "Mawile",
            evolveToIds: []
        },
        {
            id: "304",
            iconSource: "./assets/images/icons/304.png",
            species: "Aron",
            evolveToIds: ["305"]
        },
        {
            id: "305",
            iconSource: "./assets/images/icons/305.png",
            species: "Lairon",
            evolveToIds: ["306"]
        },
        {
            id: "306",
            iconSource: "./assets/images/icons/306.png",
            species: "Aggron",
            evolveToIds: []
        },
        {
            id: "307",
            iconSource: "./assets/images/icons/307.png",
            species: "Meditite",
            evolveToIds: ["308"]
        },
        {
            id: "308",
            iconSource: "./assets/images/icons/308.png",
            species: "Medicham",
            evolveToIds: []
        },
        {
            id: "309",
            iconSource: "./assets/images/icons/309.png",
            species: "Electrike",
            evolveToIds: ["310"]
        },
        {
            id: "310",
            iconSource: "./assets/images/icons/310.png",
            species: "Manectric",
            evolveToIds: []
        },
        {
            id: "311",
            iconSource: "./assets/images/icons/311.png",
            species: "Plusle",
            evolveToIds: []
        },
        {
            id: "312",
            iconSource: "./assets/images/icons/312.png",
            species: "Minun",
            evolveToIds: []
        },
        {
            id: "313",
            iconSource: "./assets/images/icons/313.png",
            species: "Volbeat",
            evolveToIds: []
        },
        {
            id: "314",
            iconSource: "./assets/images/icons/314.png",
            species: "Illumise",
            evolveToIds: []
        },
        {
            id: "315",
            iconSource: "./assets/images/icons/315.png",
            species: "Roselia",
            evolveToIds: []
        },
        {
            id: "316",
            iconSource: "./assets/images/icons/316.png",
            species: "Gulpin",
            evolveToIds: ["317"]
        },
        {
            id: "317",
            iconSource: "./assets/images/icons/317.png",
            species: "Swalot",
            evolveToIds: []
        },
        {
            id: "318",
            iconSource: "./assets/images/icons/318.png",
            species: "Carvanha",
            evolveToIds: ["319"]
        },
        {
            id: "319",
            iconSource: "./assets/images/icons/319.png",
            species: "Sharpedo",
            evolveToIds: []
        },
        {
            id: "320",
            iconSource: "./assets/images/icons/320.png",
            species: "Wailmer",
            evolveToIds: ["321"]
        },
        {
            id: "321",
            iconSource: "./assets/images/icons/321.png",
            species: "Wailord",
            evolveToIds: []
        },
        {
            id: "322",
            iconSource: "./assets/images/icons/322.png",
            species: "Numel",
            evolveToIds: ["323"]
        },
        {
            id: "323",
            iconSource: "./assets/images/icons/323.png",
            species: "Camerupt",
            evolveToIds: []
        },
        {
            id: "324",
            iconSource: "./assets/images/icons/324.png",
            species: "Torkoal",
            evolveToIds: []
        },
        {
            id: "325",
            iconSource: "./assets/images/icons/325.png",
            species: "Spoink",
            evolveToIds: ["326"]
        },
        {
            id: "326",
            iconSource: "./assets/images/icons/326.png",
            species: "Grumpig",
            evolveToIds: []
        },
        {
            id: "327",
            iconSource: "./assets/images/icons/327.png",
            species: "Spinda",
            evolveToIds: []
        },
        {
            id: "328",
            iconSource: "./assets/images/icons/328.png",
            species: "Trapinch",
            evolveToIds: ["329"]
        },
        {
            id: "329",
            iconSource: "./assets/images/icons/329.png",
            species: "Vibrava",
            evolveToIds: ["330"]
        },
        {
            id: "330",
            iconSource: "./assets/images/icons/330.png",
            species: "Flygon",
            evolveToIds: []
        },
        {
            id: "331",
            iconSource: "./assets/images/icons/331.png",
            species: "Cacnea",
            evolveToIds: ["332"]
        },
        {
            id: "332",
            iconSource: "./assets/images/icons/332.png",
            species: "Cacturne",
            evolveToIds: []
        },
        {
            id: "333",
            iconSource: "./assets/images/icons/333.png",
            species: "Swablu",
            evolveToIds: ["334"]
        },
        {
            id: "334",
            iconSource: "./assets/images/icons/334.png",
            species: "Altaria",
            evolveToIds: []
        },
        {
            id: "335",
            iconSource: "./assets/images/icons/335.png",
            species: "Zangoose",
            evolveToIds: []
        },
        {
            id: "336",
            iconSource: "./assets/images/icons/336.png",
            species: "Seviper",
            evolveToIds: []
        },
        {
            id: "337",
            iconSource: "./assets/images/icons/337.png",
            species: "Lunatone",
            evolveToIds: []
        },
        {
            id: "338",
            iconSource: "./assets/images/icons/338.png",
            species: "Solrock",
            evolveToIds: []
        },
        {
            id: "339",
            iconSource: "./assets/images/icons/339.png",
            species: "Barboach",
            evolveToIds: ["340"]
        },
        {
            id: "340",
            iconSource: "./assets/images/icons/340.png",
            species: "Whiscash",
            evolveToIds: []
        },
        {
            id: "341",
            iconSource: "./assets/images/icons/341.png",
            species: "Corphish",
            evolveToIds: ["342"]
        },
        {
            id: "342",
            iconSource: "./assets/images/icons/342.png",
            species: "Crawdaunt",
            evolveToIds: []
        },
        {
            id: "343",
            iconSource: "./assets/images/icons/343.png",
            species: "Baltoy",
            evolveToIds: ["344"]
        },
        {
            id: "344",
            iconSource: "./assets/images/icons/344.png",
            species: "Claydol",
            evolveToIds: []
        },
        {
            id: "345",
            iconSource: "./assets/images/icons/345.png",
            species: "Lileep",
            evolveToIds: ["346"]
        },
        {
            id: "346",
            iconSource: "./assets/images/icons/346.png",
            species: "Cradily",
            evolveToIds: []
        },
        {
            id: "347",
            iconSource: "./assets/images/icons/347.png",
            species: "Anorith",
            evolveToIds: ["348"]
        },
        {
            id: "348",
            iconSource: "./assets/images/icons/348.png",
            species: "Armaldo",
            evolveToIds: []
        },
        {
            id: "349",
            iconSource: "./assets/images/icons/349.png",
            species: "Feebas",
            evolveToIds: ["350"]
        },
        {
            id: "350",
            iconSource: "./assets/images/icons/350.png",
            species: "Milotic",
            evolveToIds: []
        },
        {
            id: "351",
            iconSource: "./assets/images/icons/351.png",
            species: "Castform",
            evolveToIds: []
        },
        {
            id: "352",
            iconSource: "./assets/images/icons/352.png",
            species: "Kecleon",
            evolveToIds: []
        },
        {
            id: "353",
            iconSource: "./assets/images/icons/353.png",
            species: "Shuppet",
            evolveToIds: ["354"]
        },
        {
            id: "354",
            iconSource: "./assets/images/icons/354.png",
            species: "Banette",
            evolveToIds: []
        },
        {
            id: "355",
            iconSource: "./assets/images/icons/355.png",
            species: "Duskull",
            evolveToIds: ["356"]
        },
        {
            id: "356",
            iconSource: "./assets/images/icons/356.png",
            species: "Dusclops",
            evolveToIds: []
        },
        {
            id: "357",
            iconSource: "./assets/images/icons/357.png",
            species: "Tropius",
            evolveToIds: []
        },
        {
            id: "358",
            iconSource: "./assets/images/icons/358.png",
            species: "Chimecho",
            evolveToIds: []
        },
        {
            id: "359",
            iconSource: "./assets/images/icons/359.png",
            species: "Absol",
            evolveToIds: []
        },
        {
            id: "360",
            iconSource: "./assets/images/icons/360.png",
            species: "Wynaut",
            evolveToIds: ["202"]
        },
        {
            id: "361",
            iconSource: "./assets/images/icons/361.png",
            species: "Snorunt",
            evolveToIds: ["362"]
        },
        {
            id: "362",
            iconSource: "./assets/images/icons/362.png",
            species: "Glalie",
            evolveToIds: []
        },
        {
            id: "363",
            iconSource: "./assets/images/icons/363.png",
            species: "Spheal",
            evolveToIds: ["364"]
        },
        {
            id: "364",
            iconSource: "./assets/images/icons/364.png",
            species: "Sealeo",
            evolveToIds: ["365"]
        },
        {
            id: "365",
            iconSource: "./assets/images/icons/365.png",
            species: "Walrein",
            evolveToIds: []
        },
        {
            id: "366",
            iconSource: "./assets/images/icons/366.png",
            species: "Clamperl",
            evolveToIds: ["367", "368"]
        },
        {
            id: "367",
            iconSource: "./assets/images/icons/367.png",
            species: "Huntail",
            evolveToIds: []
        },
        {
            id: "368",
            iconSource: "./assets/images/icons/368.png",
            species: "Gorebyss",
            evolveToIds: []
        },
        {
            id: "369",
            iconSource: "./assets/images/icons/369.png",
            species: "Relicanth",
            evolveToIds: []
        },
        {
            id: "370",
            iconSource: "./assets/images/icons/370.png",
            species: "Luvdisc",
            evolveToIds: []
        },
        {
            id: "371",
            iconSource: "./assets/images/icons/371.png",
            species: "Bagon",
            evolveToIds: ["372"]
        },
        {
            id: "372",
            iconSource: "./assets/images/icons/372.png",
            species: "Shelgon",
            evolveToIds: ["373"]
        },
        {
            id: "373",
            iconSource: "./assets/images/icons/373.png",
            species: "Salamence",
            evolveToIds: []
        },
        {
            id: "374",
            iconSource: "./assets/images/icons/374.png",
            species: "Beldum",
            evolveToIds: ["375"]
        },
        {
            id: "375",
            iconSource: "./assets/images/icons/375.png",
            species: "Metang",
            evolveToIds: ["376"]
        },
        {
            id: "376",
            iconSource: "./assets/images/icons/376.png",
            species: "Metagross",
            evolveToIds: []
        },
        {
            id: "377",
            iconSource: "./assets/images/icons/377.png",
            species: "Regirock",
            evolveToIds: []
        },
        {
            id: "378",
            iconSource: "./assets/images/icons/378.png",
            species: "Regice",
            evolveToIds: []
        },
        {
            id: "379",
            iconSource: "./assets/images/icons/379.png",
            species: "Registeel",
            evolveToIds: []
        },
        {
            id: "380",
            iconSource: "./assets/images/icons/380.png",
            species: "Latias",
            evolveToIds: []
        },
        {
            id: "381",
            iconSource: "./assets/images/icons/381.png",
            species: "Latios",
            evolveToIds: []
        },
        {
            id: "382",
            iconSource: "./assets/images/icons/382.png",
            species: "Kyogre",
            evolveToIds: []
        },
        {
            id: "383",
            iconSource: "./assets/images/icons/383.png",
            species: "Groudon",
            evolveToIds: []
        },
        {
            id: "384",
            iconSource: "./assets/images/icons/384.png",
            species: "Rayquaza",
            evolveToIds: []
        },
        {
            id: "385",
            iconSource: "./assets/images/icons/385.png",
            species: "Jirachi",
            evolveToIds: []
        },
        {
            id: "386",
            iconSource: "./assets/images/icons/386.png",
            species: "Deoxys",
            evolveToIds: []
        },


    ];


}