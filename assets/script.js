var header = document.getElementById("header");
var button = document.getElementById("submit");
var nameInput = document.getElementById("name");
var type = document.getElementById("type");
var rate = document.getElementById("rate");
var due = document.getElementById("due");

button.addEventListener("click", function(event) {
    event.preventDefault();
    var row = $("<tr>");

    var rowName = $("<td>");
    rowName.text(nameInput.value);
    row.append(rowName);

    var rowType = $("<td>");
    rowType.text(type.value);
    row.append(rowType);

    var rowRate = $("<td>");
    rowRate.text(rate.value);
    row.append(rowRate);

    var rowDue = $("<td>");
    rowDue.text(due.value);
    row.append(rowDue);

    var dueDate = moment(due.value).unix();
    var time = moment().unix();
    var untilDue = Math.ceil((dueDate - time) / 86400);
    
    var days = $("<td>");
    days.text(untilDue);
    row.append(days);

    $("#table").append(row);
});

// Sets the header time
var time = moment().format("MMMM Do h:mm");
header.textContent = time;
var headerTime = setInterval(function() {
    var time = moment().format("MMMM Do h:mm");
    header.textContent = time;
}, 1000);