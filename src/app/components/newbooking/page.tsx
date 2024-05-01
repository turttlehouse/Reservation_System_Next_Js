import React from 'react'

const page = () => {
  return (
    <>
      <div className='flex justify-center items-center p-5'>

        <div className='border-2 rounded border-blue-700 p-5 w-1/2'>

            <h1 className='text-2xl font-bold text-blue-700'>Create Booking</h1>

            {/* form labels and inputs */}
            <form className='flex flex-col' action="">

              <label htmlFor="fullName">Full Name</label>
              <input type="text" className='border rounded border-black' />
              <label htmlFor="contactNumber">Contact Number</label>
              <input type="number" className='border rounded border-black' />


              {/*date time table no */}
              <div className='flex gap-3'>

                  <div>

                    <label htmlFor="Date">Date</label><br />
                    <input className='w-[200px] border rounded border-black' type="date" name="" id="Date" />

                  </div>

                  <div>

                    <label htmlFor="Time">Time</label><br />
                    <input className='border rounded border-black' type="time" name="" id="Time" />
                    
                  </div>

                  <div>

                    <label htmlFor="TableName">TableName/Number</label><br />
                    <input className='w-[245px] border rounded border-black' type="number" name="" id="TableName" />
                  
                  </div>


              </div>

              {/* guest and special request */}
              <div className='flex'>

                  <div>

                    <label htmlFor="Guest">No of Guests</label>
                    <input className='border rounded border-black w-[100px]' type="number" />

                  </div>

                  <div>
                    
                    <label htmlFor="SpecialRequest">Special Request</label>
                    <input className='border rounded border-black w-[450px]' type="text" />
                      
                  </div>


              </div>

              {/* occassion and additional comment */}
              <div className='flex gap-5'>

                  <div>

                    <label htmlFor="Occassion">Occasion<small>(optional)</small></label>
                    <input className='w-[180px] border rounded border-black'  type="text" />

                  </div>

                  <div>

                    <label htmlFor="AdditionalNotes">Additional Notes/Comments</label>
                    <input className='w-[370px] border rounded border-black' type="text" />
                      
                  </div>


              </div>

            </form><br />

            {/* points */}
            <ul  className='text-xs text-justify'>

              <li className='list-disc'>

                "I acknowledge that by submitting this reservation request, I am  confirming my intent to reserve a table at
                [Restaurant Name] for the  specified date and time. I understand that this reservation is subject  to availability
                and will be confirmed by the restaurant via email or  phone. I agree to abide by the restaurant's reservation
                policies and  understand that failure to do so may result in the cancellation of my  reservation."
          
              </li>
            
              <li className='list-disc'>
                "I agree to the restaurant's Privacy Policy."
              </li>

            </ul>

          {/* SUBMIT AND CANCEL BUTTON */}
          <div className="flex flex-row-reverse gap-4">

            <button className='font-bold bg-blue-600 text-white border rounded py-1 px-5'>Submit</button>
            <button className='font-bold '>Cancel</button>

          </div>

        </div>

      </div>


    </>
  )
}

export default page