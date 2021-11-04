let konutKredileri = ["Konut kredisi", "Emlak Konut Kredisi","Kamu Konut Kredisi"]
console.log("<ul>")

for (let index = 0; index < konutKredileri.length; index++) {
	const element = konutKredileri[index];
	console.log("<li>"+ element + "</li>")
}

console.log("</ul>")