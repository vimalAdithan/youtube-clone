// var url='https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=the%20weeknd&key=AIzaSyBNUcefPILONysTCVFduCMTUcUn7WfMpRA';
// async function rest(){
//     try{
//         var api=await fetch(url);
//         var out=api.json()
//         out.then((res)=>{
//             console.log(res);
//         })
//     }
//     catch(er){
//         console.log(er);
//         console.log('error');
//     }
// }
// rest();
var upload=document.querySelector('.upload');
upload.addEventListener('click',()=>{
    var v_data=document.querySelector('.v-data');
    var u_data=document.querySelector('.u-data');
    v_data.style.display = "none";
    u_data.style.display = "block";

});


// ------------------------------------------------------------------------------------------------


function post_submission(e){
    console.log('submition');
    var user_given_data = document.querySelector('#textfield') // user giving data
    var all_data = document.querySelectorAll('#right p')
    var last_ele_data =''
    if(all_data.length){
        last_ele_data = all_data[all_data.length-1].innerText
    }

    if (user_given_data.value != last_ele_data && user_given_data.value!='' ){
        data = user_given_data.value
        dataadding(data)
        user_given_data.value = ''
        save_submission()
    }
    
    else{
        var errdata = document.querySelector('.error-data')
        errdata.innerText = 'This data is already Present'
        errdata.style.color = 'red'
        setTimeout(()=>{
            errdata.style.display = 'none'
        },3000)
    }
}
function post_delete(e){
    console.log(e.parentElement.previousElementSibling);
    console.log(e.parentElement.parentElement);
    var child_remove = e.parentElement.parentElement
    var parent = document.querySelector('#right')
    var fixed_len_localstorage = Object.keys(localStorage).length
    for(i=0;i<fixed_len_localstorage;i++){
        localStorage.removeItem(i)
    }

    child_remove.remove()
    console.log('delete');


    save_submission()

}


function  post_update(e){
    console.log(e.parentElement.previousElementSibling);
    var exact_element = e.parentElement.previousElementSibling
    var user_given_data = document.querySelector('#textfield')
    if (user_given_data.value==''){
        user_given_data.value = exact_element.innerText
        console.log('update');
        e.parentElement.parentElement.remove()
    }
    else{
        var errdata = document.querySelector('.error-data')
        errdata.innerText = 'Trying to add new data'
        errdata.style.color = 'red'
        setTimeout(()=>{
            errdata.style.display = 'none'
        },3000)
    }
}

function save_submission(e){
    console.log('data saved');
    var all_data = document.querySelectorAll('#right p')
    all_data.forEach((value_data,index_data)=>{
        localStorage.setItem(index_data,value_data.innerText)
        console.log(index_data,value_data.innerText)
    })
        
}


function dataadding(data){
    var parent_ading = document.querySelector('#right')
    var child_ele = document.createElement('div')
    child_ele.classList.add('main-class')
    child_ele.innerHTML = `
    <p>${data}</p>
    <div >
        <button onclick="post_update(this)">Update</button>
        <button onclick="post_delete(this)">Delete</button>
    </div>
    `
    parent_ading.append(child_ele)
}


window.addEventListener('load',()=>{
    var local_stroge_length = Object.keys(localStorage).length
    for(i=0;i<local_stroge_length;i++){
        // localStorage.getItem(i)
        dataadding(localStorage.getItem(i))
        console.log(localStorage.getItem(i))
    }
})

