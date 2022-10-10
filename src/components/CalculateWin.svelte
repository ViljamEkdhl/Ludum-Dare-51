<script>
    //Använd värdet ifrån stores istället för att skapa en ny här (placedAmount)?
    import { writable } from 'svelte/store';

    let oldPrice;
    export let placedAmount = writable(0);

    let win;


    export function placeBet(amount){
        placedAmount = amount;
        console.log(amount);
        console.log(oldPrice);
    }

    export function savePrice(coinCurrencyCost){
        console.log(coinCurrencyCost);
        if(placedAmount != ' '){
            if(coinCurrencyCost > oldPrice){
                win = true;
            }
            if(coinCurrencyCost == oldPrice){
                win = 'draw'
            }
            if(coinCurrencyCost < oldPrice){
                win = false
            }
        }
        oldPrice = coinCurrencyCost;
    }

</script>

{#if win == true}
    <span>You WIN!</span>
{/if}

{#if win == 'draw'}
    <span>It neither went up or down :c</span>
{/if}

{#if win == false}
    <span>You LOSE!</span>
{/if}
