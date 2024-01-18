function hitung() {
    const sisi = parseFloat(document.getElementById('sisi').value);

    if (isNaN(sisi) || sisi <= 0) {
        alert('Sisi harus berupa angka positif!');
        return;
    }

    const hitung = document.querySelector('input[name="hitung"]:checked');
    
    if (!hitung) {
        alert('Pilih apakah akan menghitung luas atau keliling!');
        return;
    }

    const jenisHitung = hitung.value;

    if (jenisHitung === 'luas') {
        const luas = sisi * sisi;
        document.getElementById('luas').textContent = `Luas persegi: ${luas}`;
    } else if (jenisHitung === 'keliling') {
        const keliling = 4 * sisi;
        document.getElementById('keliling').textContent = `Keliling persegi: ${keliling}`;
    }

    const gambarPersegiDiv = document.getElementById('gambar-persegi');
    gambarPersegiDiv.innerHTML = `<img src="square.png" alt="Persegi Image" style="width: ${sisi}px; height: ${sisi}px;">`;
}




function resetForm() {
    document.getElementById('sisi').value = '';
    document.getElementById('luas').textContent = '';
    document.getElementById('keliling').textContent = '';

    const gambarPersegiDiv = document.getElementById('gambar-persegi');
    gambarPersegiDiv.style.width = '0';
    gambarPersegiDiv.style.height = '0';
}
