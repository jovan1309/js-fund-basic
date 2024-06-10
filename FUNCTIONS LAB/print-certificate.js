function formatGrade(grade) {
    if (grade < 3) {
        result = `Fail (2)`;
    } else if (grade >= 3 && grade < 3.5) {
        result = `Poor (${grade.toFixed(2)})`;
    } else if (grade >= 3.5 && grade < 4.5) {
        result = `Good (${grade.toFixed(2)})`;
    } else if (grade >= 4.5 && grade < 5.5) {
        result = `Very good (${grade.toFixed(2)})`;
    } else {
        result = `Excellent (${grade.toFixed(2)})`;
    }

    return result;
}

function printCertificate(grade, namesArray) {
    const gradeMsg = formatGrade(grade);
    const firstName = namesArray[0];
    const lastName = namesArray[1];

    console.log("~~~- {@} -~~~");
    console.log("~- Certificate -~");
    console.log("~~~- ~---~ -~~~");
    console.log(`${firstName} ${lastName}`);
    console.log(gradeMsg);
}

printCertificate(5.25, ['Peter', 'Ivanov']);