let dssv = [
    {
        maso: 1,
        tensv: "Nguyễn Văn A",
        dtb: 1.0,
        gioitinh: false,
    },
    {
        maso: 2,
        tensv: "Trần Văn B",
        dtb: 1.0,
        gioitinh: true,
    }

]
function hienthidssv() {
    document.getElementById("info").innerHTML = "";
    for(sv of dssv) {
        document.getElementById("info").innerHTML += 
        `<tr>
            <td>${sv.maso}</td>
            <td>${sv.tensv}</td>
            <td>${sv.dtb}</td>
            <td>${sv.gioitinh ? "Nam" : "Nữ"}</td>
        </tr>`;
    }
}

hienthidssv();

document.getElementById("btn").addEventListener("click", e => {
    e.preventDefault();
    
    let sv = {
        maso: document.getElementById("maso").value,
        tensv: document.getElementById("tensv").value,
        dtb: document.getElementById("dtb").value,
        gioitinh: document.getElementById("gioitinh").checked,
    }

    if(sv.maso == ""){
        alert("Vui lòng nhập mã số sinh viên");
        document.getElementById("maso").focus();
        return;
    }

    if(dssv.some(item => item.maso == sv.maso)) {
        alert("Mã số sinh viên đã tồn tại");
        document.getElementById("maso").focus();
        return;
    }

    if(sv.tensv == ""){
        alert("Vui lòng nhập tên sinh viên");
        document.getElementById("tensv").focus();
        return;
    }

    if(sv.dtb == ""){
        alert("Vui lòng nhập điểm trung bình ");
        document.getElementById("dtb").focus();
        return;
    }
    if (isNaN(sv.dtb)){
        alert("Vui lòng nhập điểm trung bình là số");
        document.getElementById("dtb").focus();
        return;
    }

    sv.dtb = Number(sv.dtb);
    if (sv.dtb <0 || sv.dtb >10) {
        alert("Vui lòng nhập điểm trung bình từ 0 đến 10");
        document.getElementById("dtb").focus();
        return;
    }
    document.getElementById("btn-find").addEventListener("click", e => {
        e.preventDefault();

        let keyword = prompt("Nhập họ tên sinh viên cần tìm");

        let result = dssv.find(item => item.tensv== keyword)

        if(result==undefined) {
            alert("Không tìm ra");

        }
        else {
            alert(`Mã sinh viên cần tìm là: ${result.maso}`);

        }
    })

    dssv.push(sv);
    hienthidssv();
})