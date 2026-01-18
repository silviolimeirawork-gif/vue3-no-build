    // Desestruturando ref do Vue global
    const { createApp, ref } = Vue;

    createApp({
        setup() {
            // Estado reativo: contador inicia em 0
            const count = ref(0);

            // Métodos para alterar o estado
            const increment = () => {
                count.value++; // ref() precisa de .value
            };

            const decrement = () => {
                count.value--;
            };

            // Retorna os dados e métodos para o template
            return {
                count,
                increment,
                decrement
            };
        }
    }).mount('#app');