const deck = ['Ah', 'As', 'Ad', 'Ac',
              'Kh', 'Ks', 'Kd', 'Kc',
              'Qh', 'Qs', 'Qd', 'Qc',
              'Jh', 'Js', 'Jd', 'Jc',
              'Th', 'Ts', 'Td', 'Tc',
              '9h', '9s', '9d', '9c',
              '8h', '8s', '8d', '8c',
              '7h', '7s', '7d', '7c',
              '6h', '6s', '6d', '6c',
              '5h', '5s', '5d', '5c',
              '4h', '4s', '4d', '4c',
              '3h', '3s', '3d', '3c',
              '2h', '2s', '2d', '2c'];

var Axs = [];
var Kxs = [];
var Qxs = [];
var Jxs = [];
var Txs = [];
var nuevexs = [];
var ochoxs = [];
var sietexs = [];
var seisxs = [];
var cincoxs = [];
var cuatroxs = [];
var tresxs = [];
var dosxs = [];

var Axo = [];
var Kxo = [];
var Qxo = [];
var Jxo = [];
var Txo = [];
var nuevexo = [];
var ochoxo = [];
var sietexo = [];
var seisxo = [];
var cincoxo = [];
var cuatroxo = [];
var tresxo = [];
var dosxo = [];


function suited(){
    let hand = [];
    let vr = [];
    for(let i = 0; i < deck.length ; i++){
        for(let j=4; j < deck.length ; j=j+4){
            hand.push(deck[i]);
            hand.push(deck[j]);
            vr.push(hand);
            console.log(vr)
            hand = [];
            console.log(hand)
        }
        Axs.push[vr];
    }
}

suited()
