const messages = [
    "Jossie",
    "Andres",
    "Juan",
    "jose",
    "Diego",
    "Angel",
    "Rafael",
    "Lasso",
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
};

module.exports = { randomMsg };