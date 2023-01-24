//Using UseRef

// import React, { useRef } from "react";
// const LocalStorage = () => {
//     const input=useRef()
    


//     const handleclick=(()=>{
//         console.log(input.current.value, "it is the initial value")
//         localStorage.setItem("value_of_input",input.current.value)

//     })
//         console.log(localStorage.getItem("value_of_input")
//         ,"this is what we get from local storage")
//     return (
//         <div>
//             <input ref={input}/>
//             <button onClick={handleclick}>Adding </button>
//         </div>
//       );
// }
 
// export default LocalStorage;


//*****Simple One*****

// const LocalStorage = () => {
//     const function1 = (()=>{
//         localStorage.setItem("person_name","Rohan Kumar")
//         localStorage.setItem("Place","Assam")

//     })

//     const function2= ()=>{
//         console.log(localStorage.getItem("person_name"))
//         console.log(localStorage.getItem("Place"))
//     }

//     const fun3= ()=>{
//         // localStorage.removeItem("person_name")
//         // localStorage.removeItem("Place")

//         localStorage.clear()

//     }
//     return ( 
//         <div>
//             <h1>Local Storage</h1>
//             <button onClick={function1}>Save</button>
//             <button onClick={function2}>Show</button>
//             <button onClick={fun3}>Delete</button>
//         </div>
//      );
// }
 
// export default LocalStorage;

//****If i have to deals with object*****

// const LocalStorage = () => {

//     const localObj={
//         P_name:"Arnol",
//         Ph_no:"7005314331"

//     }

//     const function1 = (()=>{
//         localStorage.setItem("details",JSON.stringify(localObj))

//     })

//     const function2= ()=>{
//         console.log (JSON.parse(localStorage.getItem('details')));
        
//     }

//     const fun3= ()=>{
//         localStorage.clear()

//     }
    // return ( 
    //     <div>
    //         <h1>Local Storage</h1>
    //         <button onClick={function1}>Save</button>
    //         <button onClick={function2}>Show</button>
    //         <button onClick={fun3}>Delete</button>
    //     </div>
    //  );
// }
 
// export default LocalStorage;


//***** */ cookie  ****

const cookies = () => {

    const expTime=new Date('2023-01-25')
    const overTime=new Date('2023-01-10')

    const fun1= ()=>{
        document.cookie =('Given_name=Thappa;expires='+expTime.toUTCString());
    }

    const fun2=()=>{
        console.log(document.cookie)
    }

    const fun3=()=>{
        document.cookie=("Given_name=Ajoy;expires="+overTime.toUTCString())
    }


    return ( 
        <div>
            <h1>Local Storage</h1>
            <button onClick={fun1}>Save</button>
            <button onClick={fun2}>Show</button>
            <button onClick={fun3}>Delete</button>
        </div>
     );
}
 
export default cookies;







