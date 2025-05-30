<script lang="ts">
	import {onMount} from 'svelte'
	import { Sun,Moon } from 'lucide-svelte';
	
	let theme = 'light-theme'
    let isDarkTheme = true;

	onMount(function(){
		document.documentElement.className = theme;
	})

 function toggleTheme() {
    if(theme != 'light-theme'){
        theme = 'light-theme'
        document.documentElement.className ='light-theme';
        isDarkTheme = false
    }else{
        theme = 'dark-theme'
        document.documentElement.className ='dark-theme';
        isDarkTheme = true;

    }
  } 
</script>



<button class="btn" on:click={() => toggleTheme()}>

    {#if isDarkTheme}
    <Sun/>
    {:else}
    <Moon/>
    {/if}

</button>

<slot/>