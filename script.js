function calculateLoan() {
    // Mengambil nilai input
    const principal = parseFloat(document.getElementById('principal').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value);
    const years = parseInt(document.getElementById('years').value);

    // Validasi input
    if (isNaN(principal) || isNaN(interestRate) || isNaN(years)) {
        alert("Harap masukkan angka yang valid.");
        return;
    }

    // Hitung suku bunga bulanan dan jumlah total bulan
    const monthlyRate = (interestRate / 100) / 12;
    const totalMonths = years * 12;

    // Hitung pembayaran bulanan menggunakan rumus anuitas
    const monthlyPayment = (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -totalMonths));

    // Hitung total pembayaran dan total bunga
    const totalPayment = monthlyPayment * totalMonths;
    const totalInterest = totalPayment - principal;

    // Tampilkan hasil
    document.getElementById('totalPayment').innerText = totalPayment.toFixed(2);
    document.getElementById('totalInterest').innerText = totalInterest.toFixed(2);
    document.getElementById('monthlyPayment').innerText = monthlyPayment.toFixed(2);
}
