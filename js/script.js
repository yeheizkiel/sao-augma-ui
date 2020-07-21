function pageLoad() {
let set;
let t;
let cd = 3;

    blind();

    function date () {
        let header = document.getElementsByTagName('header')[0];
        let dateElem = header.createElement("DIV");
        dateElem.id = "date";
        set = new Date().toTimeString();
        t = set.substr(0, 5);
        dateElem.innerHTML = t;
        setTimeout(date,500);
    }

    function blind() {
        if (cd > 0) {
            document.getElementById('blinder').innerHTML = cd;
            cd--;
            setTimeout(blind, 1000);
        } else {
            document.getElementById('blinder').innerHTML = '';
            return;
        }
    }    
}

function animNone() {
    document.getElementById('blinder').style.display = 'none';
    document.getElementById('blinder').style.animation = 'none';
}


