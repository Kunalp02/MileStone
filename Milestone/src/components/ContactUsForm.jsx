import { useForm } from "react-hook-form";

const ContactUsForm = () => {
    const {register,handleSubmit, formState: { errors }, reset} = useForm();

    const onSubmit = (data, e) => {
        e.preventDefault();
        console.log(data);
        reset();
    };

  return (
    <div className="flex flex-row justify-center p-5 w-[800px] mx-auto text-[1.5rem]">
      <form onSubmit={onSubmit}>

       <div className="flex flex-row gap-x-2 mb-3 ">
            <div className="flex flex-col items-start">
                <label htmlFor="name">First Name</label>
                <input type="firstname" id="firstname" {...register("firstname")} className="rounded-sm "/>
                {errors.firstname && <span>This field is required</span>}
            </div>

            <div className="flex flex-col items-start">
                <label htmlFor="name">Last Name</label>
                <input type="lastname" id="lastname" {...register("lastname")} className="rounded-sm "/>
                {errors.lastname && <span>This field is required</span>}
            </div>
       </div>

        <div className="flex flex-row gap-x-2 mb-3">
            <div className="flex flex-col items-start">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" {...register("email")} className="rounded-sm "/>
                {errors.email && <span>This field is required</span>}
            </div>

            <div className="flex flex-col items-start">
                <label htmlFor="contact">Contact Number</label>
                <input type="phone" id="contact" {...register("contact")} className="rounded-sm "/>
                {errors.contact && <span>This field is required</span>}
            </div>
        </div>

        <div className="flex flex-row gap-x-2 mb-3 justify-start">
            <div className="flex flex-col items-start">
                <label htmlFor="message">Message</label>
                <textarea rows={4} cols={35} type="text" id="message" {...register("message")} className="rounded-sm "
                placeholder="Enter your doubt/messages"/>
                {errors.message && <span>This field is required</span>}
            </div>
        </div>

        <button className="px-3 py-2 bg-violet-950 rounded-lg text-1xl mt-10 hover:bg-voilet-500" type="submit" onClick={handleSubmit}> Submit </button>
      </form>
    </div>
  )
}

export default ContactUsForm
