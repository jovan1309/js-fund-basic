function repeatString(str, count) {
    let result = '';

    for (let i = 0; i < count; i++) {
        result += str;
    }

    console.log(result);
}

repeatString('abc', 3);
repeatString('String', 2);