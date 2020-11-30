var quotes = [];
quotes[0] = "양식"
quotes[1] = "일식"
quotes[2] = "중식"
quotes[3] = "한식"
quotes[4] = "패스트푸드"
quotes[5] = "동남아"


var index = Math.floor(Math.random() * 6);
document.write("<p>&quot;" + quotes[index] + "&quot;</p>")

