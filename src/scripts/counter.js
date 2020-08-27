
export const counter = (seeds) => {
    let asparagus = 0;
    let corn = 0;
    let potato = 0;
    let soybean = 0;
    let sunflower = 0;
    let wheat = 0;
    for (const obj of seeds) {
        if (obj === "Asparagus"){
            asparagus++
        }
        else if (obj === "Corn"){
            corn++
        }
        else if (obj === "Potato"){
            potato++
        }
        else if (obj === "Soybean"){
            soybean++
        }
        else if (obj === "Sunflower"){
            sunflower++
        }
        else if (obj === "Wheat"){
            wheat++
        }
    }
    return {asparagus, corn, potato, soybean, sunflower, wheat}
}

export const counterHTML = (counter) => {
    return `
        <section class="Food">
            <div class="title"> Food </div>
            <div class="item"> Asparagus </div>
            <div class="item"> Corn </div>
            <div class="item"> Potato </div>
            <div class="item"> Soybean </div>
            <div class="item"> Sunflower </div>
            <div class="item"> Wheat </div>
        </section>
        <section class="Quantitiy> 
            <div class="title"> Quantity </div>
            <div class="item"> ${counter.asparagus} </div>
            <div class="item"> ${counter.corn} </div>
            <div class="item"> ${counter.potato} </div>
            <div class="item"> ${counter.soybean} </div>
            <div class="item"> ${counter.sunflower} </div>
            <div class="item"> ${counter.wheat} </div>
        </section>
    `
}