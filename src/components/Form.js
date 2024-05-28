import React from 'react'

export default function Form() {
    
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
        <div className='form' id='form'>
            <h2 className='title'>FEEDBACK</h2>
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
    );
  }