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
    for(let i = 0; i < deck.length ; i++){
        for(let j=i+4; j < deck.length ; j=j+4){
            let hand = [];
            let vr = [];
            hand.push(deck[i]);
            hand.push(deck[j]);
            vr.push(hand);
            if(i < 4){
                Axs.push(vr);
            }
            else if(i >= 4 && i < 8){
                Kxs.push(vr);
            }
            else if(i >= 8 && i < 12){
                Qxs.push(vr);
            }
            else if(i >= 12 && i < 16){
                Jxs.push(vr);
            }
            else if(i >= 16 && i < 20){
                Txs.push(vr);
            }
            else if(i >= 20 && i < 24){
                nuevexs.push(vr);
            }
            else if(i >= 24 && i < 28){
                ochoxs.push(vr);
            }
            else if(i >= 28 && i < 32){
                sietexs.push(vr);
            }
            else if(i >= 32 && i < 36){
                seisxs.push(vr);
            }
            else if(i >= 36 && i < 40){
                cincoxs.push(vr);
            }
            else if(i >= 40 && i < 44){
                cuatroxs.push(vr);
            }
            else if(i >= 44 && i < 48){
                tresxs.push(vr);
            }
            else{
                dosxs.push(vr);
            }
        }
    }
}

suited()

console.log(Axs)
console.log(Kxs)
console.log(dosxs)


