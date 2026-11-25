const UI = {
    input: {
        slider: {
            far: document.getElementById("input-far-slider"),
            lost: document.getElementById("input-lost-slider")
        },
        number: {
            far: document.getElementById("input-far"),
            lost: document.getElementById("input-lost")
        }
    },
    combo: document.getElementById("input-maxcombo"),
    score: document.getElementById("score")
};
let notes = {
    combo: 0,
    far: 0,
    lost: 0
};

//ごめんなさい調べるの面倒だったので一つずつ書きます
//2回動くと思うんですけど値の変化はないので許して
UI.input.slider.far.addEventListener("change", () => {
    const value = UI.input.slider.far.value;
    if (value === "") return;
    notes.far = value;
    UI.input.number.far.value = notes.far;
});
UI.input.slider.lost.addEventListener("change", () => {
    const value = UI.input.slider.lost.value;
    if (value === "") return;
    notes.lost = value;
    UI.input.number.lost.value = notes.lost;
});
UI.input.number.far.addEventListener("change", () => {
    const value = UI.input.number.far.value;
    if (value === "") return;
    notes.far = value;
    UI.input.slider.far.value = notes.far;
});
UI.input.number.lost.addEventListener("change", () => {
    const value = UI.input.number.lost.value;
    if (value === "") return;
    notes.lost = value;
    UI.input.slider.lost.value = notes.lost;
});

UI.combo.addEventListener("change", () => {
    const value = UI.combo.value;
    if (value === "") return;
    notes.combo = value;
})

function calculateScore() {

}