let money = prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");


appData = {
    budjet : money,
    timeData : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : false
};


appData.expenses = prompt("Введите обязательную статью расходов в этом месяце", "");
appData.expenses = prompt("Во сколько обойдется?", "");

alert(money / 30);
