
import './Contact.css';
const Contact = () => {
    return (
        <section className='contact-us'>
          <h1 className='title'>
            <span className='icon-mail'></span>
            Contact us
          </h1>
          <p className='subtitle'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quae consequatur reprehenderit fugit rerum ipsum nisi praesentium itaque incidunt, adipisci aperiam, nesciunt veritatis error voluptas ex, molestias pariatur alias! Cum.</p>
        <div className="flex">
            <form className='' action="">
                <div className='flex'>
                    <label htmlFor="email">Email Address:</label>
                    <input required type="email" id='email' />
                </div>
                <div className='flex' style={{marginTop:"24px"}}>
                  <label htmlFor="message">Your message:</label>
                  <textarea required name="" id="message" cols="30" rows="10"></textarea>
                </div>
                <button className='submit flex' type="submit">Submit</button>
            </form>
            <div className="animation ">animation</div>
        </div>
        
        
        
        
        
        
        </section>
    );
}
 
export default Contact;
