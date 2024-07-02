let ClockTime =()=> {
 let time = new Date();
return <p className="lead">This is the Current Date & Current Time : {time.toLocaleDateString()} - {time.toLocaleTimeString()}</p>
}

export default ClockTime;