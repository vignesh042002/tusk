<!DOCTYPE html>
<html>
<head>
    <title>booking</title> 
</head>
    <body>
        <h1 > Booking app</h1>
        <form onsubmit="saveTolocalStorage(event)">
            
           
                
                <label for="name">Name:</label>
                <input type="text" class="form-control" id="name" placeholder="Enter your name"><b> </b>
                
                <label for="email">Email:</label>
                <input type="email" class="form-control" id="email" placeholder="Enter your mailid">
                <label for="phno">phone number:</label>
                <input type="tel" class="form-control" id="phno" placeholder="Enter ph no">
                <button>Submit</button>
            
        </form>
        <u1 id="listOfitems"></u1>
        <script>
            function saveTolocalStorage(event){
                event.preventDefault()
                const name=event.target.name.value
                localStorage.setItem('name',name)
                const email=event.target.email.value
                localStorage.setItem('email',email)
                const phno=event.target.phno.value
                localStorage.setItem('phno',phno)
                const obj={
                    name,
                    email,
                    phno
                }
                localStorage.setItem(obj.email,JSON.stringify(obj))
                showUserOnScreen(obj)
                
            }
            function showUserOnScreen(obj){
                    const parentElem=document.getElementById('listOfitems')
                    parentElem.innerHTML=parentElem.innerHTML +`<li>${obj.name}-${obj.email}-${obj.phno}</li>`
            }
            const editbutt=document.createElement('input')
            editbutt.type='button'
            editbutt.value='Edit'
            editbutt.onclick=()=>{
                
            }
        </script>
    </body>
</html>
