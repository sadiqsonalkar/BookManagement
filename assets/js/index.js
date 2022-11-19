
//we have id of add_book and update_book in the js file

$("#add_book").submit(function(event){
    alert("Data Inserted Successfully!");
})

$("#update_book").submit(function(event){
    event.preventDefault(); //it wont reload if we click on submit

    var unindexed_array = $(this).serializeArray(); //it will return serialize array of the submit button inside the variable
    var data = {}

    $.map(unindexed_array, function(n, i){
        data[n['name']] = n['value']
    })


    var request = {
        "url" : `http://localhost:3000/api/books/${data.id}`,
        "method" : "PUT", //put method to update the books
        "data" : data
    }

    $.ajax(request).done(function(response){
        alert("Data Updated Successfully!");
    })

})

if(window.location.pathname == "/"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")

        var request = {
            "url" : `http://localhost:3000/api/books/${id}`,
            "method" : "DELETE" //delete to delete books
        }

        if(confirm("Do you really want to delete this record?")){
            $.ajax(request).done(function(response){
                alert("Data Deleted Successfully!");
                location.reload();
            })
        }

    })
}