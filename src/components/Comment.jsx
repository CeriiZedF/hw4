import { PureComponent, React} from 'react'

class Comment extends PureComponent {
      constructor(props) {
        super(props)

        this.state = {
            isNameValid: undefined,
            isCommentsValid: undefined,
            arr: [
              
            ]
          }
        }
    
    

    
    validate = (e) => {
      let reg = /^\w{6,20}$/;
      if(!reg.test(e.target.value)){
        this.setState({[e.target.id]: false})
      }
      else{
        this.setState({[e.target.id]: true})
      }
  }
  
      load()  {
        let elements = [];
        for (var i = 0; i < this.state.arr.length; i++) {
          elements.push(<div>{this.state.arr[i].name + ' - ' + this.state.arr[i].text}</div>);
          
        }
        return elements;
      }
      
      click = () => {
          let name = document.getElementById('isNameValid'); 
          let text = document.getElementById('isCommentsValid');
          
        if(this.state.isCommentsValid && this.state.isNameValid){
          this.setState({
            arr: [...this.state.arr, { name: name.value, text: text.value }]
          });
        }
          // console.log(this.state.arr);
          
      }
    
      render(){
        return (
            <>
              <div>
                  Name:<input type="text" id='isNameValid' onInput={this.validate} className={(this.state.isNameValid === false) ? 'error' : ''}/>
                  <br />
                  <p>Comments</p>
                  <textarea id="isCommentsValid" onInput={this.validate} className={(this.state.isCommentsValid === false) ? 'error' : ''}></textarea>
                  <button onClick={this.click}>Add</button>
                  <ul id='list'>
                    {this.load()}
                  </ul>
              </div>
            </>
        )
      }
}

export default Comment