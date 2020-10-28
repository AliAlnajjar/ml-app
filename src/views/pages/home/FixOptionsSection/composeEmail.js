

const composeEmail = (name = '', address = {}, email = '', mobileNo = '', phoneModel = '', service = '', desc = '', passCode = '', date = '', time = '', msgType) => {
    const composeMessage = () => {
        if (msgType && msgType == 'appointment') {
            return (
                `<div>
                    <p>
                    Full Name: ${name}
                    </p>
                    <p>
                    Address: ${address['streetNo']}  <br/> ${address['Zip'] + ' ' + address['city']}
                    </p>
                    <p>
                    Email: ${email}
                    </p>
                    <p>
                    Mobile: ${mobileNo}
                    </p>
                    <p>
                    Phone Model: ${phoneModel}
                    </p>
                    <p>
                    Service: ${service}
                    </p>
                    <p>
                    Date: ${date}
                    </p>
                    <p>
                    Time: ${time}
                    </p>
                </div>`
            )
        }
        else {
            return (
                `<div>
                    <p>
                    Full Name: ${name}
                    </p>
                    <p>
                    Address: ${address['streetNo']}  <br/> ${address['Zip'] + ' ' + address['city']}
                    </p>
                    <p>
                    Email: ${email}
                    </p>
                    <p>
                    Mobile number: ${mobileNo}
                    </p>
                    <p>
                    Phone Model: ${phoneModel}
                    </p>
                    <p>
                    Service: ${service}
                    </p>
                    <p>
                    Description: ${desc}
                    </p>
                    <p>
                    passCode: ${passCode}
                    </p>
                </div>`
            )
        }
    }
    let mailDetails = {
        subject: (msgType && msgType === 'appointment') ? 'Bestille time' : 'Posten..' + name || '' + '..' + email || '',
        message: composeMessage(),
    }
    return mailDetails

}
export default composeEmail;