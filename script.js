var date = new Date()
var hour = date.getHours()
var min = date.getMinutes()
var toDos = {}
for(var i = 9; i<=17; i++){
//? is if statement : is else 
// template literals format: condition ? "value returned if true" : other condition ? "value returned if other condition true" : "returned for the else at the end"
$(".container").append(`<div class="row time-block">
<div class="hour col-1">
  ${i}:00
</div>
<textarea rows="2" class="${hour>i ? "past": hour<i ? "future" : "present"} description col-10"></textarea> 
<button class="saveBtn col-1" id=${i}>
  <i class="fas fa-save"></i>
</button>
</div>`)

}
$(".saveBtn").click(function(){
    var key = $(this).attr("id")
    var value = $(this).siblings("textarea").val()
    toDos[key]=value
    console.log(toDos)
    //store todos in local storage
})