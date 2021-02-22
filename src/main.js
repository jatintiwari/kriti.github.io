import App from "./App.svelte";

const app = new App({
    target: document.body,
    props: {
        isMobile: document.body.clientWidth < 768,
    },
});

export default app;
