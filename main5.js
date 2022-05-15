//5. Sắp xếp các phần tử của 1 mảng theo thứ tự lớn đến bé
let mang = [8, 2, 3, 2, 4];
let trunggian;
for(i = 0; i < mang.length; i++){
    for(j = i + 1; j < mang.length; j++){
        if(mang[i] < mang[j]){
            trunggian = mang[i];
            mang[i] = mang[j];
            mang[j] = trunggian;
        }
    }
}
console.log(mang);