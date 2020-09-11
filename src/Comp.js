//TODO get auth key from cookie
// use axios to get from backend

import React from 'react';

import DuoOutlinedIcon from '@material-ui/icons/DuoOutlined';
import axios from 'axios';

class Comp extends React.Component {
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
        /* https://exp-fetch-furkanaydar.herokuapp.com/ */
        console.log(this.state.url);
        let baseUri = 'https://stagedoctorstus.com/Video/Yenidogan';
        axios.post(baseUri + '/urls', {
            page: this.state.url,
            vid: this.state.id
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    render() {
        return (
            <div style={{margin: 0, left:'50%', top: '50%', fontFamily: 'Roboto, serif' }}>
                <h2 style={{ background: 'yellow', padding: 12, width: 400, margin: 'auto', textAlign: 'center' }}>
                    Video Çalıcı
                    <a style={{marginLeft:6, verticalAlign: 'middle'}}>
                        <DuoOutlinedIcon></DuoOutlinedIcon>

                    </a>
                </h2>
                <div style={{ marginTop: 32, }}>
                    <input name='url' value={this.state.url} onChange={this.handleChange} style={{ width: 300, fontSize: 24, border: '1px solid black', height: 40, borderRadius: 20, outline: 'none', padding: 12, }} type="text" placeholder="videonun bulunduğu url?">
                    </input>
                </div>
                <div>
                    <input name='id' value={this.state.id} onChange={this.handleChange} style={{ marginTop: 32, fontSize: 24, border: '1px solid black', width: 300, height: 40, borderRadius: 20, outline: 'none', padding: 12, }} type="number" placeholder="sayfadaki kaçıncı video?">
                    </input>
                </div>
                <button onClick={this.fire} style={{ marginTop: 32, padding: 12, fontSize: 18, letterSpacing: 1.8 }}> İndir</button>
            </div>
        )
    }

}

export default Comp;
