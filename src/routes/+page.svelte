<script lang="ts">
    import MediaList from './MediaList.svelte'
    import AddMediaForm from './AddMediaForm.svelte';
    import type { MediaItem } from '$lib/types';
    import type { MediaInput } from '$lib/types';

    let media_list = $state<MediaItem[]>([
        { id: 0, title: "The Hobbit", type: "movie"},
        { id: 1, title: "1984", type: "book"}
    ]);

    let next_id = $state(2);

    function addMedia(item: MediaInput) {
        media_list.push({
            id: next_id++,
            ...item
        });
    }

</script>

<div class="background"></div>


<main>
    <header>
        <h1>.logs</h1>
        <p>A Minimalist Media Tracker</p>
    </header>

    <div class="spacer"></div>

    <h2>Add your recent reads/watch/play/listen:</h2>
    <AddMediaForm onAdd={addMedia} /> 

    <div class="spacer"></div>

    <h2>==== Your log ====</h2>
    <MediaList {media_list} />

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