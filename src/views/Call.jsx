import React , {Component} from 'react';
import socketIO from 'socket.io-client';

class Call extends Component {
    constructor() {
        super();
        this.state = {
          response: ''
          
        };
      }
    componentDidMount()
    {
        this.socket = socketIO("http://localhost:3000");
        this.socket.on("FromAPI",function(data,err){
            if(data){
               console.log(data);
            }
            else{
                console.log("No Connection")
            }
        })
        
        
    }
    render()
    {
       
        return(
            <div>
               <button onClick={()=>this.socket.emit('greet',{content:"hello"})}>Click</button>
            </div>
        );
    }
}
export default Call;