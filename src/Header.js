import React, { Component } from 'react'
import Moment from 'moment';

export default class Header extends Component {


render() {
    let idLocale = require ('moment/locale/id');
    Moment.updateLocale ('id', idLocale);
    return (
    <div>
        <img src="https://img2.apk.tools/150/2/f/a/com.koller.lukas.todolist.png" alt="avatar" />
        <h3>Aplikasi Aktivitas Harian (ToDo)</h3>
        <p>{Moment().format('dddd')} {Moment().format('LLL')}</p>
    </div>
    )
}
}
