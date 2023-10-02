const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if(bar){
    bar.addEventListener('click', ()=>{
        nav.classList.add('active')
    })
}

if(close){
    close.addEventListener('click', ()=>{
        nav.classList.remove('active')
    })
}

document.querySelectorAll('.btnDetail').forEach(item =>{
    item.addEventListener('click',(e)=>{
        let parent = e.target.parentNode.parentNode;
       let gambar = parent.querySelector('.card-img-top').src
       let harga = parent.querySelector('.harga').innerHTML;

        let judul = parent.querySelector('.card-text').innerHTML


        let deskripsi = parent.querySelector('.deskripsi') ? parent.querySelector('.deskripsi').innerHTML : '<i>tidak ada informasi yang tersedia </i>';
       
        let tombolModal = document.querySelector('.btnModal');
        tombolModal.click();

        document.querySelector('.modalTitle').innerHTML = judul;
        let image = document.createElement('img')
        image.src = gambar;
        image.classList.add('w-100');
        document.querySelector('.modalImage').innerHTML = '';
        document.querySelector('.modalImage').appendChild(image);

        document.querySelector('.modalDeskripsi').innerHTML = deskripsi;
         document.querySelector('.modaHarga').innerHTML = harga;

         const nohp = "081271101180";
         let pesan = `https://web.whatsapp.com/send?phone = ${nohp},hallo bang saya mau pesan prodac ini ${gambar}`;

         document.querySelector('.btnBeli').href = pesan;
         
    });
});