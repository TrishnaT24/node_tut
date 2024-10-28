const os=require('os')

//info abt curr user
const user=os.userInfo()
 console.log(user)

//methods returns system uptime in secs
console.log(`the system uptime is ${os.uptime()}seconds`);

const curent={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}
console.log(curent);












































