<script lang="ts">
    import MediaList from './MediaList.svelte'
    import AddMediaForm from './AddMediaForm.svelte';
    import { browser } from '$app/environment';
    import type { MediaItem } from '$lib/types';
    import type { MediaInput } from '$lib/types';


    const LIST_KEY = 'media_list';
    const ID_KEY = 'next_id';

    // init media_list + id in case first time user visits
    let media_list = $state<MediaItem[]>([
        { id: 0, title: "EXAMPLE: The Hobbit", type: "book", date: new Date(2024, 1, 27)},
    ]);
    let next_id = $state(1);

    // fetch stored data if it exists
    if (browser && localStorage.getItem(LIST_KEY) !== null) {
        media_list = JSON.parse(localStorage.getItem(LIST_KEY));
    } 
    if (browser && localStorage.getItem(ID_KEY) !== null) {
        next_id = parseInt(localStorage.getItem(ID_KEY));
    }

    function addMedia(item: MediaInput) {
        media_list.push({
            id: next_id++,
            ...item
        });
    }

    function remove_entry(id: number) {
        media_list = media_list.filter(item => item.id !== id);
    }

    // reactively log
    $effect(() => {
        console.log('media_list changed:', $state.snapshot(media_list));
    })
    $effect(() => {
        console.log('next_id changed:', $state.snapshot(next_id));
    })

    // save state values to localStorage
    $effect(() => {
        if (!browser) return;

        localStorage.setItem(
            LIST_KEY,
            JSON.stringify(media_list)
        );
        localStorage.setItem(
            ID_KEY,
            String(next_id)
        );
    });

</script>

<div class="background"></div>


<main>
    <header>
        <h1>.logs</h1>
        <p>A Minimalist Media Tracker</p>
    </header>

    <div class="spacer"></div>

    <h2>Add your recent read/watch/play/listen:</h2>
    <AddMediaForm onAdd={addMedia} /> 

    <div class="spacer"></div>

    <h2>==== Your log ====</h2>
    <MediaList {media_list} onDelete={remove_entry}/>

    <div class="spacer"></div>

    <hr>

    <div class="spacer"></div>

    <footer>
        <h2>.logs (2026)</h2>
        <p>A project to learn the basics of Svelte.</p>
    </footer>
</main>


<style>
.background {
    position: fixed;
    inset: 0;
    z-index: -1;

    background-image: url('/background.webp');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
.spacer {
    position: relative;
    height: 10vh;
}
main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
hr {
    width: 70vw;
}
h2 {
    margin: 16px;
}
header {
    position: relative;
    background-color: rgba(0, 0, 0, 1);
    padding: 16px;
    border: 4px solid var(--accent);
    border-radius: 8px;
    text-align: center;
}

footer {
    position: relative;
    text-align: center;

    background-color: rgba(0, 0, 0, 1);
    border: 4px solid var(--accent);
    border-radius: 8px;

    height: auto;
    width: 70vw;

    padding: 16px;
}
</style>