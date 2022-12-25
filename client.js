const RegisterPlugFactory = window["RegisterPlugFactory"] || function (opts) {
    console.log("Not found RegisterPlugFactory")
};

RegisterPlugFactory((opts) => {
    opts.target.innerHTML = `Hello world @ example_repo_item`;
})