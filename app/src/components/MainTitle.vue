<template>
    <router-link to="/">
        <h1>welcome to the <span class="heading">cookery!</span></h1>
    </router-link>   
</template>

<script lang="ts" setup>

</script>

<style scoped>

h1 {
    font-size: 250%;
}

.heading {
    position: relative;
}

.heading::after {
    content: "";
    position: absolute;
    height: 4.5rem;
    width: 10.9rem;
    left: -0.2rem;
    top: -0.5rem;
    z-index: -1;
    background-image: url(data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iaGVhZGVyLXN2ZyIgdmlld0JveD0iMCAwIDgwIDMzIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczpzZXJpZj0iaHR0cDovL3d3dy5zZXJpZi5jb20vIiBzdHlsZT0iZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjI7Ij48cGF0aCBkPSJNNjkuMzg1LDMuOTQ2Yy0wLjY5MSwtMC4yNDUgLTEuMzcsLTAuNTE3IC0yLjA3NiwtMC43MzFjLTIuNzE4LC0wLjgyNCAtNS41NTEsLTEuMjgyIC04LjQyMiwtMS40ODdjLTMuMTc2LC0wLjIyNyAtNi4zNzMsLTAuNDE3IC05LjU1OCwtMC4zODZjLTguNjMyLDAuMDgxIC0xNy4xNjgsMC44NTIgLTI1LjQ4MywyLjg0OWMtNC4zODIsMS4wNTEgLTguNjAxLDIuNDI5IC0xMi41MzEsNC4zNTFjLTEuOTgzLDAuOTcxIC0zLjgwNiwyLjA3NSAtNS4xNjMsMy42NTFjLTEuOTQ2LDIuMjU5IC0yLjE0NCw4LjczNCAxLjM4MywxMS4xNzhjMy4wNDgsMi4xMTMgNi41OTksMy4zNDUgMTAuNDI0LDQuMDc3YzQuMTY5LDAuNzk3IDguNDEyLDEuMjE0IDEyLjY4OCwxLjQ2MWM0LjM2MSwwLjI1MiA4LjcyNSwwLjI3MyAxMy4wNzgsMC4wODhjNi4yMywtMC4yNjMgMTIuMzkyLC0wLjk0NSAxOC4yNywtMi43ODFjMy4wNDEsLTAuOTUgNS45MTQsLTIuMTM5IDguMTcyLC00LjExOWMwLjU1NCwtMC40ODcgMi44NjUsLTIuMjIyIDMuMzA5LC0yLjgwMmMxLjExNCwtMS40NTUgMS41OTksLTMuNTk0IDAuOTk5LC00LjYzNWMtMC45MTcsLTEuNTkxIC0zLjEwMywtMi45MjcgLTQuNTYyLC00LjIyNmMtMy4yMDIsLTIuODU0IC04Ljc4OSwtNC4xMTkgLTEzLjIxNSwtNS4zMDJjLTAuNTE5LC0wLjEzOCAtMS4wMzQsLTAuMjg1IC0xLjU1MywtMC40MmMtMC41LC0wLjEzMiAtMC41MTksLTAuNDEzIC0wLjM2NiwtMC44MTVjMi4xOTQsLTAuMTc2IDQuNDEsLTAuMjM3IDYuNjA0LC0wLjAxYzMuNDI2LDAuMzU2IDYuNjU5LDEuMjQ1IDkuNzEsMi41OGMzLjg2NCwxLjY5MiA2LjU1Niw0LjI1MyA4LjI4MSw3LjQ4OWMwLjk2MywxLjgxIDAuNzY0LDMuNjQzIC0wLjI0Nyw1LjQ0Yy0xLjgzMiwzLjI1OSAtNC45MTYsNS41ODMgLTguNDA0LDcuNjI5Yy00Ljk1MiwyLjkwNSAtMTAuNTc5LDQuMzUyIC0xNi41MTYsNS4xNzRjLTUuNjc0LDAuNzg2IC0xMS4zOTksMC45MDggLTE3LjEyLDAuNzI5Yy03LjEzMSwtMC4yMjMgLTE0LjE5MywtMC45NjggLTIxLjA1OCwtMi42NDZjLTMuODk5LC0wLjk1MyAtNy42NTgsLTIuMTc2IC0xMC44NDksLTQuMzA4Yy0zLjM5MSwtMi4yNjQgLTUuMTA0LC01LjE5MiAtNS4xNzcsLTguNzc5Yy0wLjA1NiwtMi42NzIgMC43NzcsLTUuMDgxIDIuOTE1LC03LjE0YzEuNDc0LC0xLjQxOCAzLjI2LC0yLjU0NCA1LjIwOSwtMy40OTZjNC4yMSwtMi4wNTQgOC43NjgsLTMuNDE5IDEzLjQ5NCwtNC40MThjNC40NTEsLTAuOTQgOC45ODUsLTEuNDgzIDEzLjU2NiwtMS44MDljNC4zMTUsLTAuMzA4IDguNjM1LC0wLjQwMSAxMi45NTIsLTAuMjgzYzUuMzI3LDAuMTQ1IDEwLjYzNiwwLjUyOCAxNS44MDgsMS42ODZjMS44MDUsMC40MDMgMy41ODMsMC44NjkgNS4xNTYsMS43MzVjMC4xNDcsMC4wODEgMC4yOCwwLjE4MSAwLjQyMSwwLjI3MmMtMC4wNDcsMC4wNjggLTAuMDkzLDAuMTM2IC0wLjEzOSwwLjIwNFoiIHN0eWxlPSJmaWxsOiNmZmMzNjI7ZmlsbC1ydWxlOm5vbnplcm87Ii8+PC9zdmc+);
    background-repeat: no-repeat;
    background-size: cover;
}

@media (prefers-color-scheme: dark) {
    
    .heading::after {
        opacity: 0.4;
    }

}


</style>
