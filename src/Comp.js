//TODO get auth key from cookie
// use axios to get from backend

import React from 'react';
import DuoOutlinedIcon from '@material-ui/icons/DuoOutlined';

class Comp extends React.Component{
    constructor() {
        super();
        this.state = {
            url: '',
            id: 0,
        }
        this.handleChange = this.handleChange.bind(this);
        this.fire = this.fire.bind(this);
    }
    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }
    fire() {
        console.log(this.state.url);

    }
    render() {
        return(
            <div>
            <h2 style={{background: 'yellow', padding:12, width:400, margin:'auto', textAlign: 'center'}}> Video Çalıcı</h2>
            <div style={{marginTop:32, }}>
              <input name='url' value={this.state.url} onChange={this.handleChange} style={{width:300, fontSize:24, border:'1px solid black', height:40, borderRadius:20, outline: 'none', padding: 12,}} type="text" placeholder="videonun bulunduğu url?">
              </input>
              <DuoOutlinedIcon></DuoOutlinedIcon>
            </div>
            <div>
            <input name='id' value={this.state.id} onChange={this.handleChange} style={{marginTop:32, fontSize:24,   border:'1px solid black', width:300, height:40, borderRadius:20, outline: 'none', padding: 12,}} type="number" placeholder="sayfadaki kaçıncı video?">
              </input>
            </div>
            <button onClick={this.fire} style={{marginTop:32, padding:12, fontSize:18, letterSpacing:1.8}}> İndir</button>
            </div>
        )
    }

}

export default Comp;
