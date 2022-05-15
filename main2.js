//2. Thêm phần tử vị trị bất kỳ vào mảng
let mang = [8, 2, 3, 2, 4];
let newmang = [];
let n = parseInt(prompt("nhập vị trí muốn thêm trong mảng:"));
let giatri = parseInt(prompt("nhập giá trị muốn thêm:"));
if(n >= mang.length){
    document.write(`vi tri ${n} không có trong mảng để thêm <br>`)
}else{
    for(let i = 0; i < mang.length + 1; i++){
        if(i < n){
            newmang[i] = mang[i];
        }
        else if(i == n){
            newmang[i] = giatri;
        }
        else{
            newmang[i] = mang[i-1];
        }
    }
}
document.write(`${mang} <br>`);
document.write(newmang);
console.log(newmang);