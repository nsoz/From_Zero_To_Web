const Mission_Name = document.getElementById("Mtitle");
const Mission_Desc = document.getElementById("Mdescription");
const Mission_DDline = document.getElementById("Mdeadline");
const ADDbTn = document.getElementById("Add");
const ListEr = document.getElementById("TaskList");

console.log("js calisti");

ADDbTn.addEventListener("click", function(){
    const title_holder = Mission_Name.value;
    const description_holder = Mission_Desc.value;
    const deadline_holder = Mission_DDline.value;
    const li = document.createElement('li'); //li for list
    li.textContent = `${title_holder} - ${description_holder} - ${deadline_holder}`; //create the li's text context

    ListEr.appendChild(li);
});