<script lang="ts">
    import { MEDIA_TYPES } from '$lib/types';

    let { media_list, onDelete } = $props();
    let editing_id = $state<number | null>(null);

    function toggle_edit_menu(id: number) {
        editing_id = editing_id === id ? null : id;
    }
</script>

<div class="log">
<div class="media-entrys">
    {#each [...media_list].reverse() as entry (entry.id)}
        <div class="media-entry">

            <h3>{entry.title}</h3>
            <h4>{entry.type.toUpperCase()}</h4>

            <button onclick={() => toggle_edit_menu(entry.id)}>{editing_id === entry.id ? 'Close Edit Menu' : 'Edit'}</button>
            <button onclick={() => onDelete(entry.id)}>Delete</button>

            {#if editing_id == entry.id}
                <label for='title'>Title:</label>
                <input id='title' type='text' bind:value={entry.title}>

                <label for='type'>Type:</label>
                <select id='type' bind:value={entry.type}>
                    {#each MEDIA_TYPES as type (type)}
                        <option value={type}>{type}</option>
                    {/each}
                </select>

                <label for='date'>Date:</label>
                <input id='date' type='date' bind:value={entry.date}>
        {/if}
        </div>
    {/each}
</div>
</div>

<style>
.log {
    display: flex;
    overflow: wrap;
}
.media-entrys {
    width: 50vw;
    background-color: rgb(255, 255, 255, 0.1);
    border: 4px solid white;
    border-radius: 4px;
}
.media-entry {
    border: 4px solid black;
    background-color: rgb(255, 255, 255, 0.2);
    padding: 16px;
    margin: 16px;
}
    .media-entry h3 {
        padding: 0px;
        margin: 0px;
        font-family: 'orbitron';
    }
    .media-entry h4 {
        padding: 0px;
        margin: 0px;
        font-size: 0.8rem;
        color: var(--accent);
        font-family: 'orbitron';
    }
    .media-entry button {
        margin-top: 8px;
    }
</style>