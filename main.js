const submitData =()=> {
    let name =document.querySelector('#name').value;
    let email =document.querySelector('#email').value;
    let phone =document.querySelector('#phone').value;
    let address =document.querySelector('#address').value;

    const obj = {
        name:name,
        email:email,
        phone:phone,
        address:address,
    };
    let emp;
    if (localStorage.length != 0){
        let getEmp = localStorage.getItem("emp");
        emp =JSON.parse(getEmp);
    }else {
        emp =[];
    }
    emp.push(obj);

    localStorage.setItem("emp" , JSON.stringify(emp));
    clearInterval();
    showData();
}
let clear =() => {
    let name =document.querySelector('#name').value ="";
    let email =document.querySelector('#email').value  ="";
    let phone =document.querySelector('#phone').value  ="" ;
    let address =document.querySelector('#address').value  ="";
}

const showData = () => {
    const tbody = document.querySelector(`#tbody`);
    let getEmp = localStorage.getItem("emp");
    let emp =JSON.parse(getEmp);
    let tr ="";
    for(let i of emp){
        tr += `
        <tr>
        <td>${i.name}</td>
        <td>${i.email}</td>
        <td>${i.phone}</td>
        <td>${i.address}</td>
        </tr>
        `;
    }
    tbody.innerHTML =tr;
}
showData();