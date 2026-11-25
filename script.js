const UI = {
    input: {
        slider: {
            far: document.getElementById("input-far-slider"),
            lost: document.getElementById("input-lost-slider"),
            pure: document.getElementById("input-pure-slider")
        },
        number: {
            far: document.getElementById("input-far"),
            lost: document.getElementById("input-lost"),
            pure: document.getElementById("input-pure")
        }
    },
    combo: document.getElementById("input-maxcombo"),
    score: document.getElementById("score"),
    rank: document.getElementById("rank")
};
let notes = {
    combo: 0,
    far: 0,
    lost: 0,
    pure: 0
};
let score = 10000000;
const rank = [
    ["EX+", 9900000],
    ["EX", 9800000],
    ["AA", 9500000],
    ["A", 9200000],
    ["B", 8900000]
];

//ごめんなさい調べるの面倒だったので一つずつ書きます
//2回動くと思うんですけど値の変化はないので許して
//本当にごめんなさい
UI.input.slider.far.addEventListener("input", () => {
    const value = UI.input.slider.far.value;
    if (value === "") return;
    notes.far = Number(value);
    UI.input.number.far.value = value;
    calculateScore();
});
UI.input.slider.lost.addEventListener("input", () => {
    const value = UI.input.slider.lost.value;
    if (value === "") return;
    notes.lost = Number(value);
    UI.input.number.lost.value = value;
    calculateScore();
});
UI.input.number.far.addEventListener("input", () => {
    const value = UI.input.number.far.value;
    if (value === "") return;
    notes.far = Number(value);
    UI.input.slider.far.value = value;
    calculateScore();
});
UI.input.number.lost.addEventListener("input", () => {
    const value = UI.input.number.lost.value;
    if (value === "") return;
    notes.lost = Number(value);
    UI.input.slider.lost.value = value;
    calculateScore();
});
UI.input.number.pure.addEventListener("input", () => {
    const value = UI.input.number.pure.value;
    if (value === "") return;
    notes.pure = Number(value);
    UI.input.slider.pure.value = value;
    calculateScore();
})
UI.input.slider.pure.addEventListener("input", () => {
    const value = UI.input.slider.pure.value;
    if (value === "") return;
    notes.pure = Number(value);
    UI.input.number.pure.value = value;
    calculateScore();
})

UI.combo.addEventListener("input", () => {
    const value = UI.combo.value;
    if (value === "") return;
    notes.combo = Number(value);
    calculateScore();
})

function calculateScore() {
    if (notes.combo === 0) return;
    if (notes.combo < (notes.far + notes.lost)) return;

    const pureScore = 10000000 / notes.combo;
    score = Math.round(notes.combo + 10000000 - notes.far * (pureScore / 2) - notes.lost * pureScore - notes.pure);

    UI.score.textContent = score;
    UI.rank.textContent = checkRank(score);
}

function checkRank(sc) {
    let rankIndex = 0;
    for (let i = 0; i < rank.length; i++) {
        if (sc >= rank[i][1]) {
            rankIndex = i;
            break;
        }
    }
    return rank[rankIndex][0];
}