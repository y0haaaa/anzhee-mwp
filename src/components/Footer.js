import React from 'react'
import { FaYoutube } from "react-icons/fa6";



export default function Footer() {
  const [result, setResult] = React.useState("");
  
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Отправка....");
        const formData = new FormData(event.target);
        console.log(event.target)
        try {
            const response = await fetch('mail.php', {
                    method: 'POST',
                    body: formData
            });
            // проверяем, что ответ есть
            if (!response.ok) throw (`Ошибка при обращении к серверу: ${response.status}`);
            // проверяем, что ответ действительно JSON
            const contentType = response.headers.get('content-type');
            if (!contentType || !contentType.includes('application/json')) {
            throw ('Ошибка. Ответ не JSON');
            }
            // обрабатываем запрос
            const json = await response.json();
            if (json.result === "success") {
                // в случае успеха
                setResult("Success");
                alert(json.info);
            } else { 
                // в случае ошибки
                console.log(json.desc);
                setResult("Error");
                throw (json.info);
            }
        }
        catch (error) { // обработка ошибки
            alert(error);
        }
    };  
  
  return (
      <footer id = 'contacts'>
          <div className='footer-sharp'>
            <h2>CONTACT US</h2>
              <div className='form' id='form'>
                <div className='form-blocks'>
                    <form className='form-block' onSubmit={onSubmit}>
                        <input className='form-block-input' type="text" name="name" required placeholder='Full Name'/>
                        <input className='form-block-input' type="email" name="email" required placeholder='Email'/>
                        <input className='form-block-input' type="tel" name="number" placeholder='Phone number'/>
                        <input className='form-block-input' type="text" name="country" placeholder='Country'/>
                        <input className='form-block-input' type="text" name="text" required placeholder='Your feedback'/>
                        <button className='form-button' type="submit">Send</button>
                    </form>
                    <span className='form-block-result'>{result}</span>
                </div>
              </div>
            <p>Please contact us by phone, mail or on our social media if you have any questions regarding our equipment or to make and order</p>
            <p className='footer-contact'>+971 050 743 2895</p>
            <p className='footer-contact'>SALE@ANZHEE.AE</p>
          </div>
          <div className='footer-ico'>
            {/* <a href = 'https://vk.com/anzhee_light?from=search'><FaVk /></a>
            <a href = 'https://t.me/Anzhee'><FaTelegram /></a> */}
            <a href = 'https://www.youtube.com/@AnzheeWorldwide'><FaYoutube /></a>
          </div>
      </footer>
    )
}
