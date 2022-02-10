
/*let name = document.getElementById('text1').value;
console.log(name)
const api_key = `70cfcba7-7423-41de-b848-5e2b9e4b9429`;
const api_url = `https://playerdb.co/api/player/minecraft/dcmacd`;*/


let img = document.createElement("img"); 
img.src = `https://crafatar.com/avatars/069a79f444e94726a5befca90e38aaf5`;
let src = document.getElementById("x"); 
src.appendChild(img);


const BASE = 10_000;
const GROWTH = 2_500;
const REVERSE_PQ_PREFIX = -(BASE - 0.5 * GROWTH) / GROWTH;
const REVERSE_CONST = REVERSE_PQ_PREFIX;
const GROWTH_DIVIDES_2 = 2 / GROWTH;

async function getStats() {
    let name = document.getElementById('text1').value;
    console.log(name)
    const api_key = ``;
    const api_url = `https://playerdb.co/api/player/minecraft/${name}`;
    const response = await fetch(api_url);
    const data = await response.json();
    const uuid = data.data.player.id;
    const response2 = await fetch(`https://api.hypixel.net/player?key=${api_key}&uuid=${uuid}`);
    const data2 = await response2.json();

    const username = data2.player.displayname;
    const fkills = data2.player.stats.Bedwars.final_kills_bedwars;
    const fdeaths = data2.player.stats.Bedwars.final_deaths_bedwars;
    const wins = data2.player.stats.Bedwars.wins_bedwars;
    const losses = data2.player.stats.Bedwars.losses_bedwars;
    const fkdr = (fkills / fdeaths).toFixed(2);
    const wlr = (wins / losses).toFixed(2);
    const star = data2.player.achievements.bedwars_level
    const exp = data2.player.networkExp;
    const expfinal = Math.floor(1 + REVERSE_PQ_PREFIX + Math.sqrt(REVERSE_CONST + GROWTH_DIVIDES_2 * exp));

    let rank = '';

    if (data2.player.rank) { // Check if is ADMIN, MOD, HELPER, YT...
        rank = data2.player.rank; // player.prefix exist here as well
    } else if (data2.player.monthlyPackageRank && data2.player.monthlyPackageRank !== 'NONE') { // Check if is MVP++
        rank = 'MVP++'
    } else if (data2.player.newPackageRank) { // Check if is VIP...MVP+
        rank = data2.player.newPackageRank.replace('_PLUS', '+');
    } else {
        rank = 'Non-Rank';
    }

    if (rank === data2.player.rank) {
    document.getElementById('rank').textContent = `[${rank}]`
    document.getElementById('rank').style.color = "#8b0000";
    document.getElementById('username').textContent = `${username}`;
    document.getElementById('username').style.color = "#8b0000";
    } else if (rank === 'MVP++') {
        document.getElementById('rank').textContent = `[${rank}]`
        document.getElementById('rank').style.color = "#FFAA00";
        document.getElementById('username').textContent = `${username}`;
        document.getElementById('username').style.color = "#FFAA00";
    } else if (rank === 'MVP+') {
        document.getElementById('rank').textContent = `[${rank}]`
        document.getElementById('rank').style.color = "#55FFFF";
        document.getElementById('username').textContent = `${username}`;
        document.getElementById('username').style.color = "#55FFFF";
    } else if (rank === 'MVP') {
        document.getElementById('rank').textContent = `[${rank}]`
        document.getElementById('rank').style.color = "#55FFFF";
        document.getElementById('username').textContent = `${username}`;
        document.getElementById('username').style.color = "#55FFFF";
    }   else if (rank === 'VIP' || 'VIP+') {
        document.getElementById('rank').textContent = `[${rank}]`
        document.getElementById('rank').style.color = "#55FF55";
        document.getElementById('username').textContent = `${username}`;
        document.getElementById('username').style.color = "#55FF55";
    } else {
        document.getElementById('rank').textContent = `[${rank}]`
        document.getElementById('rank').style.color = "#AAAAAA";
        document.getElementById('username').textContent = `${username}`;
        document.getElementById('username').style.color = "#AAAAAA";
    }

    
    if (star < 100){
        document.getElementById('star').textContent = `${star}☆`;
        document.getElementById('star').style.color = '#AAAAAA';
    } else if (star < 200) {
        document.getElementById('star').textContent = `${star}☆`;
        document.getElementById('star').style.color = 'white';
    } else if (star < 300) {
        document.getElementById('star').textContent = `${star}☆`;
        document.getElementById('star').style.color = '#FFAA00';
    } else if (star < 400) {
        document.getElementById('star').textContent = `${star}☆`;
        document.getElementById('star').style.color = '#55FFFF';
    } else if (star < 500) {
        document.getElementById('star').textContent = `${star}☆`;
        document.getElementById('star').style.color = '#00AA00';
    } else if (star < 600) {
        document.getElementById('star').textContent = `${star}☆`;
        document.getElementById('star').style.color = '#00AAAA';
    } else if (star < 700) {
        document.getElementById('star').textContent = `${star}☆`;
        document.getElementById('star').style.color = '#AA0000';
    } else if (star < 800) {
        document.getElementById('star').textContent = `${star}☆`;
        document.getElementById('star').style.color = '#FF00FF';
    } else if (star < 900) {
        document.getElementById('star').textContent = `${star}☆`;
        document.getElementById('star').style.color = '#0000AA';
    } else if (star >= 900) {
        document.getElementById('star').textContent = `${star}☆`;
        document.getElementById('star').style.color = '#CC8899';
    } else if (star >= 900) {
        document.getElementById('star').textContent = `${star}☆`;
        document.getElementById('star').style.color = '#CC8899';
    } 
    
    document.getElementById('fkills').textContent = fkills;
    document.getElementById('fdeaths').textContent = fdeaths;
    document.getElementById('fkdr').textContent = fkdr;
    document.getElementById('wins').textContent = wins;
    document.getElementById('losses').textContent = losses;
    document.getElementById('wlr').textContent = wlr;
    document.getElementById('level').textContent = expfinal;

    //img = document.createElement("img");
    img.src = `https://crafatar.com/avatars/${uuid}`;
    let src = document.getElementById("x"); 
    src.replaceChild(img);

}

