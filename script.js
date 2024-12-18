// Data untuk Grafik
const labels = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
const data2022 = [4017, 6135, 7091, 5841, 5036, 4547, 3467, 3970, 6313, 3595, 9207, 5945];
const data2023 = [2416, 4136, 7935, 8004, 9505, 5026, 6108, 6343, 9404, 9280, 9287, 8689];

// Membuat Grafik dengan Chart.js
const ctx = document.getElementById('salesChart').getContext('2d');
const salesChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [
            {
                label: '2022',
                data: data2022,
                backgroundColor: 'blue',
                barPercentage: 0.8, // Ukuran bar
                categoryPercentage: 0.8
            },
            {
                label: '2023',
                data: data2023,
                backgroundColor: 'red',
                barPercentage: 0.8,
                categoryPercentage: 0.8
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Laporan Penjualan'
            },
            legend: {
                labels: {
                    usePointStyle: true, // Menggunakan kotak kecil untuk legend
                    pointStyle: 'rectRounded', // Bentuk kotak lebih kecil dan membulat
                    boxWidth: 10, // Lebar kotak
                    boxHeight: 10, // Tinggi kotak
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
