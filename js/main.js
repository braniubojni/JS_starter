// jshint esversion:6
    // Start button
let start = document.querySelector('.start'),
    // Values from right side
    budgetValue = document.querySelector('.budget-value'),
    daybudgetValue = document.querySelector('.daybudget-value'),
    levelValue = document.querySelector('.level-value'),
    expensesValue = document.querySelector('.expenses-value'),
    optionalexpensesValue = document.querySelector('.optionalexpenses-value'),
    incomeValue = document.querySelector('.income-value'),
    monthsavingsValue = document.querySelector(',monthsavings-value'),
    yearsavingsValue = document.querySelector('.yearsavings-value');

    // Mandatory expenses
let expensesItems = document.querySelectorAll('.expenses-item');



appData = {
    budget : money,
    timeData : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : true,

    chooseExpenses: function(){
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
                b = prompt("Во сколько обойдется?", "");
            if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && a != '' && b != '' && a.length < 50)  {
                console.log('Done');
                appData.expenses[a] = b;
            } else {
                --i;
                console.log('You write something wrong');
            }
            
        }
    },

    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert(`Ежедневный бюджет: ${appData.moneyPerDay}`);
    },

    detectLevel: function(){
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка");
        }
    },

    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt('Под какой процент?');
            appData.monthIncome = save / 100 / 12 * percent;
            alert(`Доход в месяц с вашего депозита: ${appData.monthIncome.toFixed()}`);
        }
    },

    chooseOptExpenses: function() {
        for(let i = 1; i <= 3; i++) {

            let a = prompt("Статья необязательных расходов");
            appData.optionalExpenses[i] = a;
        }
    },

    chooseIncome: function() {
        for (let i = 0; i < 1; i++) {
            let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)" , "");
                appData.income = items.split(', ');
            }
        
        for (let i = 0; i < 1; i++) {
            let additional = prompt("Может что то еще? ", "");
            if (typeof(additional) === 'string' && typeof(additional) != null && additional != '') {
                appData.income.push(additional);
                console.log(appData.items);       
            } else {
                --i;
                console.log("Write something wrong");
            }
        }
        appData.income.sort();

        appData.income.forEach(function (element, index) {
            alert(`Способы доп. заработка: ${index+1} ${element}`);
        });    
    }

};