//3. Nhập 1 số kiểm tra số đó có trong mảng hay không? Nếu có trả về vị trí của phần tử đó
let mang = [1, 2, 3, 2, 4];
let so = parseFloat(prompt('Nhập vào số cần kiểm tra:'));
for(let i = 0; i < mang.length; i++){
    if(so == mang[i]){
        document.write(`số ${so} có vị trí thứ ${i} trong mảng. <br>`)
    }
}
