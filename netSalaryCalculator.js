//const payee = result;
//const taxableIncome = result - totalDeductions;
//const taxableIncome = basicSalary + benefits - totalDeductions;
const grossSalary = basicSalary + benefits;
const totalDeductions = NHIFDeductions() /* NSSFDeductions()*/;
const netSalary = grossSalary - payeeCalculator() - totalDeductions;

function payeeCalculator(grossSalary){
    //const taxableIncome = basicSalary + benefits - totalDeductions;
    if(grossSalary <= 24000){
        let payee = grossSalary * 0.1;
        return payee;
    }else if (grossSalary >= 24001 && grossSalary <= 32333){
        let payee = grossSalary * 0.25;
        return payee;
    }else if (grossSalary > 32333){
        let payee = grossSalary * 0.3;
        return payee;
    }  
}

function NHIFDeductions(grossSalary){
    if(grossSalary <= 5999){
        let resultNHIF = grossSalary - 150;
        return resultNHIF;
    }
    else if(grossSalary>= 6000 && grossSalary <= 7999){
        let resultNHIF = grossSalary - 300;
        return resultNHIF;
    }
    else if(grossSalary>= 8000 && grossSalary <= 11999){
        let resultNHIF = grossSalary - 400;
        return resultNHIF;
    }
    else if(grossSalary>= 12000 && grossSalary <= 14999){
        let resultNHIF = grossSalary - 500
    }
    else if(grossSalary>= 15000 && grossSalary <= 19999){
        let resultNHIF = grossSalary - 600;
        return resultNHIF;
    }
    else if(grossSalary>= 20000 && grossSalary <= 24999){
        let resultNHIF = grossSalary - 750;
        return resultNHIF;
    }
    else if(grossSalary>= 25000 && grossSalary <= 29999){
        let resultNHIF = grossSalary - 850;
        return resultNHIF;
    }
    else if(grossSalary>= 30000 && grossSalary <= 34999){
        let resultNHIF = grossSalary - 900;
        return resultNHIF;
    }
    else if(grossSalary>= 35000 && grossSalary <= 39999){
        let resultNHIF = grossSalary - 950;
        return resultNHIF;
    }
    else if(grossSalary>= 40000 && grossSalary <= 44900){
        let resultNHIF = grossSalary - 1000;
        return resultNHIF;
    }
    else if(grossSalary>= 45000 && grossSalary <= 49999){
        let resultNHIF = grossSalary - 1100;
        return resultNHIF;
    }
    else if(grossSalary>= 50000 && grossSalary <= 59999){
        let resultNHIF = grossSalary - 1200;
        return resultNHIF;
    }
    else if(grossSalary>= 60000 && grossSalary <= 69999){
        let resultNHIF = grossSalary - 1300;
        return resultNHIF;
    }
    else if(grossSalary>= 70000 && grossSalary <= 79999){
        let resultNHIF = grossSalary - 1400;
        return resultNHIF;
    }
    else if(grossSalary>= 80000 && grossSalary <= 89999){
        let resultNHIF = grossSalary - 1500;
        return resultNHIF;
    }
    else if(grossSalary>= 90000 && grossSalary <= 99999){
        let resultNHIF = grossSalary - 1600;
        return resultNHIF;
    }
    else if(grossSalary >= 100000){
        let resultNHIF = grossSalary - 1700;
        return resultNHIF;
    }
}

const basicSalary = 30000;
const benefits = 500;
//const salaryDetails = calculateNetSalary(basicSalary, benefits);

console.log(netSalary);




/*function NSSFDeductions(grossSalary){
    if()
}
*/