window.onload = function () {
    let listOfQuestions = [
        ["varför är utvecklare så bra att anställa när du vill städa ur garaget?", "dom lägger allt i en container."],
        ["varför ska du anställa ett flexbox-proffs på julafton?", "dom är grymma på att wrappa."],
        ["vad kallar man en HTML-utvecklare?", "en bodybuilder."],
        ["varför använder ryska utvecklare bara input-elementet?", "dom älskar putin."],
        ["när märktes bristen på frontend-utvecklare i Sverige av som mest?", "vid malmös gräns under flyktingkrisen, man hittade inte personal som kunde .getDocumentByID."],
        ["varför måste utvecklare ha VVS-personal som sköter deras arkivering?", "för dom .getDocumentByElement."],
        ["varför sitter alla utvecklare vid fönstret och väntar på att deras sidor ska ladda klart?", "dom har lagt window.addEventListener('load', function());"],
        ["varför ska man inte anställa CSS-utvecklare att sköta internationell diplomati?", "så fort dom hittar ett fel så skapar dom en border."],
        ["vad kallar utvecklare ytan framför spegeln på ett gym?", "flexbox."],
        ["varför är det så svårt att ta av skorna på en dålig utvecklare?", "dom använder bootstrap."],
        ["hur fortplantar utvecklare sig?", ".appendChild()."],
        ["vilken variabeltyp är picassos favorit?", "const."],
        ["vilken variabeltyp väger minst?", "let."],
        ["vilken variabeltyp är svårast att hitta?", "var."],
        ["vilken bank har alla JS-utvecklare?", "nodea."],
        ["vad kallas indonesiens skriftspråk?", "javascript."],
        ["varför ska du aldrig ropa högt på ett IT-kontor?", "då kan personalen bli utvecklingsstörd."],
        ["vilken typ av funktion måste du undvika om du har problem med myror?", "rekursiv, med den blir det lätt stack overflow."],
        ["var bor utvecklare när det är krig?", "databas."],
        ["vilket är utvecklares favoritinstrument?", "databas.", ["varför vinner du alltid rap-battle mot en css-utvecklare", "dom kör nowrap."], ["vilken pojkband älskar css-utvecklare?", "flex-direction"], ["varför låter det så dåligt när css-utvecklare ska beatboxa?", "dom försöker flexboxa."]]
    ]
    
    let whatJoke = Math.floor(Math.random()*23)

    let question = document.getElementById("question");
    let answer = document.getElementById("answer");
    let newJoke = document.getElementById("newJoke"); 
    
    console.log(listOfQuestions[whatJoke][0])
    
    question.innerHTML = listOfQuestions[whatJoke][0]
    answer.innerHTML = listOfQuestions[whatJoke][1]
    
    newJoke.addEventListener("click", function(){
        whatJoke = Math.floor(Math.random()*23);
         question.innerHTML = listOfQuestions[whatJoke][0]
    answer.innerHTML = listOfQuestions[whatJoke][1]
    })
    
    
}