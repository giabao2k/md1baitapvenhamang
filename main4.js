//4. Sắp xếp các phần tử của 1 mảng theo thứ tự bé đến lớn
let mang = [8, 2, 3, 2, 4];
let trunggian;
// for(let i = 0; i< mang.length; i++){
//     if(mang[i] > mang[i+1]){
//         mang[i] = trunggian;
//         mang[i] = mang[i+1];
//         mang[i+1] = trunggian;

//     }
// }
for(let i = 0; i < mang.length; i++){
    for(let j = i+1; j < mang.length; j++){
        if(mang[i] > mang[j]){
            trunggian = mang[i];
            mang[i] = mang[j];
            mang[j] = trunggian;
        }
    }
}
document.write(`Mảng được sắp xếp từ bé đến lớn là ${mang}.`)
console.log(mang);
