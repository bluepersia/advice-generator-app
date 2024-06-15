const counterEl = document.querySelector ('.cmp__count');
const quoteEl = document.querySelector ('.cmp__quote');

let slip;

document.querySelector ('.cmp__btn').addEventListener ('click', fetchAndRender);

fetchAndRender ();

async function fetchAndRender () 
{
    const res = await fetch (`https://api.adviceslip.com/advice?time=${Date.now()}`);

    if (!res.ok)
        throw new Error ((await res.json()).message || res.statusText);

    slip = (await res.json ()).slip;


    render ();
}


function render () 
{
    counterEl.textContent = `Advice #${slip.id}`;
    quoteEl.textContent = `“${slip.advice}”`
}