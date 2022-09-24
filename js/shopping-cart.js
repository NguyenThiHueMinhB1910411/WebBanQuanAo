

var a = [];
var itemList = {
    stt: 1,
    masp: "sp001",
    name: "Lego rabbit",
    price: 350000,
    photo: "images/sanpham/badhabit.png"
}
a.push(itemList);
itemList = {
    stt: 2,
    masp: "sp002",
    name: "Skull Wolf Wash Tee",
    price: 350000,
    photo: "images/sanpham/hades.png"
}
a.push(itemList);
itemList = {
    stt: 3,
    masp: "sp003",
    name: "Rainbow Tee",
    price: 180000,
    photo: "images/sanpham/outerity.png"
}
a.push(itemList);
itemList = {
    stt: 4,
    masp: "sp004",
    name: "Youth White Hoodie",
    price: 450000,
    photo: "images/sanpham/hoodie_zip_heyyou.png"
}
a.push(itemList);
itemList = {
    stt: 5,
    masp: "sp005",
    name: "Basic Zipped Hoodie",
    price: 550000,
    photo: "images/sanpham/hoodie_zip_dirtycoins .png"
}
a.push(itemList);
itemList = {
    stt: 6,
    masp: "sp006",
    name: "2-Tone Zip Jacket",
    price: 580000,
    photo: "images/sanpham/jacket_nowsaigon.png"
}
a.push(itemList);
itemList = {
    stt: 7,
    masp: "sp007",
    name: "Cargo Pants",
    price: 350000,
    photo: "images/sanpham/pantblack.png"
}
a.push(itemList);
itemList = {
    stt: 8,
    masp: "sp008",
    name: "Monogram",
    price: 380000,
    photo: "images/sanpham/Monogram.png"
}
a.push(itemList);
itemList = {
    stt: 9,
    masp: "sp009",
    name: "Sici Uncover Pants",
    price: 580000,
    photo: "images/sanpham/uncover_pant.png"
}
a.push(itemList);

var sp = [],
    sl = [],
    stt = [];
//window.localStorage.clear();

function dathang(masp) {
    var number1, number;
    number = document.getElementById(masp).value;
    var f = 0;
    if (typeof localStorage[masp] === "undefined") {
        if (parseInt(number) > 0 && parseInt(number) <= 100) {
            window.localStorage.setItem(masp, number);
            alert("Đã thêm thành công vào giỏ hàng.")

        } else alert("Vui lòng nhập số lượng.");

    } else {
        number1 = window.localStorage.getItem(masp, number);
        number = parseInt(number) + parseInt(number1);

        if ((number) > 100) {
            alert("Sản phẩm " +  masp + " > 100." +" Vui lòng nhập số lượng <= 100");
        } else {
            window.localStorage.setItem(masp, number);
            alert("Đã thêm thành công vào giỏ hàng.");


        }
    }

}

function donhang() {
    window.location.href = "donhang.html";
}

// Hàm tính tỷ lệ khuyến mãi. Điều kiện thứ 2 là: Giờ đặt hàng (7h sáng đến 11h và 13h đến 17h) :
function getDiscountRate() {
    var d = new Date(); //lấy ngày hiện tại của máy tính
    var weekday = d.getDay(); //lấy ngày trong tuần
    var totalMins = d.getHours() * 60 + d.getMinutes(); //đổi

    if (weekday >= 1 && weekday <= 3 && ((totalMins >= 420 && totalMins <= 660) || (totalMins >= 780 && totalMins <= 1020)))
        return 0.01;
    return 0;
}

function hienthi() {
    var tongtien = 0,
        chietkhau = 0,
        thue = 0,
        tongdonhang = 0;
    var kq = '<table border="1" "><tr > <td class="detail" >Hình SP</td><td class="detail">Tên SP</td><td class="detail">Số Lượng</td><td class="detail">Giá</td><td class="detail">Thành tiền</td><td class="detail">Huỷ</td></tr>'
    for (var i = 0; i < sp.length; i++) {
        for (var j = 0; j < a.length; j++) {
            if (sp[i] == a[j].masp) {
                kq += '<tr><td><img src="' + a[j].photo + '" ></td>';
                kq += '<td>' + a[j].name + '</td>';
                kq += '<td>' + sl[i] + '</td>';
                kq += '<td>' + a[j].price + '</td>';
                kq += '<td>' + (parseInt(sl[i]) * a[j].price) + '</td>';
                kq += '<td><button onclick="xoa(' + a[j].stt + ')" style="background:red ; color:#000"><i class="fas fa-trash-alt"></i></button></td></tr>';
                tongtien += a[j].price * sl[i];
            }
        }

    }
    chietkhau = getDiscountRate() * tongtien;

    thue = 0.01 * (tongtien - chietkhau);

    tongdonhang = tongtien - chietkhau + thue;
    kq += '<tr> <td colspan="6" style="text-align:right;">Tổng thành tiền = ' + tongtien + ' </td></tr>'
    kq += '<tr> <td colspan="6" style="text-align:right;">Chiết khấu( giảm giá) = ' + chietkhau + ' </td></tr>'
    kq += '<tr> <td colspan="6" style="text-align:right;">Thuế(VAT) = ' + thue + ' </td></tr>'
    kq += '<tr> <td colspan="6" style="text-align:right; color:rgb(23, 19, 38); font-weight: bold;">Tổng đơn hàng = ' + tongdonhang +  '</td></tr>'
    kq += '<tr><td colspan="6" style="text-align:center;"><button  id = "xacnhan" onclick="xacnhan()">Xác nhận đơn hàng</button></td></tr></table>'
    document.getElementById("noidung").innerHTML = kq;
    document.getElementById("chitiet").click();


}

function chitiet() {
    var j = 0,
        masp;
    for (var i = 0; i < a.length; i++) {
        masp = 'sp00' + (i + 1);
        if (window.localStorage.getItem(masp) != null) {
            sl[j] = window.localStorage.getItem(masp);
            sp[j] = masp;
            j++;
        }

    }
    hienthi();
}

function xoa(stt) {
    for (var i = 0; i < a.length; i++) {
        if (stt == a[i].stt) {
            window.localStorage.removeItem(a[i].masp);
        }
    }
    window.location.href = "donhang.html";
}

function xacnhan() {
    alert("Đơn hàng đã được xác nhận.");
    for (var i = 0; i < a.length; i++) {

        window.localStorage.removeItem(a[i].masp);
    }
    location.href = 'donhang.html';
}