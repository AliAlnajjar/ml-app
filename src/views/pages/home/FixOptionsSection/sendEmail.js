
import axios from 'axios';

const sendEmail = (name = '', address = {}, email = '', mobileNo = '', phoneModel = '', service = '', desc = '', passCode = '', date = '', time = '', msgType) => {
    const composeMessage = () => {
        if (msgType && msgType == 'appointment') {
            return (
                `<div>
                    <p>
                    name: ${name}
                    </p>
                    <p>
                    address: ${address['streetNo']}  <br/> ${address['Zip'] + ' ' + address['city']}
                    </p>
                    <p>
                    email: ${email}
                    </p>
                    <p>
                    mobile: ${mobileNo}
                    </p>
                    <p>
                    phoneModel: ${phoneModel}
                    </p>
                    <p>
                    service: ${service}
                    </p>
                    <p>
                    date: ${date}
                    </p>
                    <p>
                    time: ${time}
                    </p>
                </div>`
            )
        }
        else {
            return (
                `<div>
                    <p>
                    name: ${name}
                    </p>
                    <p>
                    address: ${address['streetNo']}  <br/> ${address['Zip'] + ' ' + address['city']}
                    </p>
                    <p>
                    email: ${email}
                    </p>
                    <p>
                    mobile: ${mobileNo}
                    </p>
                    <p>
                    phoneModel: ${phoneModel}
                    </p>
                    <p>
                    service: ${service}
                    </p>
                    <p>
                    description: ${desc}
                    </p>
                    <p>
                    passCode: ${passCode}
                    </p>
                </div>`
            )
        }

    }
    const API_PATH = 'https://mobilland.no/api/send_mail.php';

    let mailDetails = {
        subject: (msgType && msgType == 'appointment') ? 'Bestille time' : 'Posten..' + name || '' + '..' + email || '',
        message: composeMessage(),
    }
    axios({
        method: 'post',
        url: `${API_PATH}`,
        headers: { 'content-type': 'application/json' },
        data: mailDetails
    })
        .then(result => { return (result) })
        .catch(error => { return (error) })
}
export default sendEmail;