
// ------ Display Form-----
function display_form() {
    document.getElementById('form').style.display = 'inline'
}

let FName = document.getElementById('fname');
let LName = document.getElementById('lname');
let Qual = document.getElementById('qual');
let Email = document.getElementById('email');
let Phone = document.getElementById('phone');
let search = document.getElementById("Search")



// ------- Add Data and Hidden form------
let Original_Data = []

function hidden_form() {
    Original_Data.push({ 'FirstName':FName.value, "LastName": LName.value, 'Qual': Qual.value, 'email': Email.value, 'phone': Phone.value })
    document.getElementById('form').style.display = 'none';    
    display_data()
}

//------Remove Data------
function Remove_Data(a){
    Original_Data.splice(a,1)
    display_data()
}

//------Search Data-------
function searching(){
    display_data()
}
search.addEventListener('keyup',searching)

//------Display Data------
function display_data() {
    let j = 0;
    if(Original_Data.length == 0) {
        document.getElementById('Data').innerHTML = `<tr><td colspan="6">No Data Available</td></tr>`
    }
    else {
        document.getElementById('Data').innerHTML = Original_Data.filter((data)=>{
            return data.FirstName.toLowerCase().includes(search.value.toLowerCase());
        }).map((item) => {           
            return (
                `<tr>
                    <td>${item.FirstName}</td>
                    <td>${item.LastName}</td>
                    <td>${item.Qual}</td>
                    <td>${item.email}</td>
                    <td>${item.phone}</td>`+
                    "<td><i class='fa-solid fa-trash' onclick='Remove_Data("+(j++)+")'></i></td></tr>"
            )
        }).join('')
    }
}








