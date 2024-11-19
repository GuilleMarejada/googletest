declare global {
    interface Window {
        dataLayer: any[];  // Definimos `dataLayer` como un arreglo de cualquier tipo
        gtag: (...args: any[]) => void;

    }
}

// Asegúrate de que TypeScript trate este archivo como un módulo
export { };
