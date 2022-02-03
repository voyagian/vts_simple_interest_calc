function compute()
{
    var principal = document.getElementById("principal").value;{

    }
    var rate = document.getElementById("rate").value;{

    }
    var years = document.getElementById("years").value;{

    }
    var interest = (principal * (rate * .01)) * years;
    document.getElementById('interest') .innerHTML = "You will recieve an amount of " +interest;{

    }
    var rate = document.getElementById("rate").value;
    document.getElementById('rOutput') .innerHTML = "2You will recieve an amount of " +rate;

}
function compute2()
{
    var rate = document.getElementById("rate").value;
    document.getElementById('rOutput') .innerHTML = "2You will recieve an amount of " +rate;
}
