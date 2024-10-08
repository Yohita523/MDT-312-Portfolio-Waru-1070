window.onload = function() {
    const galleryContainer = document.querySelector('.gallery-container');
    const images = document.querySelectorAll('.gallery img');
    let index = 0;

    document.getElementById('next').addEventListener('click', () => {
        index = (index + 1) % images.length;
        updateGallery();
    });

    document.getElementById('prev').addEventListener('click', () => {
        index = (index - 1 + images.length) % images.length;
        updateGallery();
    });

    function updateGallery() {
        const offset = -index * 100;
        galleryContainer.style.transform = `translateX(${offset}%)`;
    }

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "about.json", true);
    xhr.onload = function() {
        if (xhr.status == 200) {
            const data = JSON.parse(xhr.responseText);
            document.getElementById('About_me').textContent = data["about me"].Text;
        }
    };
    xhr.send();

};

function showAllRefs() {
    const references = [
        { name: "W3Schools เพื่อ Ref ส่วนต่างๆ ของเว็ป", url: "https://www.w3schools.com \n"},
        { name: "Black Desert Ref ส่วนของ SNS ในส่วน Contact", url: "https://blackdesert.pearlabyss.com/asia/th-TH/Main\n" },
        { name: "CDNJS ดึง Iconต่างๆ จาก Cloudflare  ", url: "https://cdnjs.cloudflare.com\n" },
        { name: "Reference งาน Assignment 3 - 7" ,url: ""}
    ];

    let message = "References ทั้งหมดของ Website:\n\n";

    references.forEach(ref => {
        message += `${ref.name} : ${ref.url}\n`;
    });

    alert(message);
}

