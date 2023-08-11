window.addEventListener('DOMContentLoaded', init);
const opts = ['*', '/', '+', '-', '9', '8', '7', '6', '5', '4', '3', '2', '1', '0', '.']; // All Keys
const spec = ['*', '/', '+', '-']; // Special Function Keys

function init() {
    document.title = "JavaScript Calculator Project";
    let dec = false;
    let eva = false;

    const container = document.createElement('div');
    container.style.width = '600px';
    container.style.margin = 'auto';
    document.body.append(container);

    const output = document.createElement('input');
    output.setAttribute('type', 'text');
    output.style.width = '100%';
    output.style.textAlign = 'right';
    output.style.lineHeight = '50px';
    output.style.fontSize = '3em';
    container.append(output);

    const main = document.createElement('div');
    main.style.width = '100%';
    container.append(main);

    opts.forEach(function (val) {
        btnMaker(val, addOutput);
    });

    function btnMaker(value, clickFunction) {
        const btn = document.createElement('button');
        btn.setAttribute('type', 'button');
        btn.textContent = value;
        btn.val = value;

        btn.style.width = '23%';
        btn.style.lineHeight = '50px';
        btn.style.margin = '1%';
        btn.style.fontSize = '2em';

        btn.addEventListener('click', clickFunction);

        main.append(btn);
    }

    btnMaker('=', evalOutput);
    btnMaker('C', clrOutput);

    function cOutput(color) {
        output.style.border = color + ' 1px solid';
        output.style.color = color;
    }

    function evalOutput() {
        cOutput('black');
        if (output.value === "") cOutput('red');
        else if (eva) cOutput('red');
        else output.value = eval(output.value);

        dec = output.value.includes('.');
    }

    function clrOutput() {
        cOutput('black');
        output.value = "";
    }

    function addOutput(event) {
        cOutput('black');
        let char = event.target.val;
        if (char === '.') {
            if (dec) {
                char = '';
                cOutput('red');
            }
            else dec = true;
        }

        eva = spec.includes(char);
        if (eva) dec = false;

        output.value += char;
    }
}