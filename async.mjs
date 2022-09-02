function samplepromise(){
    return Promise.resolve("fadli");
}

const nama = await samplepromise();
console.info(nama);