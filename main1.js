//1. Xóa phần tử bất kỳ có trong mảng
let mang = [8, 2, 3, 2, 4];
let newmang = [];
let n = parseInt(prompt("nhập vị trí muốn xoá trong mảng:"));
if(n >= mang.length){
    document.write(`vi tri ${n} không có trong mảng để xoá <br>`)
}
else{
    for(let i = 0; i < mang.length - 1; i++){
        if(i < n){
            newmang[i] = mang[i];
        }
        else{
            newmang[i] = mang[i+1];
        }
    }
}
document.write(`${mang} <br>`);
document.write(newmang);
console.log(newmang);