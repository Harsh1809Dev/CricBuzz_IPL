require("chromedriver");

const wd = require("selenium-webdriver");
const browser = new wd.Builder().forBrowser('chrome').build();
let final_data = {};
let no_players = [];
let urls = [];


async function main(){
	await browser.get("https://www.cricbuzz.com/");
	await browser.wait(wd.until.elementLocated(wd.By.css(".cb-hm-mnu-itm")));
	let nav_bar = await browser.findElements(wd.By.css(".cb-hm-mnu-itm"));
	await nav_bar[2].click();
	await browser.wait(wd.until.elementLocated(wd.By.css(".cb-yr-tmline")));
	let years_arr = await browser.findElements(wd.By.css(".cb-yr-tmline"));
	let year_arr = await years_arr[1].findElements(wd.By.css("a"));
	await year_arr[year_arr.length -1].click();
	await browser.wait(wd.until.elementLocated(wd.By.css(".cb-col-84.cb-col")));
	let leagues = await browser.findElements(wd.By.css(".cb-col-84.cb-col"));
	let t_20_leagues = await leagues[1].findElements(wd.By.css(".text-hvr-underline"));
	await t_20_leagues[4].click();
	await browser.wait(wd.until.elementLocated(wd.By.css(".cb-nav-tab")));
	let squads = await browser.findElements(wd.By.css(".cb-nav-tab"));
	await squads[5].click();
	await browser.wait(wd.until.elementLocated(wd.By.css(".cb-col.cb-col-20 a")));
	let teams = await browser.findElements(wd.By.css(".cb-col.cb-col-20 a"));
	final_data["no_of_teams"] = teams.length;
	final_data["teams"] = {};
	for(let i = 0 ; i < teams.length ; i++){
		let team_name = await teams[i].getAttribute("innerText");
		final_data.teams[team_name] = {} ;
		//await browser.wait(wd.until.elementLocated(wd.By.css("a.cb-col.cb-col-50")));
		//let players = await browser.findElements(wd.By.css("a.cb-col.cb-col-50"));
		//no_players.push(players.length);
	}
	for(let i = 0 ; i < Object.keys(final_data.teams).length ; i++){
		setTimeout(click , 10000);
	}
	//await browser.close();
	console.log(final_data);
}

main();