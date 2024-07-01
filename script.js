//home,login,signup,
// localStorage.setItem("doctorData",JSON.stringify(doctorData));
// localStorage.getItem("patientData",JSON.stringify(patientData));
// localStorage.getItem("appointmentlist",JSON.stringify(appointmentlist));

var content = document.querySelector("#content");
home();
function home(){
    content.innerHTML="";
    let heading = document.createElement("h1");
    heading.innerText=`Choose who you are:`;
    let docbutton = document.createElement("button");
    docbutton.innerText = "Doctor";

    let patbutton = document.createElement("button");
    patbutton.innerText = "Patient";
    content.append(heading,docbutton,patbutton);

    docbutton.addEventListener("click",()=>{
        login(doctorData,"Doctor");
    })

    patbutton.addEventListener("click",()=>{
        login(patientData,"Patient");
    })
}


function login(objlist, str ){

    content.innerHTML="";

    //home button
    let homebtn = document.createElement("button");
    homebtn.innerText = "Go Home";
    homebtn.addEventListener("click",()=>{
        home();
    });

    let heading = document.createElement("h1");
    heading.innerText=`${str} enter your unique ID to login : `;



    //form
    let loginform = document.createElement("form");
    loginform.className = "loginform";


    let logininput = document.createElement("input");
    logininput.type ="text";
    logininput.placeholder ="id";

    let loginbtn = document.createElement("button");
    loginbtn.type = "submit";
    loginbtn.innerText = "login";

    loginform.append(logininput,loginbtn);


    //sign up button
    

    let signup = document.createElement("button");
    signup.innerText = "signup";

    signup.addEventListener("click",()=>{
        signupfun(str);
    });


    loginform.addEventListener("submit",(ele)=>{
        ele.preventDefault();
        const loginid = logininput.value ;
        display(str,loginid);

    });

    content.append(homebtn,heading,loginform,signup);
};



function display(str, loginid){

    content.innerHTML="";
    if(str=="Doctor"){
        let t = appointmentlist.filter((ele)=>{
            return ele.doctorID===loginid;
        })
    }
    else{
        let t = appointmentlist.filter((ele)=>{
            return ele.patientID===loginid;
        })
    }
    console.log(t);
    t.forEach((ele)=>{
        let patientname = document.createElement("h1");
        patientname.innerText = `${ele.patientID}`;

        let doctername = document.createElement("h1");
        doctername.innerText = `${ele.docterID}`;

        let time = document.createElement("h1");
        heading.innerText = `${ele.time}`;

        content.append(patientname,doctername,time);
    })

}


function signupfun(str){

    content.innerHTML="";

    let homebtn = document.createElement("button");
    homebtn.innerText = "Go Home";
    homebtn.addEventListener("click",()=>{
        home();
    });

    let heading = document.createElement("h1");
    heading.innerText=`${str} SIGNUP `;

     //form
     let loginform = document.createElement("form");
     loginform.className = "loginform";
 
 
     let patientid = document.createElement("input");
     patientid.type ="text";
     patientid.placeholder ="id";

     let patientname = document.createElement("input");
     patientname.type ="text";
     patientname.placeholder ="name";


     let loginbtn = document.createElement("button");
     loginbtn.type = "submit";
     loginbtn.innerText = "login";
 
     loginform.append(patientid,patientname,loginbtn);

     loginform.addEventListener("submit",(ele)=>{
        ele.preventDefault();
        const pid = patientid.value ;
        const pname = patientname.value ;
        let newpatient = {
            id:pid,name:pname
        }
        if(str==="Patient"){
            patientData.push(newpatient);
        }
        else{
            doctorData.push(newpatient);
        }
        let datadded = document.createElement("p");
        datadded.innerText = "data added";
        content.append(datadded);
    });

   content.append(homebtn,heading,loginform);

}


function newAppoint(patientid){


    content.innerHTML="";
    //doctor id 


    let loginform = document.createElement("form");
     loginform.className = "loginform";

     
    let selectdoc = document.createElement("select");
    selectdoc.id= "selectdoc";

    doctorData.forEach((ele)=>{
        let option = document.createElement("option");
        option.innerText = `${ele.name}`;
        option.value = `${ele.name}`;
        selectdoc.append(option);
    })

     let time = document.createElement("input");
     time.type ="time";

     let submit = document.createElement("button");
     submit.type = "submit";
     submit.innerText = "submit";

     loginform.append(selectdoc,time,submit);

     
     


     loginform.addEventListener("submit",(ele)=>{
        ele.preventDefault();
        let apptime = time.value;
        let docname = selectdoc.value;
        let docID = doctorData.find((ele)=>{

            return ele.name === docname?ele.id:"no";
         })
         let tt = {
            patientID:patientid, docterID: docID,time:apptime
        }
    
    })

    content.append(selectdoc,loginform);
}




let appointmentlist = [{doctorID:1001,patientID:2001,time:"02:22PM"}];


let doctorData=[{id:1001,name:"Dr.bhardwaj"},{id:1002,name:"Dr.Shastri"}];

let patientData=[{id:2001,name:"Yash"},{id:2002,name:"Ankit"}];

