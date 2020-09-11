//TODO get auth key from cookie
// use axios to get from backend

import React from 'react';

import DuoOutlinedIcon from '@material-ui/icons/DuoOutlined';
import axios from 'axios';
import FileSaver from 'file-saver';
import childOptionsMap from './ChildOptionsMap';

class Comp extends React.Component {
    constructor() {
        super();
        this.state = {
            val1: '',
            childList: childOptionsMap['Yenidogan'],
            val2: 0,
            prompt: ''
        }
        this.handleChangeChild = this.handleChangeChild.bind(this);
        this.handleChangePar = this.handleChangePar.bind(this);

        this.fire = this.fire.bind(this);
    };

    handleChangePar(event) {
        this.setState({
            val1: event.target.value,
            childList: childOptionsMap[event.target.value]
        })
    };

    handleChangeChild(event) {
        this.setState({
            val2: event.target.value
        });
    }
    fire() {
        var self = this;
        self.setState({
            prompt: ''
        })
        /* https://exp-fetch-furkanaydar.herokuapp.com/ */
        console.log(this.state.url);
        let baseUri = 'https://exp-fetch-furkanaydar.herokuapp.com';
        let page = 'https://stagedoctorstus.com/Video/' + this.state.val1;
        let vid = this.state.val2;

        console.log(page, vid);
        axios.post(baseUri + '/urls', {
            page: page,
            vid: vid
        })
            .then(function (response) {
                let videoUri = response.data.response;
                console.log(videoUri);
                if (videoUri !== 'undefined' && videoUri !== undefined) {
                    self.setState({
                        prompt: 'Dosya bulundu. İndirme bittiğinde indirilenler klasöründe gözükecek.'
                    })
                    FileSaver.saveAs(videoUri, self.state.val1 +'_' + self.state.val2 + '.mp4');
                }

                else {
                    self.setState({
                        prompt: 'Dosyaya erişim bloklandı. Bir süreliğine başka video dene.'
                    })
                }

            })
            .catch(function (error) {
                self.setState({
                    prompt: 'Bir hata oluştu.'
                })
            });
    }
    render() {
        return (
            <div style={{ margin: 0, marginTop: 60, left: '50%', top: '50%', fontFamily: 'Roboto, serif' }}>
                <h2 style={{ background: 'yellow', padding: 12, width: 400, margin: 'auto', textAlign: 'center' }}>
                    Video Çalıcı
                    <a style={{ marginLeft: 6, verticalAlign: 'middle' }}>
                        <DuoOutlinedIcon></DuoOutlinedIcon>

                    </a>
                </h2>
                <div style={{ marginTop: 32, }}>
                    <select value={this.state.val1} onChange={this.handleChangePar}
                        style={{ letterSpacing:1.2, width: 300, fontSize: 16, border: '1px solid black', borderRadius: 10, outline: 'none', padding: 8, }}
                        type="text" placeholder="videonun bulunduğu url?">
                        <option defaultValue="Yenidogan">Yenidoğan</option>
                        <option value="Onkoloji">Onkoloji</option>
                        <option value="Endokrinoloji">Endokrinoloji</option>
                        <option value="Metabolizma">Metabolizma</option>
                        <option value="Hematoloji">Hematoloji</option>
                        <option value="Noroloji">Nöroloji</option>
                        <option value="Romatoloji">Romatoloji</option>
                        <option value="Nefroloji">Nefroloji</option>
                        <option value="immunology">İmmünoloji</option>
                        <option value="Alerji">Alerji</option>
                        <option value="Gastroentroloji">Gastroenteroloji</option>
                        <option value="Solunum">Solunum</option>
                        <option value="Kardiyoloji">Kardiyoloji</option>
                        <option value="Vitaminler">Vitamin ve Mineraller - Anne sütü ve tamamlayıcı beslenme</option>
                        <option value="AcilTip">Çocuk Acil, Yoğun Bakım, Zehirlenmeler</option>
                        <option value="SosyalPediyatri">Sosyal Pediatri</option>
                        <option value="Dokuntu">Bağışıklama ve Döküntülü hastalıklar</option>
                        <option value="Büyüme"> Büyüme Gelişme ve Malnutrisyon</option>
                    </select>
                </div>
                <div>
                    <select style={{ letterSpacing:1.2, marginTop:12, width: 300, fontSize: 16, border: '1px solid black', borderRadius: 10, outline: 'none', padding: 8, }}>
                        {
                            this.state.childList.map((child, index) => <option key={index} value={index}>
                                {child}
                            </option>)
                        }
                    </select>
                </div>
                <button onClick={this.fire} style={{ marginTop: 32, padding: 12, fontSize: 18, letterSpacing: 1.8 }}> İndir</button>

                <div style={{ marginTop: 20, fontSize: 14 }}>{this.state.prompt}</div>
            </div>
        )
    }

}

export default Comp;
