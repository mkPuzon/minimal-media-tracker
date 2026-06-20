<script lang="ts">
    import MediaList from './MediaList.svelte'
    import AddMediaForm from './AddMediaForm.svelte';
    import type { MediaItem } from '$lib/types';
    import type { MediaInput } from '$lib/types';

    let media_list = $state<MediaItem[]>([
        { id: 0, title: "The Hobbit", type: "movie"},
        { id: 1, title: "Metamorphasis", type: "book"}
    ]);

    let next_id = $state(2);

    function addMedia(item: MediaInput) {
        media_list.push({
            id: next_id++,
            ...item
        });
    }

</script>

<main>
    <h1>.logs -- A Minimalist Media Tracker</h1>
    <h2>==== Your log ====</h2>
    <MediaList {media_list} />

    <h2>Add more media:</h2>
    <AddMediaForm onAdd={addMedia} /> 

    <hr>

    <footer>
        <h2>.logs (2026)</h2>
    </footer>
</main>


<style>
main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
h1 {
    background-color: rgba(0, 0, 0, 1);
    padding: 16px;
    border: 4px solid var(--accent);
    border-radius: 8px;
}
hr {
    width: 70vw;
}
footer {
    position: relative;
    text-align: center;

    background-color: rgba(0, 0, 0, 1);
    border: 4px solid var(--accent);
    border-radius: 8px;

    height: auto;
    width: 70vw;
}
</style>