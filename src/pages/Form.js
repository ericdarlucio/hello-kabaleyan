import { useState } from "react";
import { useNavigate } from "react-router";


const Form = () => {

  const navigate = useNavigate();

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [age, setAge] = useState();
  const [mobileNumber, setMobileNumber] = useState();
  const [address, setAddress] = useState();
  const [email, setEmail] = useState();


  const bookSchedule = (e) => {
    // Prevent webpage loading upon submit
		e.preventDefault();

    // API call requirements
		const configuration = {
			method: 'put',
			url: 'http://localhost:8080/incomplete',
			data: {
				firstName,
				lastName,
				age,
				mobileNumber,
				address,
				email
			},
		};

		// Actual API call
		axios(configuration)
			.then((result) => {
				alert(result.data.status);
				setLogin(true);
				navigate('/path');
				window.location.reload(false);
			})
			.catch((error) => {
				alert(error.response.data.status);
			});
	};

  return (
    <div>
      <form
        onSubmit={(e)=>bookSchedule(e)}
      >
        <label>Book This Schedule</label>
        <label for ='firstName'>First Name: </label>
          <input
								required
								type='text'
                name="firstName"
                value={firstName}
								placeholder='Enter your first name:'
								onChange={(e) => setFirstName(e.target.value)}
						></input>
        <label for ='lastName'>Last Name: </label>
          <input
								required
								type='text'
                name="lastName"
                value={lastName}
								placeholder='Enter your last name:'
								onChange={(e) => setLastName(e.target.value)}
						></input>
        <label for ='age'>Age: </label>
          <input
								required
								type='number'
                name="age"
								placeholder='Enter your age:'
								onChange={(e) => setAge(e.target.value)}
						></input>
        <label for ='mobileNumber'>Mobile Number: </label>
          <input
								required
								type='tel'
                pattern="[0-9]{11}"
                name="mobileNumber"
								placeholder='Enter your mobile number:'
								onChange={(e) => setMobileNumber(e.target.value)}
						></input>
        <label for ='address'></label>
          <input
								required
								type='text'
                name="address"
								placeholder='Enter your address:'
								onChange={(e) => setAddress(e.target.value)}
						></input>
        <label for ='email'></label>
          <input
								required
								type='email'
                name="email"
								placeholder='Enter your email:'
								onChange={(e) => setEmail(e.target.value)}
						></input>
        <button type='submit'>Confirm</button>
      </form>
      
    </div>
  )
}

export default Form;