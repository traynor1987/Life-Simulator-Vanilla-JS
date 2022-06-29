 // variable setup grab classes
    //user info
    const name = document.querySelector(".name");
    const age = document.querySelector(".age");
    const money = document.querySelector(".money");
    const hunger = document.querySelector(".hunger");
    const health = document.querySelector(".health");
    const fitness = document.querySelector(".fitness");
    const date = document.querySelector(".date");

    const userName = document.querySelector("#userName");
    const start = document.querySelector(".start");
    const container = document.querySelector(".container");
    const options = document.querySelector(".options");
    const changeLog = document.querySelector(".changelog");
    const lifeLog = document.querySelector(".lifelog");
    const lifeLogText = document.querySelector(".lifeLogText")

    //button grab

    const beginGame = document.querySelector(".begin")

    // Main Menu
    const eatFood = document.querySelector(".eat");
    const getjob = document.querySelector(".getjob");
    const gotoWork = document.querySelector(".work");
    const workout = document.querySelector(".workout");
    const gotoSleep = document.querySelector(".gotoSleep");

    const showChangeLog = document.querySelector(".showLog");
    const hideChangeLog = document.querySelector(".hideLog");

    // Go Shopping

    const goShopping = document.querySelector(".goshopping")
        // sub menu
        const goBack = document.querySelector(".goBack"); 
        const basicFood = document.querySelector(".basicFood");

    //main user variable setup

    // const userStats = {
    //     userAge: 16,
    //     userMoney: 50,
    //     userHunger: 50,
    //     userHealth: 100,
    //     userFitness: 50,
    //     hasJob: false,

    // } Future Use

    let userAge = 16;
    let userMoney = 50;
    let userHunger = 50;
    let userHealth = 100;
    let userFitness = 50;

    let hasJob = false;

    let foodFitness = 10;

    // virtual date setup

    let year = 2023;
    let month = 1;
    let day = 1;

    // main max variable set up

    let maxFitness = 50; // can be improved by going gym

    // prompt to get default name

     let username = userName;

    //default text content setup

    name.textContent = `Name: ${username}`;
    age.textContent = `Age: ${userAge}`;
    money.textContent = `Money: $${userMoney}`;
    hunger.textContent = `Hunger: ${userHunger}/100`;
    health.textContent = `Health: ${userHealth}/100`;
    fitness.textContent = `Fitness: ${userFitness}/${maxFitness}`;
    date.textContent = `Day: ${day}`;

    lifeLogText.textContent = ` `;

    //shopping set up

    const foodShop = [
        {
            name: "Cheese Burger",
            HungerFix: 10,
            price: 5
        },
        {
            name: "Chicken Sandwich Meal Deal",
            HungerFix: 15,
            price: 7
        },
        {
            name: "Resturant Meal",
            HungerFix: 50,
            price: 40
        }
    ]

    // functions setup 

    const eatFoodFunc = () => {
        if(userHunger < 100) {
            // alert("You ate some food, your hunger level has improved by 10")
            lifeLogText.textContent = "You ate some food, your hunger level has improved by 10";
            userHunger = userHunger + 10;
            userMoney = userMoney - 5;
            checkMaxFitnessFood();
            money.textContent = `Money: $${userMoney}`;
            hunger.textContent = `Hunger: ${userHunger}/100`;
            fitness.textContent = `Fitness: ${userFitness}/${maxFitness}`;
            return userHunger;
        } else {
            // alert("You are already Full")
            lifeLogText.textContent = "You are already Full"
            userHunger = 100;
            hunger.textContent = `Hunger: ${userHunger}/100`;
            return userHunger;
        }
    }

    const getjobFunc = () => {
        lifeLogText.textContent = "You got a job, well done, it pays $50 a day"
        // alert("You got a job, well done, it pays $50 a day")
        getjob.style.display = "none"
        gotoWork.style.display = "block"
        hasJob = true;
    }

    const gotoWorkFunc = () => {
        lifeLogText.textContent = "You went to work and earned $50"
        // alert("You went to work and earned $50");
        userMoney = userMoney + 50;
        userHunger = userHunger - 40;
        money.textContent = `Money: $${userMoney}`;
        gotoWork.disabled = true;
        gotoWork.style.color = "grey";
        hunger.textContent = `Hunger: ${userHunger}/100`;
        userFitness = userFitness -30;
        fitness.textContent = `Fitness: ${userFitness}/${maxFitness}`;
        checkFitnessLevel();

        return userMoney;
        
    }

    const gotoSleepFunc = () => {
        lifeLogText.textContent = "You went to sleep for 8 hours"
        // alert("You went to sleep for 8 hours");
        // let fitnessImprovement = maxFitness;
        // let fitnessImprovement = Math.floor(Math.random(10) * 50);
        userFitness = maxFitness;
        if(hasJob === true){
            gotoWork.disabled = false;
            gotoWork.style.color = "white";
        } else {
            gotoWork.disabled = true;
        }
        fitness.textContent = `Fitness: ${userFitness}/${maxFitness}`;
        day++;
        date.textContent = `Day: ${day}`;
        return userFitness;
    }

    const workoutFunc = () => {
        lifeLogText.textContent = "You worked out"
        // alert("You worked out");
        let fitnessImprovement = 10;
        let tempfitnessLoss = Math.floor(Math.random(5) * 40);
        maxFitness = maxFitness + fitnessImprovement;
        userFitness = userFitness - tempfitnessLoss;
        fitness.textContent = `Fitness: ${userFitness}/${maxFitness}`;
        checkFitnessLevel();
        return maxFitness;

    }

     const checkFitnessLevel = () => {
        checkMaxFitness();
        if(userFitness <= 0){
            lifeLogText.textContent = `Alert: You have passed out, you went to hospital, your health has dropped`
            // alert("You have passed out, you went to hospital, your health has dropped")
            userFitness = 5;
            userHealth = userHealth * 0.5;
            health.textContent = `Health: ${userHealth}/100`;
            fitness.textContent = `Fitness: ${userFitness}/${maxFitness}`;
            return userHealth;
        } else if(userFitness <= 10) {
            alert("You are tired, please sleep or eat some food")
            workout.disabled = true;
        }
    }

    const checkMaxFitness = () => {
        if(userFitness + foodFitness >= maxFitness) {
            userFitness = maxFitness;
            return userFitness;
        } else if (userFitness-10 < maxFitness && userFitness >= maxFitness) {
            userFitness = maxFitness;
            return userFitness;
        } else {
            userFitness = userFitness + foodFitness;
        }
    }

    const beginGameFunc = () => {
        start.style.display = "none";
        container.style.display = "block";
        options.style.display = "block";
        lifeLog.style.display = "block";
        name.textContent = `Name: ${userName.value}`;
    }

    const goShoppingFunc = () => {
        options.style.display = "none";
        goShopping.style.display = "block";

    }

    const goBackFunc = () => {
        goShopping.style.display = "none";
        options.style.display = "block";
    }

    const showChangeLogFunc = () => {
        changeLog.style.display = "block";
        hideChangeLog.style.display = "block";
        showChangeLog.style.display = "none";

    }

    const hideChangeLogFunc = () => {
        changeLog.style.display = "none";
        showChangeLog.style.display = "block";
        hideChangeLog.style.display = "none";
    }


    // on click button setup Main Menu

    eatFood.addEventListener("click", goShoppingFunc);
    getjob.addEventListener("click", getjobFunc);
    gotoWork.addEventListener("click", gotoWorkFunc);
    workout.addEventListener("click", workoutFunc);
    gotoSleep.addEventListener("click", gotoSleepFunc);

    showChangeLog.addEventListener("click", showChangeLogFunc);
    hideChangeLog.addEventListener("click", hideChangeLogFunc);
    //intro
    beginGame.addEventListener("click", beginGameFunc);

    // on click Shop set up

    goBack.addEventListener("click", goBackFunc);
    basicFood.addEventListener("click", eatFoodFunc);

// const basket = ['apples', 'oranges', 'grapes'];

// for(let i = 0; i < basket.length; i++) {
//     console.log(basket[i])
// }

// const detailedBasket = {
//     apples: 5,
//     oranges: 10,
//     grapes: 1000
// }

// basket.forEach(item => {
//     console.log(item)
// })

// //for of

// for (item of basket) {
//     console.log(item)
// }

// //for in

// for(item in detailedBasket) {
//     console.log(item)
// }

