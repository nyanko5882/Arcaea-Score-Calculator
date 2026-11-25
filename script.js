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
//本当にごめんなさい
UI.input.slider.far.addEventListener("change", () => {
    const value = UI.input.slider.far.valueAsNumber;
    if (value === "") return;
    notes.far = value;
    UI.input.number.far.value = String(notes.far);
});
UI.input.slider.lost.addEventListener("change", () => {
    const value = UI.input.slider.lost.valueAsNumber;
    if (value === "") return;
    notes.lost = value;
    UI.input.number.lost.value = String(notes.lost);
});
UI.input.number.far.addEventListener("change", () => {
    const value = UI.input.number.far.valueAsNumber;
    if (value === "") return;
    notes.far = value;
    UI.input.slider.far.value = String(notes.far);
});
UI.input.number.lost.addEventListener("change", () => {
    const value = UI.input.number.lost.valueAsNumber;
    if (value === "") return;
    notes.lost = value;
    UI.input.slider.lost.value = String(notes.lost);
});

UI.combo.addEventListener("change", () => {
    const value = UI.combo.valueAsNumber;
    if (value === "") return;
    notes.combo = value;
})

function calculateScore() {
    if (notes.combo === 0) return;
    if (notes.combo < (notes.far + notes.lost)) return;

    const pureScore = 10000000 / notes.combo;
    const score = Math.round(notes.combo + 10000000 - notes.far * (pureScore / 2) - notes.lost * pureScore);

    UI.score = score;
}