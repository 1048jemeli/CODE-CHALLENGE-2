function calculatetheNHIFdeductions(grossPay){
    //checks the gross pay on different limits and returns the relevant deduction
        if(grossPay<6000){
            return 150
        }
        else if (grossPay < 8000) {
            return 300
        }
    
        else if (grossPay < 12000) {
            return 400
        }
    
        else if (grossPay < 15000) {
            return 500
        }
    
        else if (grossPay < 20000) {
            return 600
        }
    
        else if (grossPay < 25000) {
            return 750
        }
    
        else if (grossPay < 30000) {
            return 850
        }
    
        else if (grossPay < 35000) {
            return 900
        }
    
        else if (grossPay < 40000) {
            return  950
        }
    
        else if (grossPay < 45000) {
            return 1000
        }
    
        else if (grossPay < 50000) {
            return 1100
        }
    
        else if (grossPay < 60000) {
            return 1200
        }
    
        else if (grossPay < 70000) {
            return 1300
        }
    
        else if (grossPay < 80000) {
            return 1400
        }
         
        else if (grossPay < 90000) {
            return 1500
        }
    
        else if (grossPay < 100000) {
            return 1600
        }
        else {
            return 1700
        }
    }
    //Define a function to calculate NSSF contribution based on pensionable pay
    function calculateTheNSSFContribution(pensionablePay){
    //Defines the NSSF tier I rate and maximum tier II
        const tierIRate = 0.06;
        const tierIIMax = 36000;
    //calculates NSSF contribution based on pensionable pay and return the minimum of the calculated contribution and tier II maximum contribution
        return Math.min(pensionablePay*tierIRate,tierIIMax*tierIRate);
    }
    //define a function to calculate the net salary based on the basic salary and benefits
    function calculateTheNetSalary(basicSalary,benefits){
    //calculatingthe gross salary by adding basic salary and benefits
        const grossSalary = basicSalary = benefits ;
    //calculating NHIF deductions based on the gross salary
        const nhifDeductions = calculatetheNHIFdeductions(grossSalary);
    //calculating NSSF deductions based on the basic salary
        const nssfDeductions = calculateTheNSSFContribution(basicSalary);
    
    //calculate the net salary by subtracting NHIF and NSSF deductions from gross salary
        const netSalary = grossSalary - nhifDeductions - nssfDeductions;
    
    //returning an object that contains the gross salary, NHIF DEDUCTIONS AND NSSF CONTRIBUTIONS Aand net salary
        return {
            grossSalary : grossSalary,
            NHIFDeductions : nhifDeductions,
            NSSFContribution : nssfDeductions,
            netSalary:netSalary
    
        };
    
    }
     //define baic salary and benefits
     const basicSalary = 20000;
     const benefits = 5000;
     //calculate the salary with the provided basic salary and benefits
     const salaryDetails = calculateTheNetSalary(basicSalary,benefits);
     //returns the calculated salary 
     console.log(salaryDetails)