<script lang="ts">
    import MediaList from './MediaList.svelte'
    import AddMediaForm from './AddMediaForm.svelte';
    import type { MediaItem } from '$lib/types';
    import type { MediaInput } from '$lib/types';

    let media_list = $state<MediaItem[]>([
        { id: 0, title: "The Hobbit", type: "Movie"},
        { id: 1, title: "Metamorphasis", type: "Book"}
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
    <h3>Your logs:</h3>
    <MediaList {media_list} />

    <hr>

    <h2>Add more media:</h2>
    <AddMediaForm onAdd={addMedia} /> 
</main>


<style>

</style>