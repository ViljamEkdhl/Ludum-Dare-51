<script>
	import { to_number } from 'svelte/internal';
    import { betInput, walletAmount } from '../stores/stores';
    

    let oldPrice;
    let amount = 0;
    
    betInput.subscribe(value => {
		amount = value
	})

    let win;

    export function savePrice(coinCurrencyCost){
        console.log(coinCurrencyCost);
        if(amount != ' '){
            if(coinCurrencyCost > oldPrice){
                win = true;
                walletAmount.update(n => n + to_number(amount))
            }
            if(coinCurrencyCost == oldPrice){
                win = 'draw'
            }
            if(coinCurrencyCost < oldPrice){
                win = false
                walletAmount.update(n => n - amount)
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
