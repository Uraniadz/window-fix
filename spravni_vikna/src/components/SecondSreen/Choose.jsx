// import React, { useEffect, useState } from 'react';
import './Choose.css';
import Items from '../../data/Items.json';

// 1 варіант пошуку Mock-даних через Класс
// class Services {
//     constructor (id, img, name, price, created) {
//         this.id = id;
//         this.img = img;
//         this.name = name;
//         this.price = price;
//         this.created = created;
//     }
// }
      
// const obFromConstr = new Services (1, '/assets/tools.png', 'Регулювання вікон', 200, new Date().toISOString());
// const obFromConstr2 = new Services(2, '/assets/fix2.png', 'Ремонт фурнітури', 400, new Date().toISOString());
// const obFromConstr3 = new Services(3, '/assets/fix3.png', 'Заміна ущільнювача', 80, new Date().toISOString());

// const Items = [
//     obFromConstr,
//     obFromConstr2,
//     obFromConstr3
// ];

// function Fix (props) {
//     return (
//         <div className={"fix_" + props.id}>
//             <ul id={"mock_" + props.id} className={"mock_" + props.id}>
//             <li><img src={props.img} alt='noimg'/></li>
//             <li><h4> {props.name}</h4></li>
//             <li><p> від {props.price} грн</p></li>
//             </ul>
//         </div>
//     );
// }

// function Choose () {

//     return (
//         <div className="choose">
//             {Items.map(item => <Fix id={item.id} key={item.id} img={item.img} name={item.name} price={item.price}/>)}
//          </div>
//     );
// }

// 2 варіант пошуку Mock-даних через Файл json in src та import

function Fix (props) {
    return (
        <div className={"fix_" + props.id}>
            <ul id={"mock_" + props.id} className={"mock_" + props.id}>
            <li><img src={props.img} alt='noimg'/></li>
            <li><h4> {props.name}</h4></li>
            <li><p> від {props.price} грн</p></li>
            </ul>
        </div>
    );
}

function Choose () {

    return (
        <div className="choose">
            {Items.map(item => <Fix id={item.id} key={item.id} img={item.img} name={item.name} price={item.price}/>)}
         </div>
    );
}

// 3 варіант пошуку Mock-даних через backEnd file public json and fetch()

// function retrievData () {
//     return fetch('/data/Items.json')
//     .then((response) => response.json());
// }

// function Fix (props) {
//     return (
//         <div className={"fix_" + props.id}>
//             <ul id={"mock_" + props.id} className={"mock_" + props.id}>
//             <li><img src={props.img} alt='noimg'/></li>
//             <li><h4> {props.name}</h4></li>
//             <li><p> від {props.price} грн</p></li>
//             </ul>
//         </div>
//     );
// }

// function Choose () {
//     const [Items, setItems] = useState([0]);

//     useEffect(()=> {
//         retrievData().then((data) => setItems(data));
//     }, []);

//     return (
//         <div className="choose">
//             {Items.map(item => <Fix id={item.id} key={item.id} img={item.img} name={item.name} price={item.price}/>)}
//          </div>
//     );
// }

export default Choose;