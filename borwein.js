/*
** EPITECH PROJECT, 2025
** B-MAT-200-COT-2-1-110borwein-stella.gbaguidi
** File description:
** borwein
*/

function ver_val_abs(x)
{
    if (Math.abs(x) < 1e-8)
        return 1.0;
    if (x != 0)
        return Math.sin(x) / x;
    else
        return 0;
}

function function_evaluation(x, n)
{
    let b = 0;
    let f = 1.0;

    for (let k = 0; k < n + 1; k++) {
        b = x / (2 * k + 1);
        if (b == 0)
            break;
        if (b < 0)
            b = b * (-1);
        f *= ver_val_abs(b);
    }
    return f;
}

function midpoint()
{
    let a = 0;
    let b = 5000;
    let n = parseInt(document.getElementById("n").value);
    let tmp = 0.0;
    let f = 0.0;
    let h = Number(b - a) / 10000;

    for (let k = 0; k < 10000; k++) {
        tmp = a + (h * (k + 0.5));
        f += function_evaluation(tmp, n);
    }
    f = f * h;
    result = "Midpoint:\n"
    result += `I${n} = ${f.toFixed(10)}\n`
    result += `diff${n} = ${3.1415926535 / 2}`
    document.getElementById("mid").innerText = result;
    return result;
}

function trapezoidal()
{
    let a = 0;
    let b = 5000;
    let n = parseInt(document.getElementById("n").value);
    let tmp = 0.0;
    let f = 0.5 * (function_evaluation(a, n) + function_evaluation(b, n));
    let h = Number(b - a) / 10000;

    for (let k = 1; k < 10000; k++) {
        tmp = a + (h * k);
        f += function_evaluation(tmp, n);
    }
    f = f * h;
    result = "Trapezoidal:\n"
    result += `I${n} = ${f.toFixed(10)}\n`
    result += `diff${n} = ${3.1415926535 / 2}`
    document.getElementById("trap").innerText = result;
    return result;
}
function simpson()
{
    let a = 0;
    let b = 5000;
    let n = parseInt(document.getElementById("n").value);
    let r = 0;
    let x = 0;
    let i = 0;
    let j = 0;
    let k = 0;
    let l = 0;
    let m = 0;
    let o = 0;

    a = 0;
    b = 0.5;
    while (b <= 5000) {
        i = function_evaluation(a, n);
        j = function_evaluation(b, n);
        k = function_evaluation((a + b) / 2, n);
        l = i + (4 * k) + j;
        m = (b - a) / 6;
        o = m * l;
        r += o;
        a += 0.5;
        b += 0.5;
    }
    result = "Simpson:\n"
    result += `I${n} = ${r.toFixed(10)}\n`
    result += `diff${n} = ${3.1415926535 / 2}`
    document.getElementById("simp").innerText = result;
    return result;
}