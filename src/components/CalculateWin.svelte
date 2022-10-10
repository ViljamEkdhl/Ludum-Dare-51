<script>
    import Coin from '../components/Coin.svelte'

    let oldPrice;
    let placedAmount = ' ';

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
            }else{
                win = false;
            }
        }
        oldPrice = coinCurrencyCost;
    }

</script>

{#if win != undefined}
    <span>You WIN!</span>
{/if}
