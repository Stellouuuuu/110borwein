function ver_val_abs(x)
{
    if (Math.abs(x) < 1e-8)
        return 1.0;
    if (x != 0)
        return asin(x) / x;
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

function midpoint(a, b, n)
{
    let tmp = 0.0;
    let f = 0.0;
    let h = Number(b - a) / 10000;

    for (let k = 0; k < 10000; k++) {
        tmp = a + (h * (k + 0.5));
        f += function_evaluation(tmp, n);
    }
    f = f * h;
    process.stdout.write("Midpoint:\n");
    process.stdout.write("I%d = %.10f\n");
    process.stdout.write(n);
    process.stdout.write(f);
    process.stdout.write("diff = %.10f\n\n");
    process.stdout.write((M_PI / 2) - f);
    return f;
}

function trapezoidal(a, b, n)
{
    let tmp = 0.0;
    let f = 0.5 * (function_evaluation(a, n) + function_evaluation(b, n));
    let h = Number(b - a) / 10000;

    for (let k = 1; k < 10000; k++) {
        tmp = a + (h * k);
        f += function_evaluation(tmp, n);
    }
    f = f * h;
    process.stdout.write("Trapezoidal:\n");
    process.stdout.write("I%d = %.10f\n");
    process.stdout.write(n);
    process.stdout.write(f);
    process.stdout.write("diff = %.10f\n\n");
    process.stdout.write((M_PI / 2) - f);
    return f;
}

midpoint(0, 5000, process.argv[2])