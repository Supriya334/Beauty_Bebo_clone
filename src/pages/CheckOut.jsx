function CheckOut(){
    return(
       <>
<h6>CheckOut Page</h6>
       <div className="checkOut">

      

  <label htmlFor="">Enter Your Full Name</label>
  <input type="text" name="" className="check_out" /> <br />

    <label htmlFor="">Enter Your Address</label>
    <input type="text" className="check_out"/> <br />

    <label htmlFor="">Email</label>
    <input type="email" name=""className="check_out" /> <br />


    <label htmlFor="">City</label>
    <input type="text" className="check_out" /> <br />

    <label htmlFor="">Your Pin </label>
    <input type="text" name="" className="check_out" /> <br />

    </div>

<input type="Checkbox" className="tik_check"/>
<label  htmlFor="">Cash On Delivery</label> <br />

    <button id="btn_order"><a href="http://localhost:3000/ThankYou">Place My Order</a> </button>
        </>
    )
}

export  default CheckOut;