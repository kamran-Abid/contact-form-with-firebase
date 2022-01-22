import React, {useState} from 'react'

const Contactus = () => {
    const [user, setUser] = useState({
        name:"", email:"", phone:"", address:"",message:""
    });
    
    let name, value ;
    const getUserData = (event) => {
        name = event.target.name;
        value = event.target.value;

        setUser({ ...user, [name]: value});
    }

    const postData = async(e) => {
        e.preventDefault();
        const {name, email, phone, address ,message} = user;
        if(name && email && phone && address && message){
            const res = await fetch(
                "https://contact-us-b4e3a-default-rtdb.firebaseio.com/reactdb1.json",
                {
                    method: "POST",
                    header: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name, email, phone, address ,message
                    })
                }
            );
            if(res){
                setUser({
                    name:"", email:"", phone:"", address:"" ,message:""
                });
                alert("data added in database");
            }
        } else {
            alert("Please fill all fields");
        }
    };
    return (
        <div>
            <div className="container-content100">
                <div className="wrap-content100">
                    <form action="POST" className="content100-form" method='POST'>
                        <h3 className="contact-title">Contact Us</h3>

                        <div className="fields">
                            <div className="ifield iname-div">
                                <input type="text" className="iname" name='name' 
                                    value={user.name} onChange={getUserData} placeholder='Enter your name' autoComplete='off' required />
                            </div>
                            <div className="ifield iemail-div">
                                <input type="email" name='email' className="iemail" name="email"
                                    value={user.email} onChange={getUserData} placeholder='Enter your Email Address' autoComplete='off' required />
                            </div>
                            <div className="ifield iphone-div">
                                <input type="phone" className="iphone" name='phone' 
                                    value={user.phone} onChange={getUserData} placeholder='Enter your Phone Number' autoComplete='off' required />
                            </div>
                            <div className="ifield iaddress-div">
                                <input type="address" className="iaddress"  name='address'
                                    value={user.address} onChange={getUserData} placeholder='Enter your address' autoComplete='off' required />
                            </div>
                            <div className="ifield imsg-div">
                                <input type="text" className="imsg" name='message'
                                    value={user.message} onChange={getUserData} placeholder='Enter your message' autoComplete='off' required />
                            </div>

                        </div>
                        <div className="submit-div">
                            <input type='submit' className="btn" onClick={postData} />
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contactus
