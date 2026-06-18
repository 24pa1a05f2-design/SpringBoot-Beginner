const john = {
    name: "John",
    gender: "Male",
    image: "../image/john.png"
};

const jane = {
    name: "Jane",
    gender: "Female",
    image: "../image/jane.png"
};

function showUser(user) {
    document.getElementById("container").innerHTML = `
        <div class="card">
            <img src="${user.image}" alt="${user.name}">
            <h2>${user.name}</h2>
            <p>Gender : ${user.gender}</p>
        </div>
    `;
}