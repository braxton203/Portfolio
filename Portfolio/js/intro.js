let header = document.querySelector('#intro');
let anim = [
    { t: "{ }", ms: 300 },
    { t: "{_}", ms: 300 },
    { t: "{ }", ms: 300 },
    { t: "{_}", ms: 300 },
    { t: "{B_}", ms: 100 },
    { t: "{BR_}", ms: 100 },
    { t: "{BRA_}", ms: 100 },
    { t: "{BRAX_}", ms: 100 },
    { t: "{BRAXT_}", ms: 100 },
    { t: "{BRAXTO_}", ms: 100 },
    { t: "{BRAXTON_}", ms: 300 },
    { t: "{BRAXTON }", ms: 300 },
    { t: "{BRAXTON_}", ms: 300 },
    { t: "{BRAXTON }", ms: 300 },
    { t: "{BRAXTON_}", ms: 300 },
    { t: "{BRAXTON _}", ms: 100 },
    { t: "{BRAXTON C_}", ms: 100 },
    { t: "{BRAXTON CO_}", ms: 100 },
    { t: "{BRAXTON CON_}", ms: 100 },
    { t: "{BRAXTON CONL_}", ms: 100 },
    { t: "{BRAXTON CONLE_}", ms: 100 },
    { t: "{BRAXTON CONLEY_}", ms: 100 },
    { t: "{BRAXTON CONLEY }", ms: 300 },
    { t: "{BRAXTON CONLEY_}", ms: 300 },
    { t: "{BRAXTON CONLEY }", ms: 300 },
    { t: "{BRAXTON CONLEY_}", ms: 300 },
    { t: "{BRAXTON CONLEY}", ms: 200 },
    { t: "{BRAXTON CONLEY}", ms: 200 }
];
let stepDenominator = 1;
if (window.localStorage.stepDenominator)
    stepDenominator = window.localStorage.stepDenominator;
let i = 0;
let update = () => {
    let step = anim[i];
    header.innerText = step.t;
    i++;

    if (i < anim.length)
        setTimeout(update, step.ms / stepDenominator);
    else {
        header.classList.add('top');
        setTimeout(() => {
            document.getElementById('main').style.opacity = 1;
            initGlobe();
        }, 500);
        window.localStorage.stepDenominator = 2;
    }
}
update();